"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRefreshToken = exports.createAccessToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function createAccessToken(payload) {
    return jsonwebtoken_1.default.sign(payload, process.env.JWT__AUTH__TOKEN__SECRET, {
        algorithm: 'HS256',
        expiresIn: '3600s'
    });
}
exports.createAccessToken = createAccessToken;
function createRefreshToken(payload) {
    return jsonwebtoken_1.default.sign(payload, process.env.JWT__REFRESH__TOKEN__SECRET, {
        algorithm: 'HS256',
    });
}
exports.createRefreshToken = createRefreshToken;
