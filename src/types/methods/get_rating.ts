import { BaseRequest, HttpMethod, RestMetaInfo } from "../request"
import { Rating } from "../rating"
import { constructMaybe } from "../utils"
import { Token } from "../request/security/token"
import { RatingResult } from "../rating_result"

export interface GetRatingPayload {
    game_id: number
}

export class GetRating extends BaseRequest<RatingResult, GetRatingPayload, Token> {
    getRestMeta(): RestMetaInfo {
        return {
            method: HttpMethod.Get,
            path: `/games/${this.payload.game_id}/rating`,
        }
    }

    intoResponse(obj: any): RatingResult {
        return {
            game_id: obj.game_id,
            user_id: obj.user_id,

            value: constructMaybe(obj.value, (v) => new Rating(v)),
            updated_at: new Date(obj.updated_at),
            created_at: new Date(obj.created_at)
        };
    }
}
