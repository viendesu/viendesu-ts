import { Session } from "../abstract/session";

class VienDesu<S extends Session> {
    session: S;

    constructor(session: S) {
        this.session = session;
    }
}

export { VienDesu }
