import { Payload } from "../request"
import { BaseRequest, HttpMethod, RestMetaInfo } from "../request"

import { TokenPair } from "../token_pair"
import { CaptchaKey } from "../request/security/captcha"

interface AuthenticatePayload extends Payload {
    /** Username for authentication */
    username: string,

    /** Password for authentication */
    password: string,

    /** Whether re-send confirmation email or not.
     * Email re-sent only if authentication succeedes
     * and user is not confirmed */
    resend_email: boolean
}

class Authenticate extends BaseRequest<
    TokenPair,
    AuthenticatePayload,
    CaptchaKey
> {
    getRestMeta(): RestMetaInfo {
        return {
            path: "/users/authenticate",
            method: HttpMethod.Post,
            body: this.payload,
        };
    }

    intoResponse(obj: any): TokenPair {
        return { access: obj.access, refresh: obj.refresh }
    }
}

export { AuthenticatePayload, Authenticate }
