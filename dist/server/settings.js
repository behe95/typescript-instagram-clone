"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
exports.default = {
    // PROJECT_DIR: path.resolve(__dirname,"../"), //for dev
    PROJECT_DIR: path_1.default.resolve(__dirname, "../../"), //for prod build
};
