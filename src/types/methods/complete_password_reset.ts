import { BaseRequest, HttpMethod, RestMetaInfo } from "../request"

interface CompletePasswordResetPayload {
    user_id: number
    secret: string
}

class CompletePasswordReset extends BaseRequest<true, CompletePasswordResetPayload> {
    getRestMeta(): RestMetaInfo {
        return {
            method: HttpMethod.Post,
            path: `/users/reset_password/${this.payload.user_id}/${this.payload.secret}`,
        };
    }
    
    intoResponse(obj: any): true {
        return obj
    }
}

export { CompletePasswordReset, CompletePasswordResetPayload }
