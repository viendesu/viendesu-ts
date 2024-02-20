import { BaseRequest, HttpMethod, RestMetaInfo } from "../request"
import { Token } from "../request/security/token"

export interface UpdateAuthorPayload {
    id: number
    data: {
        description?: string
        name?: string
        slug?: string
    }
}

export class UpdateAuthor extends BaseRequest<true, UpdateAuthorPayload, Token> {
    getRestMeta(): RestMetaInfo {
        return {
            method: HttpMethod.Patch,
            path: `/authors/${this.payload.id}`,

            body: this.payload.data
        };
    }
    
    intoResponse(obj: any): true {
        return obj
    }
}
