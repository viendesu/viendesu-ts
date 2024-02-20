import { User, parseUser } from "../../schemas/user"
import { BaseRequest, HttpMethod, Payload, RestMetaInfo } from "../request"
import { Token } from "../request/security/token"

export class GetMe extends BaseRequest<User, Payload, Token> {
    getRestMeta(): RestMetaInfo {
        return {
            method: HttpMethod.Get,
            path: "/users/me"
        }
    }

    intoResponse(obj: any): User {
        return parseUser(obj)
    }
}
