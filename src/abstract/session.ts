import { BaseRequest, Payload } from "../types/request";
import { SecurityRequirement } from "../types/request/security";

interface Session {
    makeRequest<
        D,
        P extends Payload<D>,
        S extends SecurityRequirement,
        ResponseTp,
        Request extends BaseRequest<D, ResponseTp, P, S>
    >(req: Request): Promise<ResponseTp>;
}

export { Session }
