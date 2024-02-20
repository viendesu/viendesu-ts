import { BaseRequest, HttpMethod, RestMetaInfo } from "../request";
import { CaptchaKey } from "../request/security/captcha";

interface RegisterPayload {
    email: string
    username: string

    name?: string

    password: string
    redirect_url: string
}

class Register extends BaseRequest<number, RegisterPayload, CaptchaKey> {
    getRestMeta(): RestMetaInfo {
        return {
            method: HttpMethod.Post,
            path: "/users/register",
            body: this.payload
        };
    }
    
    intoResponse(obj: any): number {
        return obj;
    }
}

export { RegisterPayload, Register }
