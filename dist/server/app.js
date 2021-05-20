"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var mongoose_1 = __importDefault(require("mongoose"));
var path_1 = __importDefault(require("path"));
var settings_1 = __importDefault(require("./settings"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var admin = __importStar(require("firebase-admin"));
var error_middleware_1 = __importDefault(require("./middlewares/error.middleware"));
dotenv_1.default.config();
var App = /** @class */ (function () {
    function App(controllers) {
        this.app = express_1.default();
        this.initializeFirebaseAdminSDK();
        this.initializeMiddlewares();
        // this.connectToTheDatabase();
        this.initializeControllers(controllers);
        this.initializeErrorHandler();
        this.firestore = admin.firestore();
        this.storage = admin.storage();
    }
    App.prototype.listen = function () {
        this.app.listen(process.env.PORT, function () {
            console.log("Server is running on port " + process.env.PORT);
        });
    };
    App.prototype.getServer = function () {
        return this.app;
    };
    App.prototype.initializeMiddlewares = function () {
        var _this = this;
        var corsOptions = {
            origin: '*',
            credentials: true,
            exposedHeaders: ["set-cookie"]
        };
        this.app.use(express_1.default.json());
        this.app.use(cookie_parser_1.default());
        // this.app.use(cors(corsOptions));
        this.app.use(cors_1.default());
        this.app.use(function (request, respone, next) {
            request.firestore = _this.firestore;
            request.storage = _this.storage;
            next();
        });
        this.app.use(express_1.default.static(path_1.default.resolve(settings_1.default.PROJECT_DIR, 'client/build')));
    };
    App.prototype.initializeErrorHandler = function () {
        this.app.use(error_middleware_1.default);
    };
    App.prototype.initializeControllers = function (controllers) {
        var _this = this;
        controllers.forEach(function (controller) {
            _this.app.use('/', controller.router);
        });
    };
    App.prototype.initializeFirebaseAdminSDK = function () {
        admin.initializeApp({
            credential: admin.credential.cert(require('../firebase__service__accounts.json'))
        });
    };
    App.prototype.connectToTheDatabase = function () {
        var _a = process.env, MONGO_USER = _a.MONGO_USER, MONGO_PASS = _a.MONGO_PASS, MONGO_CLUSTER = _a.MONGO_CLUSTER, DB_URI = _a.DB_URI;
        // const db = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}/tsecommDBRN?retryWrites=true&w=majority`;
        mongoose_1.default.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    };
    return App;
}());
exports.default = App;
