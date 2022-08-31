package bin

import (
	"context"
	"fmt"
	"strings"
	"time"

	v1 "github.com/damejeras/cryptbin/api/v1"
	"github.com/damejeras/cryptbin/internal/crypt"
	"github.com/google/uuid"
	"github.com/pkg/errors"
)

const (
	maxDecryptAttempts = 3
)

type service struct {
	repository TransferRepository
}

func NewService(repository TransferRepository) v1.BinService {
	return &service{repository: repository}
}

func (s *service) Find(ctx context.Context, req *v1.FindRequest) (*v1.FindResponse, error) {
	t, err := s.repository.FindByID(req.ID)
	if err != nil {
		return nil, err
	}

	return &v1.FindResponse{Hint: t.Hint, AttemptsLeft: t.Attempts}, nil
}

func (s *service) Paste(ctx context.Context, req *v1.PasteRequest) (*v1.PasteResponse, error) {
	t := Transfer{
		ID:         uuid.NewString(),
		Content:    req.EncryptedContent,
		Hint:       req.Hint,
		BurnOnRead: req.BurnOnRead,
	}

	if err := s.repository.Save(&t); err != nil {
		return nil, err
	}

	return &v1.PasteResponse{
		ValidUntil: time.Now().Add(time.Hour).String(),
		ID:         t.ID,
	}, nil
}

func (s *service) SubmitPassword(ctx context.Context, req *v1.SubmitPasswordRequest) (*v1.SubmitPasswordResponse, error) {
	t, err := s.repository.FindByID(req.ID)
	if err != nil {
		return nil, err
	}

	password, err := crypt.RemoveDiacritics(req.Password)
	if err != nil {
		return nil, err
	}

	decrypted, err := crypt.Decrypt([]byte(t.Content), []byte(strings.ToLower(password)))
	if err != nil {
		if de, ok := err.(crypt.DecryptError); ok {
			t.Attempts++

			switch t.Attempts {
			case maxDecryptAttempts:
				if err := s.repository.DeleteByID(req.ID); err != nil {
					return nil, errors.Wrap(err, "delete paste")
				}

				return nil, crypt.DecryptError{Cause: de, Message: "paste deleted"}
			default:
				if err := s.repository.Save(t); err != nil {
					return nil, errors.Wrap(err, "save updated paste")
				}

				return nil, crypt.DecryptError{Cause: de, Message: fmt.Sprintf("bad password, %d attempts left", maxDecryptAttempts-t.Attempts)}
			}
		}

		return nil, err
	}

	if t.BurnOnRead {
		if err := s.repository.DeleteByID(req.ID); err != nil {
			return nil, errors.Wrap(err, "delete on read")
		}
	}

	return &v1.SubmitPasswordResponse{
		Content: string(decrypted),
	}, nil
}
