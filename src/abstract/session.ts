import { ApiError } from "../exceptions";

import { BaseRequest, Payload } from "../types/request";
import { SecurityRequirement } from "../types/request/security";

interface Session {
    /** Make request to the VienDesu! API
     *  @throws {ApiError}
     */
    makeRequest<
        P extends Payload,
        S extends SecurityRequirement,
        ResponseTp,
        Request extends BaseRequest<ResponseTp, P, S>
    >(req: Request): Promise<ResponseTp>;
}

export { Session }
