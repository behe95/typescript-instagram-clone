import {Request, Response, Router} from "express";

import path from "path";
import Controller from "../../interfaces/controller.interface";

import settings from "../../settings";


class RootController implements Controller {
    public path = "*";
    public router = Router();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.get(this.path, this.homeController);
    }
    
    private homeController = async (request: Request, response: Response) => {

        const root = path.resolve(settings.PROJECT_DIR, 'client', 'build')
        response.sendFile('index.html',{root});
    }
}

export default RootController;