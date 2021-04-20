import App from "./app";

import * as controllers from "./controllers";

const app = new App([
    
    new controllers.HomeController(),
    new controllers.ProfileController(),
    new controllers.AuthController(),
    new controllers.RootController(),
]);

app.listen();