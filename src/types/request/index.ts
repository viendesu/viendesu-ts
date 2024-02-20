import { SecurityRequirement } from "./security"
import { TokenOr } from "./security/token"

enum HttpMethod {
    Get,
    Post,
    Put,
    Patch,
    Delete,
}

interface HeadersMap {
    [name: string]: string
}
interface FilesMap {
    [name: string]: File
}

interface RestMetaInfo {
    method: HttpMethod
    path: string

    headers?: HeadersMap,
    files?: FilesMap,
    body?: Object
}

interface Payload {}

abstract class BaseRequest<
    ResponseTp,
    P extends Payload = Payload,
    S extends SecurityRequirement = TokenOr<null>,
> {
    payload: P
    security: S

    constructor(payload: P, security: S) {
        this.payload = payload;
        this.security = security;
    }

    abstract getRestMeta(): RestMetaInfo;
    abstract intoResponse(obj: any): ResponseTp;
}

export {
    Payload,
    BaseRequest,

    HeadersMap,
    FilesMap,

    RestMetaInfo,
    HttpMethod,
}

