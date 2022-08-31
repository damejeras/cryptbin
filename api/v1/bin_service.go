package v1

import "context"

type BinService interface {
	Find(context.Context, *FindRequest) (*FindResponse, error)
	SubmitPassword(context.Context, *SubmitPasswordRequest) (*SubmitPasswordResponse, error)
	Paste(context.Context, *PasteRequest) (*PasteResponse, error)
}

type FindRequest struct {
	ID string `json:"id"`
}

type FindResponse struct {
	Hint         string `json:"hint"`
	AttemptsLeft int    `json:"attempts_left"`
}

type SubmitPasswordRequest struct {
	ID       string `json:"id"`
	Password string `json:"password"`
}

type SubmitPasswordResponse struct {
	Content string `json:"content"`
}

type PasteRequest struct {
	Hint             string `json:"hint"`
	EncryptedContent string `json:"encrypted_content"`
	BurnOnRead       bool   `json:"burn_on_read"`
}

type PasteResponse struct {
	ID         string `json:"id"`
	ValidUntil string `json:"valid_until"`
}
