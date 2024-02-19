import { SecurityRequirement } from ".";

/** Captcha, needed to defend against bots */
interface CaptchaKey extends SecurityRequirement {
    captcha: string;
}

export { CaptchaKey }
