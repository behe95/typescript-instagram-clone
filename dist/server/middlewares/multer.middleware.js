"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
function multerMiddleware(request, respone, next) {
    var upload = multer_1.default({
        storage: multer_1.default.memoryStorage()
    });
    console.log("INSIDE MULTER MIDDLEWARE");
    return upload.single('file');
    // next();
}
exports.default = multerMiddleware;
