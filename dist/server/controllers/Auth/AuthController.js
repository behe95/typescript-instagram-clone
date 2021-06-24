"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var bcrypt_1 = __importDefault(require("bcrypt"));
var HttpException_1 = __importDefault(require("../../exceptions/HttpException"));
var validation_middleware_1 = __importDefault(require("../../middlewares/validation.middleware"));
var register_dto_1 = __importDefault(require("./register.dto"));
var login_dto_1 = __importDefault(require("./login.dto"));
var createToken_1 = require("../../helpers/createToken");
var auth_middleware_1 = __importDefault(require("../../middlewares/auth.middleware"));
var AuthController = /** @class */ (function () {
    function AuthController() {
        var _this = this;
        this.path = "/api/auth";
        this.router = express_1.Router();
        this.initializeRoutes = function () {
            _this.router.post(_this.path + "/register", validation_middleware_1.default(register_dto_1.default, false), _this.registerController);
            _this.router.post(_this.path + "/login", validation_middleware_1.default(login_dto_1.default, false), _this.loginController);
            _this.router.get(_this.path + "/check", auth_middleware_1.default, _this.checkAuthController);
            _this.router.get(_this.path + "/logout", auth_middleware_1.default, _this.logoutController);
        };
        this.registerController = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var data, firestore, user, username, userSnapshots, userSnapshotsByUsername, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = request.body;
                        firestore = request.firestore;
                        user = data.user, username = data.username;
                        console.log(data);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, firestore.collection('users').where('user', '==', user).get()];
                    case 2:
                        userSnapshots = _a.sent();
                        return [4 /*yield*/, firestore.collection('users').where('username', '==', username).get()];
                    case 3:
                        userSnapshotsByUsername = _a.sent();
                        if (userSnapshots.docs.length > 0 || userSnapshotsByUsername.docs.length > 0) {
                            return [2 /*return*/, response.status(409).send({
                                    status: 409,
                                    message: "User already exists"
                                })];
                        }
                        else {
                            bcrypt_1.default.genSalt(10, function (err, salt) {
                                bcrypt_1.default.hash(data.password, salt, function (err, hash) {
                                    return __awaiter(this, void 0, void 0, function () {
                                        var docRef, error_2;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    if (err)
                                                        return [2 /*return*/, (new HttpException_1.default(500, 'Something went wrong'))];
                                                    _a.label = 1;
                                                case 1:
                                                    _a.trys.push([1, 3, , 4]);
                                                    docRef = firestore.collection('users').doc();
                                                    return [4 /*yield*/, docRef.set(__assign(__assign({}, data), { password: hash, _id: docRef.id }))];
                                                case 2:
                                                    _a.sent();
                                                    return [2 /*return*/, response.status(200).send({
                                                            status: 200,
                                                            message: "User registration completed"
                                                        })];
                                                case 3:
                                                    error_2 = _a.sent();
                                                    return [2 /*return*/, (new HttpException_1.default(500, 'Something went wrong'))];
                                                case 4: return [2 /*return*/];
                                            }
                                        });
                                    });
                                });
                            });
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        return [2 /*return*/, (new HttpException_1.default(500, 'Something went wrong'))];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.loginController = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var data, firestore, loginUsing, userSnapshots, _a, _b, password, username, passwordMatch, payload, authToken, refreshToken, error_3, error_4;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        data = request.body;
                        firestore = request.firestore;
                        loginUsing = data.loginUsing;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 17, , 18]);
                        _a = loginUsing;
                        switch (_a) {
                            case 'phone': return [3 /*break*/, 2];
                            case 'email': return [3 /*break*/, 2];
                            case 'username': return [3 /*break*/, 4];
                        }
                        return [3 /*break*/, 6];
                    case 2: return [4 /*yield*/, firestore.collection('users').where('user', '==', data.user).get()];
                    case 3:
                        userSnapshots = _c.sent();
                        return [3 /*break*/, 7];
                    case 4: return [4 /*yield*/, firestore.collection('users').where('username', '==', data.user).get()];
                    case 5:
                        userSnapshots = _c.sent();
                        return [3 /*break*/, 7];
                    case 6: return [3 /*break*/, 7];
                    case 7:
                        if (!(userSnapshots.docs.length > 0)) return [3 /*break*/, 15];
                        _b = userSnapshots.docs[0].data(), password = _b.password, username = _b.username;
                        console.log(data.password, password);
                        _c.label = 8;
                    case 8:
                        _c.trys.push([8, 13, , 14]);
                        return [4 /*yield*/, bcrypt_1.default.compare(data.password, password)];
                    case 9:
                        passwordMatch = _c.sent();
                        console.log(passwordMatch);
                        if (!passwordMatch) return [3 /*break*/, 11];
                        payload = {
                            _id: userSnapshots.docs[0].data()._id,
                            username: username
                        };
                        authToken = createToken_1.createAccessToken(payload);
                        refreshToken = createToken_1.createRefreshToken(payload);
                        return [4 /*yield*/, request.firestore.collection('users').doc(userSnapshots.docs[0].id).update({ refreshToken: refreshToken })];
                    case 10:
                        _c.sent();
                        response.cookie('JWT__AUTH__TOKEN', "" + authToken, {
                            httpOnly: false,
                            secure: false,
                        });
                        response.cookie('JWT__REFRESH__TOKEN', "" + refreshToken, {
                            httpOnly: false,
                            secure: false
                        });
                        console.log(request);
                        response.status(200).send({
                            status: 200,
                            message: 'User login successfull'
                        });
                        return [3 /*break*/, 12];
                    case 11: return [2 /*return*/, response.status(403).send({
                            status: 403,
                            message: 'Invalid password'
                        })];
                    case 12: return [3 /*break*/, 14];
                    case 13:
                        error_3 = _c.sent();
                        return [2 /*return*/, (new HttpException_1.default(500, 'Something went wrong'))];
                    case 14: return [3 /*break*/, 16];
                    case 15: return [2 /*return*/, (new HttpException_1.default(403, 'User does not exist'))];
                    case 16: return [3 /*break*/, 18];
                    case 17:
                        error_4 = _c.sent();
                        return [2 /*return*/, (new HttpException_1.default(500, 'Something went wrong'))];
                    case 18: return [2 /*return*/];
                }
            });
        }); };
        this.initializeRoutes();
    }
    AuthController.prototype.checkAuthController = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("==============================");
                res.status(200).send({
                    message: 'Authenticated',
                    status: 200
                });
                return [2 /*return*/];
            });
        });
    };
    AuthController.prototype.logoutController = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, firestore;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        res.clearCookie("JWT__AUTH__TOKEN");
                        res.clearCookie("JWT__REFRESH__TOKEN");
                        _id = req.user._id;
                        firestore = req.firestore;
                        return [4 /*yield*/, firestore.collection('users').doc(_id).update({
                                refreshToken: ""
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.status(200).send({
                                status: 200,
                                message: "User logged out"
                            })];
                }
            });
        });
    };
    return AuthController;
}());
exports.default = AuthController;
