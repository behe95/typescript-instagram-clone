import {request, Request, Response, Router} from "express";

import path from "path";
import Controller from "../../interfaces/controller.interface";
import fs from "fs";

import multer from "multer";
import settings from "../../settings";
import multerMiddleware from "../../middlewares/multer.middleware";
import uploadImageToStorage from "../../utils/UploadFile";
import deleteImageFromStorage from "../../utils/DeleteFile";
import authMiddleware from "../../middlewares/auth.middleware";


class ProfileController implements Controller {
    public path = "/api/profile";
    public router = Router();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        
        

        this.router.get(`${this.path}/info`, authMiddleware, this.profleInfoController);
        this.router.post(`${this.path}/edit`, authMiddleware,   this.profileEditController);
        this.router.post(`${this.path}/changeProfilePhoto`, authMiddleware,   multerMiddleware(), this.profilePhotoChangeController);
    }
    
    private profleInfoController = async (request: Request, response: Response) => {

        const firestore = request.firestore;
        try {
            const userSnapshot = await firestore.collection('users').doc(request.user._id).get();
            const userData = userSnapshot.data();
            delete userData.password;
            delete userData.refreshToken;
            
            response.status(200).send({...userData});
        } catch (error) {
            
        }
    }


    private profileEditController = async (request: Request, response: Response) => {
        const firestore = request.firestore;

        const incomingInfo = request.body;
        const userId = request.user._id
        
        try {
            const userRef = firestore.collection('users').doc(userId);
            const userSnapshot = await userRef.get();

            const userData = userSnapshot.data();
            
            if(incomingInfo.email === userData.email || incomingInfo.username === userData.username){
                await userRef.update({
                    ...incomingInfo
                })
            }else{
                let userSnapshots;
                if(incomingInfo.email !== userData.email){
                    userSnapshots = await firestore.collection('users').where('email', '==', incomingInfo.email).get();
                }else if(incomingInfo.username !== userData.email){
                    userSnapshots = await firestore.collection('users').where('username', '==', incomingInfo.username).get();
                }else{
                    userSnapshots = await firestore.collection('users').where('username','==',incomingInfo.username).where('email', '==', incomingInfo.email).get();
                }

                if(userSnapshots && userSnapshots.docs.length > 0){
                    return response.status(409).send({
                        status: 409,
                        message: "User already exists"
                    })
                }else{
                    await userRef.update({
                        ...incomingInfo
                    })
                }
            }

            response.status(200).send({
                status: 200,
                message: "User info updated successfully"
            })
            
        } catch (error) {
         console.log(error);
            
        }
    }


    private profilePhotoChangeController = async (request: Request, respone: Response) => {
        

        
        console.log("FIRESTORE =======================", request.file);
        const firestore = request.firestore;
        
        const bucket = request.storage.bucket(process.env.CLOUD__STORAGE__BUCKET__NAME);
        const file = request.file;

        const userId = request.user._id;

        const userRef = firestore.collection('users').doc(userId);

        uploadImageToStorage(file, bucket).then(async (uploadedImageInfo:any) => {
            const userDoc = await userRef.get();
            const userData = userDoc.data();
            if(userData.profilePhoto && userData.profilePhoto.url && userData.profilePhoto.fileName){
                deleteImageFromStorage(bucket, userData.profilePhoto.fileName);                
            }
            await userRef.update({
                profilePhoto:{
                    ...uploadedImageInfo
                }
            })

            respone.status(200).send({
                status: 200,
                message: "Profile photo changed successfully",
                data: {
                    profilePhoto:{
                        ...uploadedImageInfo
                    }
                }
            })
        }).catch(err => {
            console.log(err);
            
        })
        
        
    }
}

export default ProfileController;