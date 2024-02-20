import { BaseRequest, HttpMethod, RestMetaInfo } from "../request"
import { Game, parseGame } from "../schemas/game"

export interface GetGamePayload {
    id: number
}

export class GetGame extends BaseRequest<Game, GetGamePayload> {
    getRestMeta(): RestMetaInfo {
        return {
            method: HttpMethod.Get,
            path: `/games/${this.payload.id}`
        }
    }

    intoResponse(obj: any): Game {
        return parseGame(obj)
    }
}
