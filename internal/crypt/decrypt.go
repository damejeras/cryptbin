package crypt

import (
	"bytes"
	"crypto/aes"
	"crypto/cipher"
	"crypto/sha256"
	"encoding/base64"

	"github.com/pkg/errors"
	"golang.org/x/crypto/pbkdf2"
)

type DecryptError struct {
	Cause   error
	Message string
}

func (de DecryptError) Error() string {
	return de.Message
}

func Decrypt(input, password []byte) ([]byte, error) {
	data := make([]byte, base64.StdEncoding.DecodedLen(len(input)))
	_, err := base64.StdEncoding.Decode(data, input)
	if err != nil {
		return nil, errors.Errorf("base64 decode: %v", err)
	}

	salt := data[:16]
	iv := data[16 : 16+12]
	actualData := data[16+12:]

	key := pbkdf2.Key(password, salt, 250000, 32, sha256.New)
	aesCipher, err := aes.NewCipher(key)
	if err != nil {
		return nil, errors.Errorf("create AES block cipher: %v", err)
	}

	aesGCM, err := cipher.NewGCM(aesCipher)
	if err != nil {
		return nil, errors.Errorf("create GCM cipher mode: %v", err)
	}

	decryptedData, err := aesGCM.Open(nil, iv, bytes.Trim(actualData, "\x00"), nil)
	if err != nil {
		return nil, DecryptError{Cause: err, Message: "bad password"}
	}

	return decryptedData, nil
}
