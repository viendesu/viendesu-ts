import { BaseRequest, HttpMethod, RestMetaInfo } from "../request"
import { Token } from "../request/security/token"
import { CaptchaKey } from "../request/security/captcha"

export interface CreateAuthorPayload {
    description: string
    name: string | null
    slug: string
}

export class CreateAuthor extends BaseRequest<number, CreateAuthorPayload, Token & CaptchaKey> {
    getRestMeta(): RestMetaInfo {
        return {
            method: HttpMethod.Post,
            path: "/authors",
            body: this.payload
        };
    }
    
    intoResponse(obj: any): number {
        return obj
    }
}
