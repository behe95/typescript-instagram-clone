"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REGISTER = exports.LOGOUT = exports.LOGIN = void 0;
var API_URL = "http://localhost:5000/";
exports.LOGIN = API_URL + "api/auth/login";
exports.LOGOUT = API_URL + "api/auth/logout";
exports.REGISTER = API_URL + "api/auth/register";
