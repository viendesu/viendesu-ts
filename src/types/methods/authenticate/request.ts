import { BaseRequest } from "../../request";
import { CaptchaKey } from "../../request/security/captcha";

import { AuthenticateData, AuthenticatePayload } from "./payload";

class AuthenticateRequest extends BaseRequest<AuthenticateData, AuthenticatePayload, CaptchaKey> {}

export { AuthenticateRequest }
