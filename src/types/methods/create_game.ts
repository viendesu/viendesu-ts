import { BaseRequest, HttpMethod, RestMetaInfo } from "../request"
import { Token } from "../request/security/token"
import { CaptchaKey } from "../request/security/captcha"

export interface CreateGamePayload {
    author_id: number
    slug?: string

    title: string
    description: string

    release_date?: Date
    precise_release_date?: boolean
}

export class CreateGame extends BaseRequest<number, CreateGamePayload, Token & CaptchaKey> {
    getRestMeta(): RestMetaInfo {
        return {
            method: HttpMethod.Post,
            path: "/games/",
            body: this.payload
        }
    }
    
    intoResponse(obj: any): number {
        return obj
    }
}
