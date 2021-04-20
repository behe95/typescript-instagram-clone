import { plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { request, RequestHandler, response } from "express";
import HttpException from "../exceptions/HttpException";

export default function validationMiddleware<T>(type: any, skipMissingProperties = false): RequestHandler {
    return (request, response, next) => {
        validate(plainToClass(type, request.body), {skipMissingProperties})
        .then((errors: ValidationError[]) => {
            if(errors.length > 0){
                const message = errors.map((error: ValidationError) => Object.values(error.constraints!)).join(', ');
                next(new HttpException(400, message));
            }else{
                next();
            }
        })
    }
}