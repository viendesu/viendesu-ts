import { Badge } from "../badge"
import { Genre } from "../genre"
import { Tag } from "../tag"
import { Rating } from "../rating"

import { FileId } from "../file_id"
import { constructMaybe } from "../utils"

export interface Game {
    id: number
    author_id?: number | null

    title: string
    description: string

    slug?: string | null

    cover?: FileId | null
    thumbnail?: FileId | null

    rating: Rating
    users_rated: number

    precise_release_date: boolean
    release_date?: Date | null

    badges: Badge[]
    genres: Genre[]
    tags: Tag[]

    screenshots: FileId[]

    published_at?: Date | null
    created_at: Date
}

export const parseGame = (g: any): Game => ({
    id: g.id,
    author_id: g.author_id,

    title: g.title,
    description: g.description,

    slug: g.slug,

    cover: g.cover,
    thumbnail: g.thumbnail,

    rating: new Rating(g.rating),
    users_rated: g.users_rated,

    precise_release_date: g.precise_release_date,
    release_date: constructMaybe(g.precise_date, (v) => new Date(v)),

    badges: (g.badges as string[]).map((v) => new Badge(v)),
    genres: (g.genres as string[]).map((v) => new Genre(v)),
    tags: (g.tags as string[]).map((v) => new Tag(v)),

    screenshots: (g.screenshots as string[]).map((v) => new FileId(v)),

    published_at: constructMaybe(g.published_at, (v) => new Date(v)),
    created_at: g.created_at
});
