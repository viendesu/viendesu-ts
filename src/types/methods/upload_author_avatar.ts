import { BaseRequest, HttpMethod, RestMetaInfo } from "../request"
import { Token } from "../request/security/token"

export interface UploadAuthorAvatarPayload {
    id: number
    data: { avatar: File }
}

export class UploadAuthorAvatar extends BaseRequest<true, UploadAuthorAvatarPayload, Token> {
    getRestMeta(): RestMetaInfo {
        return {
            method: HttpMethod.Patch,
            path: `/authors/${this.payload.id}/avatar/`,
            files: this.payload.data
        }
    }
    
    intoResponse(obj: any): true {
        return obj
    }
}
