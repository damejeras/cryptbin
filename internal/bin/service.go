package bin

import (
	"context"
	"fmt"
	"strings"
	"time"

	"github.com/damejeras/cryptbin/api"
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

func NewService(repository TransferRepository) api.BinService {
	return &service{repository: repository}
}

func (s *service) Find(ctx context.Context, req api.FindRequest) (*api.FindResponse, error) {
	t, err := s.repository.FindByID(req.ID)
	if err != nil {
		return nil, err
	}

	return &api.FindResponse{Hint: t.Hint, AttemptsLeft: t.Attempts, Error: ""}, nil
}

func (s *service) Paste(ctx context.Context, req api.PasteRequest) (*api.PasteResponse, error) {
	t := Transfer{
		ID:         uuid.NewString(),
		Content:    req.EncryptedContent,
		Hint:       req.Hint,
		BurnOnRead: req.BurnOnRead,
	}

	if err := s.repository.Save(&t); err != nil {
		return nil, err
	}

	response := api.PasteResponse{
		ValidUntil: time.Now().Add(time.Hour).String(),
		ID:         t.ID,
	}

	return &response, nil
}

func (s *service) SubmitPassword(ctx context.Context, req api.SubmitPasswordRequest) (*api.SubmitPasswordResponse, error) {
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

	return &api.SubmitPasswordResponse{
		Content: string(decrypted),
	}, nil
}
