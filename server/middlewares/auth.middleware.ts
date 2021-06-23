import {NextFunction, Response, Request, response} from 'express';
import jwt from "jsonwebtoken";
import AuthenticationTokenMissingException from "../exceptions/AuthenticationTokenMissingException";
import HttpException from '../exceptions/HttpException';
import WrongAuthenticationTokenException from "../exceptions/WrongAuthenticationTokenException";
import { createAccessToken, createRefreshToken } from '../helpers/createToken';
import { verifyAccessToken, verifyRefreshToken } from '../helpers/verifyToken';
import dataStoredInToken from "../interfaces/dataStoredInToken.interface";

const whiteListedRoutes: string[] = [
    "/api/auth/login",
    "/api/auth/register"
]

export default async function authMiddleware(request:Request, response: Response, next: NextFunction) {    
    
    if(whiteListedRoutes.includes(request.path)) return next();
    
    const {JWT__AUTH__TOKEN,JWT__REFRESH__TOKEN} = request.cookies;
    

    if(!JWT__AUTH__TOKEN || !JWT__REFRESH__TOKEN) return next(new AuthenticationTokenMissingException());

    try {
        const decodedAccessToken = await verifyAccessToken(JWT__AUTH__TOKEN);
        
        
        request.user._id = (decodedAccessToken as {_id: string, username: string, iat: number, exp: number})?._id;
        request.user.user = (decodedAccessToken as {_id: string, username: string, iat: number, exp: number})?.username;
        
        if(decodedAccessToken) return next();        
    } catch (error) {}

    try {
        const decodedRefreshToken = await verifyRefreshToken(JWT__REFRESH__TOKEN);
        if(!decodedRefreshToken) throw new Error("");

        const firestore = request.firestore;

        const {_id, username} = decodedRefreshToken as {_id: string, username: string, iat: number};

        const userSnapshots = await firestore.collection('users').doc(_id).get();

        const user = userSnapshots.data();

        const {refreshToken: refreshTokenSaved} = user;

        if(!refreshTokenSaved) throw new Error("");

        if(!refreshTokenSaved === JWT__REFRESH__TOKEN) throw new Error("");
        
        const authToken = createAccessToken({_id, username});

        response.cookie('JWT__AUTH__TOKEN',`${authToken}`,{
            httpOnly: false,
            secure: false,
        });
        


        return next();
        
        
    } catch (error) {
        return next(new WrongAuthenticationTokenException());
    }
    

    
}