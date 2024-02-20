import { BaseRequest, HttpMethod, RestMetaInfo } from "../request"
import { Token } from "../request/security/token"

import { FileId } from "../file_id"

export interface UploadUserAvatarPayload {
    avatar: File
}

export class UploadUserAvatar extends BaseRequest<FileId, UploadUserAvatarPayload, Token> {
    getRestMeta(): RestMetaInfo {
        return {
            method: HttpMethod.Patch,
            path: "/users/me/avatar",

            files: {
                avatar: this.payload.avatar
            }
        };
    }

    intoResponse(obj: any): FileId {
        return new FileId(obj)
    }
}

