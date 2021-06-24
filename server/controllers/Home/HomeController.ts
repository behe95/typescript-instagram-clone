import {Request, Response, Router} from "express";

import path from "path";
import Controller from "../../interfaces/controller.interface";
import authMiddleware from "../../middlewares/auth.middleware";

import settings from "../../settings";


class HomeController implements Controller {
    public path = "/api/home";
    public router = Router();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.get(this.path, authMiddleware,this.homeController);
    }
    
    private homeController = async (request: Request, response: Response) => {

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
}

export default HomeController;