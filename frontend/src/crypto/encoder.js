export class PasswordEncoder {
    constructor(textEncoder) {
        this.textEncoder = textEncoder;
    }

    encode(input) {
        return this.textEncoder.encode(this.removeDiacritics(input).toLowerCase());
    }

    removeDiacritics(input) {
        return input.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    }
}