enum TokenKind {
    Refresh,
    Access,
}

class Token {
    kind: TokenKind
    value: string

    constructor(kind: TokenKind, value: string) {
        this.kind = kind;
        this.value = value
    }
}

export { Token, TokenKind }

