import { NextFunction, Request, Response, Router } from "express";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import HttpException from "../../exceptions/HttpException";

import Controller from "../../interfaces/controller.interface";
import validationMiddleware from "../../middlewares/validation.middleware";
import RegisterUserDto from "./register.dto";
import LoginUserDto from "./login.dto";
import { createAccessToken, createRefreshToken } from "../../helpers/createToken";

export default class AuthController implements Controller {
    public path = "/api/auth";
    public router = Router();
    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes = () => {
        this.router.post(`${this.path}/register`, validationMiddleware(RegisterUserDto, false), this.registerController);
        this.router.post(`${this.path}/login`, validationMiddleware(LoginUserDto, false), this.loginController);
        this.router.get(`${this.path}/check`, this.checkAuthController);
        this.router.get(`${this.path}/logout`, this.logoutController);
    }

    private registerController = async (request: Request, response: Response) => {
        const data = request.body;
        const firestore = request.firestore;

        const {user,username} = data;
        console.log(data);
        
        try {
            const userSnapshots = await firestore.collection('users').where('user', '==', user).get();
            const userSnapshotsByUsername = await firestore.collection('users').where('username', '==', username).get();
            
            if(userSnapshots.docs.length > 0 || userSnapshotsByUsername.docs.length > 0){
                return response.status(409).send({
                    status: 409,
                    message: "User already exists"
                })
            }else{
                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(data.password, salt,async function(err, hash) {
                        if (err) return (new HttpException(500, 'Something went wrong'));
        
                        try {
                            const docRef = firestore.collection('users').doc(); 
                            await docRef.set({
                                ...data,
                                password: hash,
                                _id: docRef.id
                            });

                            return response.status(200).send({
                                status: 200,
                                message: "User registration completed"
                            })
                        } catch (error) {
                            return (new HttpException(500, 'Something went wrong'))
                        }
                        
        
                    });
                });
            }
            
        } catch (error) {
            return (new HttpException(500, 'Something went wrong'))
        }
        
        
        
        
    }


    private loginController = async (request: Request, response: Response) => {
            
        const data = request.body;
        const firestore = request.firestore;

        const {loginUsing} = data;

        let userSnapshots: any;

        try {
            switch (loginUsing) {
                case 'phone':
                case 'email':
                    userSnapshots = await firestore.collection('users').where('user', '==', data.user).get();
                    break;
                case 'username':
                    userSnapshots = await firestore.collection('users').where('username', '==', data.user).get();
                    break;        
                default:
                    break;
            }

                        
    
            if(userSnapshots.docs.length > 0){
                const {password, username} = userSnapshots.docs[0].data();
                console.log(data.password, password);

                try {
                    const passwordMatch = await bcrypt.compare(data.password, password);
                    console.log(passwordMatch);
                    

                    if(passwordMatch){
                        const payload = {
                            _id: userSnapshots.docs[0].data()._id,
                            username
                        };
    
                        const authToken = createAccessToken(payload);
    
                        const refreshToken = createRefreshToken(payload);

                        

                        await request.firestore.collection('users').doc(userSnapshots.docs[0].id).update({refreshToken});

                        response.cookie('JWT__AUTH__TOKEN',`${authToken}`,{
                            httpOnly: false,
                            secure: false,
                        });

                        response.cookie('JWT__REFRESH__TOKEN', `${refreshToken}`, {
                            httpOnly: false,
                            secure: false
                        });

                        

                        console.log(request);
                        
                        response.status(200).send({
                            status: 200,
                            message: 'User login successfull'
                        })

                    }else{
                        return response.status(403).send({
                            status: 403,
                            message: 'Invalid password'
                        })  
                    }
                } catch (error) {
                    return (new HttpException(500, 'Something went wrong'));
                }

            }else{
                return (new HttpException(403, 'User does not exist'))
            }
        } catch (error) {
            return (new HttpException(500, 'Something went wrong'))
        }

        
    }

    async checkAuthController(req: Request, res: Response, next: NextFunction){  
        console.log("==============================");
        
              
        res.status(200).send({
            message: 'Authenticated',
            status: 200
        })
    }

    async logoutController(req:Request, res: Response, next: NextFunction) {
        res.clearCookie("JWT__AUTH__TOKEN");
        res.clearCookie("JWT__REFRESH__TOKEN");
        const {_id} = req.user;

        const firestore = req.firestore;
        await firestore.collection('users').doc(_id).update({
            refreshToken: ""
        });
    


        return res.status(200).send({
            status: 200,
            message: "User logged out"
        })
        
    }
}