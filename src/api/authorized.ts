import { Session } from "../abstract/session";
import { VienDesu } from "./unauthorized";

class AuthorizedVienDesu<S extends Session> extends VienDesu<S> {

}

export { AuthorizedVienDesu }

