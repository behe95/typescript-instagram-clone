"use strict";
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
var AuthenticationTokenMissingException_1 = __importDefault(require("../exceptions/AuthenticationTokenMissingException"));
var WrongAuthenticationTokenException_1 = __importDefault(require("../exceptions/WrongAuthenticationTokenException"));
var createToken_1 = require("../helpers/createToken");
var verifyToken_1 = require("../helpers/verifyToken");
var whiteListedRoutes = [
    "/api/auth/login",
    "/api/auth/register"
];
function authMiddleware(request, response, next) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var _c, JWT__AUTH__TOKEN, JWT__REFRESH__TOKEN, decodedAccessToken, error_1, decodedRefreshToken, firestore, _d, _id, username, userSnapshots, user, refreshTokenSaved, authToken, error_2;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    console.log(request.path);
                    if (whiteListedRoutes.includes(request.path))
                        return [2 /*return*/, next()];
                    _c = request.cookies, JWT__AUTH__TOKEN = _c.JWT__AUTH__TOKEN, JWT__REFRESH__TOKEN = _c.JWT__REFRESH__TOKEN;
                    if (!JWT__AUTH__TOKEN || !JWT__REFRESH__TOKEN)
                        return [2 /*return*/, next(new AuthenticationTokenMissingException_1.default())];
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, verifyToken_1.verifyAccessToken(JWT__AUTH__TOKEN)];
                case 2:
                    decodedAccessToken = _e.sent();
                    request.user._id = (_a = decodedAccessToken) === null || _a === void 0 ? void 0 : _a._id;
                    request.user.user = (_b = decodedAccessToken) === null || _b === void 0 ? void 0 : _b.username;
                    if (decodedAccessToken)
                        return [2 /*return*/, next()];
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _e.sent();
                    return [3 /*break*/, 4];
                case 4:
                    _e.trys.push([4, 7, , 8]);
                    return [4 /*yield*/, verifyToken_1.verifyRefreshToken(JWT__REFRESH__TOKEN)];
                case 5:
                    decodedRefreshToken = _e.sent();
                    if (!decodedRefreshToken)
                        throw new Error("");
                    firestore = request.firestore;
                    _d = decodedRefreshToken, _id = _d._id, username = _d.username;
                    return [4 /*yield*/, firestore.collection('users').doc(_id).get()];
                case 6:
                    userSnapshots = _e.sent();
                    user = userSnapshots.data();
                    refreshTokenSaved = user.refreshToken;
                    if (!refreshTokenSaved)
                        throw new Error("");
                    if (!refreshTokenSaved === JWT__REFRESH__TOKEN)
                        throw new Error("");
                    authToken = createToken_1.createAccessToken({ _id: _id, username: username });
                    response.cookie('JWT__AUTH__TOKEN', "" + authToken, {
                        httpOnly: false,
                        secure: false,
                    });
                    return [2 /*return*/, next()];
                case 7:
                    error_2 = _e.sent();
                    return [2 /*return*/, next(new WrongAuthenticationTokenException_1.default())];
                case 8: return [2 /*return*/];
            }
        });
    });
}
exports.default = authMiddleware;
