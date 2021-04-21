import { NextFunction, Request, Response } from "express";
import multer from 'multer';

export default function multerMiddleware(request?: Request, respone?: Response, next?: NextFunction){
    const upload = multer({
        storage: multer.memoryStorage()
    });
    
    console.log("INSIDE MULTER MIDDLEWARE");
    
    return upload.single('file');
    // next();
}