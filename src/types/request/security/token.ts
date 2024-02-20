import { SecurityRequirement } from ".";

interface TokenOr<T> extends SecurityRequirement {
    token: string | T;
}

type Token = TokenOr<string>;

export { TokenOr, Token }
