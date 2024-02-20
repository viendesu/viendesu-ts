import { BaseRequest, HttpMethod, RestMetaInfo } from "../request"
import { Token } from "../request/security/token"

export interface UpdateGamePayload {
    id: number

    data: {
        description?: string,
        title?: string,
    
        slug?: string | null
    }
}

export class UpdateGame extends BaseRequest<true, UpdateGamePayload, Token> {
    getRestMeta(): RestMetaInfo {
        let data = this.payload.data
        return {
            method: HttpMethod.Patch,
            path: `/games/${this.payload.id}`,
            body: {
                title: data.title,
                description: data.description,
                slug: data.slug == undefined ? "as_is" : { modify: data.slug }
            }
        };
    }
    
    intoResponse(obj: any): true {
        return obj
    }
}
