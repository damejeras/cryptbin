package bin

type Transfer struct {
	ID, Hint, Content string
	Attempts          int
	BurnOnRead        bool
}

type TransferRepository interface {
	Save(*Transfer) error
	FindByID(string) (*Transfer, error)
	DeleteByID(string) error
}
