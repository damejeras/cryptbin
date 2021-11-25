package crypt

import "testing"

func TestRemoveDiacritics(t *testing.T) {
	const input = "áàâäǎăāãåąćċĉčçďéèėêëěĕēẽęẹġĝğģĥḥíìîïǐĭīĩįĵķĺľļḷḹṃńňñņṇóòôöǒŏōõǫọőŕřŗṛṝśŝšşșṣťţțṭúùûüǔŭūũůųụűǘǜǚǖŵýŷÿỹȳźżž"
	const expected = "aaaaaaaaaacccccdeeeeeeeeeeegggghhiiiiiiiiijklllllmnnnnnooooooooooorrrrrssssssttttuuuuuuuuuuuuuuuuwyyyyyzzz"
	output, err := RemoveDiacritics(input)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if output != expected {
		t.Errorf("expected %q, got %q", expected, output)
	}
}
