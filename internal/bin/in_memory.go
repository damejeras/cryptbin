package bin

import (
	"fmt"
	"time"

	"github.com/patrickmn/go-cache"
)

var (
	errPasteNotFound = fmt.Errorf("paste not found")
)

type InMemoryRepository struct {
	memory *cache.Cache
}

func NewInMemoryRepository() *InMemoryRepository {
	return &InMemoryRepository{
		memory: cache.New(time.Minute*15, time.Second*30),
	}
}

func (r *InMemoryRepository) Save(t *Transfer) error {
	r.memory.Set(t.ID, t, cache.DefaultExpiration)

	return nil
}

func (r *InMemoryRepository) FindByID(id string) (*Transfer, error) {
	t, ok := r.memory.Get(id)
	if !ok {
		return nil, errPasteNotFound
	}

	return t.(*Transfer), nil
}

func (r *InMemoryRepository) DeleteByID(id string) error {
	r.memory.Delete(id)

	return nil
}
