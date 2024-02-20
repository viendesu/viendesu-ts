import { BaseRequest, HttpMethod, RestMetaInfo } from "../request"
import { Author, parseAuthor } from "../schemas/author"

export interface GetAuthorPayload {
    id: number
}

export class GetAuthor extends BaseRequest<Author, GetAuthorPayload> {
    getRestMeta(): RestMetaInfo {
        return {
            method: HttpMethod.Get,
            path: `/authors/${this.payload.id}`
        };
    }

    intoResponse(obj: any): Author {
        return parseAuthor(obj)
    }
}
