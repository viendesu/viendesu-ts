import { BaseRequest, HttpMethod, Payload, RestMetaInfo } from "../request";
import { Token } from "../request/security/token";
import { TokenPair } from "../token_pair";

class Refresh extends BaseRequest<TokenPair, Payload, Token> {
    getRestMeta(): RestMetaInfo {
        return {
            path: "/users/authenticate/refresh",
            method: HttpMethod.Post,
        };
    }

    intoResponse(obj: any): TokenPair {
        return {
            access: obj.access,
            refresh: obj.refresh,
        };
    }
}

export { Refresh }