package spec

type BinService interface {
	Find(FindRequest) FindResponse
	SubmitPassword(SubmitPasswordRequest) SubmitPasswordResponse
	Paste(PasteRequest) PasteResponse
}

type FindRequest struct {
	ID string
}

type FindResponse struct {
	Hint         string
	AttemptsLeft int
}

type SubmitPasswordRequest struct {
	ID, Password string
}

type SubmitPasswordResponse struct {
	Content string
}

type PasteRequest struct {
	Hint, EncryptedContent string
	BurnOnRead             bool
}

type PasteResponse struct {
	ID         string
	ValidUntil string
}
