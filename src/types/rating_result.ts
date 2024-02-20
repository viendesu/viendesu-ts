import { Rating } from "./rating";

export interface RatingResult {
    created_at: Date
    updated_at: Date

    value?: Rating | null

    user_id: number
    game_id: number
}
