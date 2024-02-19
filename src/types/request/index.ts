import { SecurityRequirement } from "./security";

abstract class Payload<D> {
    data: D

    constructor(data: D) {
        this.data = data;
    }

    /** Convert data to JSON serializable object */
    abstract toJSON(): Object;
}

abstract class BaseRequest<
    D,
    ResponseTp,
    P extends Payload<D>,
    S extends SecurityRequirement = SecurityRequirement,
> {
    payload: P
    security: S

    constructor(payload: P, security: S) {
        this.payload = payload;
        this.security = security;
    }

    abstract intoResponse(obj: any): ResponseTp;
}

export {
    Payload,
    BaseRequest,
}

