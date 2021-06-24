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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthProvider = exports.useAuth = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var axios_1 = __importDefault(require("axios"));
var js_cookie_1 = __importDefault(require("js-cookie"));
var react_router_dom_1 = require("react-router-dom");
var API = __importStar(require("../api"));
var notistack_1 = require("notistack");
var react_redux_1 = require("react-redux");
var auth_1 = require("../store/actions/auth");
var AuthContext = react_1.default.createContext({});
var useAuth = function () {
    return react_1.default.useContext(AuthContext);
};
exports.useAuth = useAuth;
var checkAuth = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log("HELLO");
        return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
                var res, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, axios_1.default.get('/api/auth/check', { withCredentials: true })];
                        case 1:
                            res = _a.sent();
                            return [2 /*return*/, resolve(true)];
                        case 2:
                            error_1 = _a.sent();
                            return [2 /*return*/, reject(false)];
                        case 3: return [2 /*return*/];
                    }
                });
            }); })];
    });
}); };
var AuthProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.default.useState(true), authContextIsLoading = _b[0], setAuthContextIsLoading = _b[1];
    var _c = react_1.default.useState(false), isAuthenticated = _c[0], setIsAuthenticated = _c[1];
    // const [userInfo, setUserInfo] = React.useState({profilePhoto:{url: '/static/images/portrait/portrait1.jfif'}} as userInfoType);
    var _d = notistack_1.useSnackbar(), enqueueSnackbar = _d.enqueueSnackbar, closeSnackbar = _d.closeSnackbar;
    var isMounted = react_1.default.useRef(true);
    var history = react_router_dom_1.useHistory();
    var userProfileInfo = react_redux_1.useSelector(function (state) { return state.auth; }).user;
    var dispatch = react_redux_1.useDispatch();
    react_1.default.useEffect(function () {
        if (!js_cookie_1.default.get('JWT__AUTH__TOKEN') || !js_cookie_1.default.get("JWT__REFRESH__TOKEN")) {
            setAuthContextIsLoading(false);
            return;
        }
        (function () {
            return __awaiter(this, void 0, void 0, function () {
                var res, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, checkAuth()];
                        case 1:
                            res = _a.sent();
                            if (res) {
                                setIsAuthenticated(true);
                                setAuthContextIsLoading(false);
                            }
                            if (!userProfileInfo) {
                                dispatch(auth_1.getProfileInfo());
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            error_2 = _a.sent();
                            console.log(error_2);
                            setAuthContextIsLoading(false);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        })();
        // if(isMounted.current && isAuthenticated){
        //     axios
        //         .get('/api/home',{withCredentials: true})
        //         .then(res => {
        //             setUserInfo(userInfo => { 
        //                 if(res.data.profilePhoto && res.data.profilePhoto.url){
        //                     return ({...userInfo,...res.data});                            
        //                 }
        //                 return ({...userInfo,...res.data, profilePhoto:{url: '/static/images/portrait/portrait1.jfif'}})
        //             });                
        //         }).catch(err => {
        //             console.log(err);                    
        //         })
        // }
        return function () {
            isMounted.current = false;
        };
    }, []);
    var login = function (_a) { return __awaiter(void 0, void 0, void 0, function () {
        var data = __rest(_a, []);
        return __generator(this, function (_b) {
            if (isMounted.current) {
                axios_1.default
                    .post(API.LOGIN, __assign({}, data))
                    .then(function (res) {
                    localStorage.setItem("JWT__AUTH__TOKEN", js_cookie_1.default.get('JWT__AUTH__TOKEN'));
                    localStorage.setItem("JWT__REFRESH__TOKEN", js_cookie_1.default.get('JWT__REFRESH__TOKEN'));
                    setIsAuthenticated(function (b) { return true; });
                    enqueueSnackbar('User logged in successfully', { variant: 'success' });
                    dispatch(auth_1.getProfileInfo());
                    history.push('/home');
                }).catch(function (err) {
                    // const {data} = err.response;
                    // console.log(data);
                    var _a, _b;
                    if (err.response) {
                        enqueueSnackbar((_b = (_a = err.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message, { variant: 'error' });
                    }
                    else {
                        enqueueSnackbar(err.message, { variant: 'error' });
                    }
                });
            }
            return [2 /*return*/];
        });
    }); };
    var value = {
        isAuthenticated: isAuthenticated,
        setIsAuthenticated: setIsAuthenticated,
        login: login,
        // userInfo,
        // setUserInfo,
        authContextIsLoading: authContextIsLoading,
    };
    return (jsx_runtime_1.jsx(AuthContext.Provider, __assign({ value: value }, { children: children }), void 0));
};
exports.AuthProvider = AuthProvider;
