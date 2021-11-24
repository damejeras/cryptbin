package crypt

import (
	"unicode"

	"github.com/pkg/errors"
	"golang.org/x/text/runes"
	"golang.org/x/text/transform"
	"golang.org/x/text/unicode/norm"
)

type set struct {
	rangeTable *unicode.RangeTable
}

func (s set) Contains(r rune) bool {
	return unicode.Is(s.rangeTable, r)
}

func RemoveDiacritics(input string) (string, error) {
	result, _, err := transform.String(
		transform.Chain(norm.NFD, runes.Remove(set{unicode.Mn}), norm.NFC),
		input,
	)
	if err != nil {
		return "", errors.Errorf("remove diacritics: %v", err)
	}

	return result, nil
}
