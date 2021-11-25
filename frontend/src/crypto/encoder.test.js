import { PasswordEncoder } from "./encoder";

test("Removes diacritics", () => {
    const input = "áàâäǎăāãåąćċĉčçďéèėêëěĕēẽęẹġĝğģĥḥíìîïǐĭīĩįĵķĺľļḷḹṃńňñņṇóòôöǒŏōõǫọőŕřŗṛṝśŝšşșṣťţțṭúùûüǔŭūũůųụűǘǜǚǖŵýŷÿỹȳźżž";
    const expected = "aaaaaaaaaacccccdeeeeeeeeeeegggghhiiiiiiiiijklllllmnnnnnooooooooooorrrrrssssssttttuuuuuuuuuuuuuuuuwyyyyyzzz";

    const textEncoder = new TextEncoder();
    const passwordEncoder = new PasswordEncoder(textEncoder);

    expect(passwordEncoder.removeDiacritics(input)).toBe(expected);
})