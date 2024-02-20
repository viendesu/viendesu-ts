import { FileId } from "./file_id";

export enum Role {
    Owner,
    Admin,
    Moderator,
    User
}

export interface UserFlags {
    activated: boolean
    banned: boolean
    role: Role
}

export interface User {
    id: number

    avatar?: FileId | null
    email?: string | null

    username: string
    flags: UserFlags

    created_at: Date
}

export const parseUser = (o: any): User => {
    return {
        id: o.id,
        avatar: o.avatar,
        email: o.email,

        username: o.username,
        flags: parseUserFlags(o.flags),
        created_at: new Date(o.created_at)
    };
};
export const parseUserFlags = (o: any): UserFlags => {
    return {
        activated: o.activated,
        banned: o.banned,
        role: parseRole(o.role)
    };
};
export const parseRole = (s: string) => {
    switch (s) {
        case "owner":
            return Role.Owner;
        case "admin":
            return Role.Admin;
        case "moderator":
            return Role.Moderator;

        case "user":
        default:
            return Role.User;
    }
}
