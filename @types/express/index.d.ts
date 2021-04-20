import * as express from "express"
import requestWithUser from "../../server/interfaces/requestWithUser.inteface";

declare global {
    namespace Express {
        interface Request {
            firebase: any,
            firestore: any,
            user: requestWithUser
        }

    }
}