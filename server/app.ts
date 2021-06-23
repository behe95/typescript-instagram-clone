import express,{Application,Request,Response, NextFunction, response} from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Controller from "./interfaces/controller.interface";
import path from "path"
import settings from "./settings";
import cookieParser from "cookie-parser";

import * as admin from "firebase-admin";

import errorMiddleware from "./middlewares/error.middleware";
import authMiddleware from "./middlewares/auth.middleware";

dotenv.config();

class App {
    public app: Application;
    public firestore;
    public storage;
    

    constructor(controllers: Controller[]){
        this.app = express();

        

        
        
        this.initializeFirebaseAdminSDK();
        this.initializeMiddlewares();
        // this.connectToTheDatabase();
        this.initializeControllers(controllers);
        this.initializeErrorHandler();

        this.firestore = admin.firestore();
        this.storage = admin.storage();
    }

    public listen(){
        this.app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    }

    public getServer(){
        return this.app;
    }

    private initializeMiddlewares() {
        const corsOptions = {
            origin: '*',
            credentials: true,
            exposedHeaders: ["set-cookie"]
           };
        this.app.use(express.json())
        this.app.use(cookieParser());
        // this.app.use(cors(corsOptions));
        this.app.use(cors());


        this.app.use((request:Request,respone:Response,next:NextFunction) => {
            request.firestore = this.firestore;
            request.storage = this.storage;
            request.user = {_id: "", user: ""}
            next();
        })

        this.app.use(authMiddleware);

        
        this.app.use(express.static(path.resolve(settings.PROJECT_DIR,'client/build')));

    }

    private initializeErrorHandler() {
        this.app.use(errorMiddleware);
    }

    private initializeControllers(controllers: Controller[]){
        controllers.forEach(controller => {
            this.app.use('/',controller.router);
        })
    }

    private initializeFirebaseAdminSDK(){
        admin.initializeApp({
            credential: admin.credential.cert(require('../firebase__service__accounts.json'))
        })
    }

    private connectToTheDatabase(){
        const {
            MONGO_USER,
            MONGO_PASS,
            MONGO_CLUSTER,
            DB_URI
        } = process.env;
        // const db = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}/tsecommDBRN?retryWrites=true&w=majority`;
        mongoose.connect(DB_URI!, {useNewUrlParser: true, useUnifiedTopology: true})
    }
}

export default App;