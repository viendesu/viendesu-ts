import { BaseRequest, HttpMethod, RestMetaInfo } from "../request";

interface ConfirmRegistrationPayload {
    user_id: number
    secret_key: string
}

class ConfirmRegistration extends BaseRequest<void, ConfirmRegistrationPayload> {
    getRestMeta(): RestMetaInfo {
        return {
            method: HttpMethod.Get,
            path: `/users/confirm/${this.payload.user_id}/${this.payload.secret_key}`
        };
    }
    
    intoResponse(_obj: any): void {}
}

export { ConfirmRegistration, ConfirmRegistrationPayload }
