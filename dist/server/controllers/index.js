"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = exports.ProfileController = exports.HomeController = exports.RootController = void 0;
var RootController_1 = __importDefault(require("./Root/RootController"));
exports.RootController = RootController_1.default;
var HomeController_1 = __importDefault(require("./Home/HomeController"));
exports.HomeController = HomeController_1.default;
var ProfileController_1 = __importDefault(require("./Profile/ProfileController"));
exports.ProfileController = ProfileController_1.default;
var AuthController_1 = __importDefault(require("./Auth/AuthController"));
exports.AuthController = AuthController_1.default;
