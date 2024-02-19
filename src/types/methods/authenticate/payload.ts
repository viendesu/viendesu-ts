import { Payload } from "../../request"

interface AuthenticateData {
    /** Username for authentication */
    username: string,

    /** Whether re-send confirmation email or not.
     * Email re-sent only if authentication succeedes
     * and user is not confirmed */
    resendEmail: boolean
}

class AuthenticatePayload extends Payload<AuthenticateData> {
    toJSON(): Object {
        return {
            username: this.data.username,
            resend_email: this.data.resendEmail,
        }
    }
}

export { AuthenticateData, AuthenticatePayload }

