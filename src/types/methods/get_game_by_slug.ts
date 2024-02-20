import { BaseRequest, HttpMethod, RestMetaInfo } from "../request"
import { Game, parseGame } from "../schemas/game"

export interface GetGameBySlugPayload {
    author_id: number
    slug: string
}

export class GetGameBySlug extends BaseRequest<Game, GetGameBySlugPayload> {
    getRestMeta(): RestMetaInfo {
        return {
            method: HttpMethod.Get,
            path: `/authors/${this.payload.author_id}/games/${this.payload.slug}`
        }
    }
    
    intoResponse(obj: any): Game {
        return parseGame(obj)
    }
}
