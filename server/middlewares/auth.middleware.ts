import {NextFunction, Response, Request, response} from 'express';
import jwt from "jsonwebtoken";
import AuthenticationTokenMissingException from "../exceptions/AuthenticationTokenMissingException";
import WrongAuthenticationTokenException from "../exceptions/WrongAuthenticationTokenException";
import dataStoredInToken from "../interfaces/dataStoredInToken.interface";

export default async function authMiddleware (request: Request, respone: Response, next: NextFunction){
    const cookies = request.cookies;

    if(cookies && cookies.JWT__AUTH__TOKEN){
        const JWT__AUTH__TOKEN__SECRET = process.env.JWT__AUTH__TOKEN__SECRET;
        let userSnapshots;

        try {
            const verificationResponse = jwt.verify(cookies.JWT__AUTH__TOKEN, JWT__AUTH__TOKEN__SECRET!) as dataStoredInToken;
            
            console.log(verificationResponse);
            
            const _id = verificationResponse._id;
            const firestore = request.firestore;

            userSnapshots = await firestore.collection('users').where('_id', '==', _id).get();


            if(userSnapshots.docs.length > 0){
                request.user = userSnapshots.docs[0].data();
                next();
            }else{
                console.log("WrongAuthenticationTokenException =========================== 1");
                
                next(new WrongAuthenticationTokenException());
            }


        } catch (error) {
            console.log("WrongAuthenticationTokenException =========================== 2", error);
            next(new WrongAuthenticationTokenException());
        }

    }else{
        console.log("AuthenticationTokenMissingException =========================== 1");

        next(new AuthenticationTokenMissingException());
    }
}