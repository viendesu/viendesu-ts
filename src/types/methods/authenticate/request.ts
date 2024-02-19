import { BaseRequest } from "../../request";
import { CaptchaKey } from "../../request/security/captcha";

import { AuthenticateData, AuthenticatePayload } from "./payload";
import { AuthenticateResponse } from "./response";

class AuthenticateRequest extends BaseRequest<
    AuthenticateData,
    AuthenticateResponse,
    AuthenticatePayload,
    CaptchaKey
> {
    intoResponse(obj: any): AuthenticateResponse {
        return { access: obj.access, refresh: obj.refresh }
    }
}

export { AuthenticateRequest }
