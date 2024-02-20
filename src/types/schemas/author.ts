import { FileId } from "../file_id";
import { parseMaybeDate } from "./utils";

export interface Author {
    id: number
    slug: string

    avatar?: FileId | null
    cover?: FileId | null

    name?: string | null
    description: string

    owner_id: number | null

    verified_at?: Date | null
    created_at: Date
}

export const parseAuthor = (o: any): Author => ({
    id: o.id,
    slug: o.slug,
    avatar: o.avatar,
    cover: o.cover,
    name: o.name,
    description: o.description,
    owner_id: o.owner_id,
    verified_at: parseMaybeDate(o.verified_at),
    created_at: o.created_at
});
