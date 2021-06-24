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
var multer_middleware_1 = __importDefault(require("../../middlewares/multer.middleware"));
var UploadFile_1 = __importDefault(require("../../utils/UploadFile"));
var DeleteFile_1 = __importDefault(require("../../utils/DeleteFile"));
var auth_middleware_1 = __importDefault(require("../../middlewares/auth.middleware"));
var ProfileController = /** @class */ (function () {
    function ProfileController() {
        var _this = this;
        this.path = "/api/profile";
        this.router = express_1.Router();
        this.profleInfoController = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var firestore, userSnapshot, userData, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        firestore = request.firestore;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, firestore.collection('users').doc(request.user._id).get()];
                    case 2:
                        userSnapshot = _a.sent();
                        userData = userSnapshot.data();
                        delete userData.password;
                        delete userData.refreshToken;
                        response.status(200).send(__assign({}, userData));
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.profileEditController = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var firestore, incomingInfo, userId, userRef, userSnapshot, userData, userSnapshots, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        firestore = request.firestore;
                        incomingInfo = request.body;
                        userId = request.user._id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 14, , 15]);
                        userRef = firestore.collection('users').doc(userId);
                        return [4 /*yield*/, userRef.get()];
                    case 2:
                        userSnapshot = _a.sent();
                        userData = userSnapshot.data();
                        if (!(incomingInfo.email === userData.email || incomingInfo.username === userData.username)) return [3 /*break*/, 4];
                        return [4 /*yield*/, userRef.update(__assign({}, incomingInfo))];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 13];
                    case 4:
                        userSnapshots = void 0;
                        if (!(incomingInfo.email !== userData.email)) return [3 /*break*/, 6];
                        return [4 /*yield*/, firestore.collection('users').where('email', '==', incomingInfo.email).get()];
                    case 5:
                        userSnapshots = _a.sent();
                        return [3 /*break*/, 10];
                    case 6:
                        if (!(incomingInfo.username !== userData.email)) return [3 /*break*/, 8];
                        return [4 /*yield*/, firestore.collection('users').where('username', '==', incomingInfo.username).get()];
                    case 7:
                        userSnapshots = _a.sent();
                        return [3 /*break*/, 10];
                    case 8: return [4 /*yield*/, firestore.collection('users').where('username', '==', incomingInfo.username).where('email', '==', incomingInfo.email).get()];
                    case 9:
                        userSnapshots = _a.sent();
                        _a.label = 10;
                    case 10:
                        if (!(userSnapshots && userSnapshots.docs.length > 0)) return [3 /*break*/, 11];
                        return [2 /*return*/, response.status(409).send({
                                status: 409,
                                message: "User already exists"
                            })];
                    case 11: return [4 /*yield*/, userRef.update(__assign({}, incomingInfo))];
                    case 12:
                        _a.sent();
                        _a.label = 13;
                    case 13:
                        response.status(200).send({
                            status: 200,
                            message: "User info updated successfully"
                        });
                        return [3 /*break*/, 15];
                    case 14:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 15];
                    case 15: return [2 /*return*/];
                }
            });
        }); };
        this.profilePhotoChangeController = function (request, respone) { return __awaiter(_this, void 0, void 0, function () {
            var firestore, bucket, file, userId, userRef;
            var _this = this;
            return __generator(this, function (_a) {
                console.log("FIRESTORE =======================", request.file);
                firestore = request.firestore;
                bucket = request.storage.bucket(process.env.CLOUD__STORAGE__BUCKET__NAME);
                file = request.file;
                userId = request.user._id;
                userRef = firestore.collection('users').doc(userId);
                UploadFile_1.default(file, bucket).then(function (uploadedImageInfo) { return __awaiter(_this, void 0, void 0, function () {
                    var userDoc, userData;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, userRef.get()];
                            case 1:
                                userDoc = _a.sent();
                                userData = userDoc.data();
                                if (userData.profilePhoto && userData.profilePhoto.url && userData.profilePhoto.fileName) {
                                    DeleteFile_1.default(bucket, userData.profilePhoto.fileName);
                                }
                                return [4 /*yield*/, userRef.update({
                                        profilePhoto: __assign({}, uploadedImageInfo)
                                    })];
                            case 2:
                                _a.sent();
                                respone.status(200).send({
                                    status: 200,
                                    message: "Profile photo changed successfully",
                                    data: {
                                        profilePhoto: __assign({}, uploadedImageInfo)
                                    }
                                });
                                return [2 /*return*/];
                        }
                    });
                }); }).catch(function (err) {
                    console.log(err);
                });
                return [2 /*return*/];
            });
        }); };
        this.initializeRoutes();
    }
    ProfileController.prototype.initializeRoutes = function () {
        this.router.get(this.path + "/info", auth_middleware_1.default, this.profleInfoController);
        this.router.post(this.path + "/edit", auth_middleware_1.default, this.profileEditController);
        this.router.post(this.path + "/changeProfilePhoto", auth_middleware_1.default, multer_middleware_1.default(), this.profilePhotoChangeController);
    };
    return ProfileController;
}());
exports.default = ProfileController;
