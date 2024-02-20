import { BaseRequest, HttpMethod, Payload, RestMetaInfo } from "../request";
import { CaptchaKey } from "../request/security/captcha";

class RequestPasswordReset extends BaseRequest<true, Payload, CaptchaKey> {
    getRestMeta(): RestMetaInfo {
        return {
            method: HttpMethod.Post,
            path: "/users/authenticate/refresh"
        };
    }
    
    intoResponse(obj: any): true {
        return obj;
    }
}

export { RequestPasswordReset }
