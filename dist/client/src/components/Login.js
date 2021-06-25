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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
require("./Login.scss");
var formValidators_1 = require("../utils/formValidators");
var Auth_context_1 = require("../contexts/Auth.context");
var dataInit = {
    user: "",
    password: "",
    loginUsing: ""
};
function Login() {
    // console.log("RENDERING ========================== Login");
    var _this = this;
    var history = react_router_dom_1.useHistory();
    var _a = react_1.default.useState(dataInit), data = _a[0], setData = _a[1];
    var _b = react_1.default.useState(false), isValid = _b[0], setIsValid = _b[1];
    var isMounted = react_1.default.useRef(true);
    var login = Auth_context_1.useAuth().login;
    var _c = react_1.default.useState(false), isLoginLoading = _c[0], setIsLoginLoading = _c[1];
    react_1.default.useEffect(function () {
        var key;
        for (key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key) && key !== 'loginUsing') {
                if (!data[key] && isValid)
                    return setIsValid(function (b) { return !b; });
                if (!data[key])
                    return;
            }
        }
        setIsValid(true);
        return function () {
            isMounted.current = false;
        };
        // eslint-disable-next-line
    }, [data]);
    var onChangeHandler = function (e) {
        var _a;
        setData(__assign(__assign({}, data), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var onclickLogin = function () { return __awaiter(_this, void 0, void 0, function () {
        var user, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!isValid)
                        return [2 /*return*/];
                    user = data.user;
                    // if(!validateNumber(user) && !validateEmail(user)) setData({...data, loginUsing: 'username'})
                    // if(validateNumber(user)) setData({...data, loginUsing: 'phone'});
                    // if(validateEmail(user)) setData({...data, loginUsing: 'email'});
                    // await login({...data, loginUsing:data.loginUsing});
                    setIsLoginLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 8, , 9]);
                    if (!(!formValidators_1.validateNumber(user) && !formValidators_1.validateEmail(user))) return [3 /*break*/, 3];
                    return [4 /*yield*/, login(__assign(__assign({}, data), { loginUsing: "username" }))];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 7];
                case 3:
                    if (!formValidators_1.validateNumber(user)) return [3 /*break*/, 5];
                    return [4 /*yield*/, login(__assign(__assign({}, data), { loginUsing: "phone" }))];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 7];
                case 5:
                    if (!formValidators_1.validateEmail(user)) return [3 /*break*/, 7];
                    return [4 /*yield*/, login(__assign(__assign({}, data), { loginUsing: "email" }))];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7: return [3 /*break*/, 9];
                case 8:
                    error_1 = _a.sent();
                    setIsLoginLoading(false);
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    }); };
    // console.log("LOADING ====================== ", isLoginLoading);
    var onclickLoginWithFacebook = function () {
        console.log("FACEBOOK LOGIN BUTTON CLICKED");
        history.push("/home");
    };
    return (jsx_runtime_1.jsxs("div", __assign({ className: "login__component" }, { children: [jsx_runtime_1.jsx("button", __assign({ onClick: onclickLoginWithFacebook, className: "btn btn-primary btn-sm facebook__button" }, { children: "Continue with Facebook" }), void 0),
            jsx_runtime_1.jsxs("div", __assign({ className: "or" }, { children: [jsx_runtime_1.jsx("div", {}, void 0),
                    jsx_runtime_1.jsx("p", { children: "OR" }, void 0),
                    jsx_runtime_1.jsx("div", {}, void 0)] }), void 0),
            jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsx("form", __assign({ className: "login__form" }, { children: jsx_runtime_1.jsxs("div", __assign({ className: "form-group" }, { children: [jsx_runtime_1.jsx("input", { onChange: function (e) { return onChangeHandler(e); }, name: "user", value: data.user, placeholder: "Phone number, username, or email", type: "text", className: "form-control" }, void 0),
                            jsx_runtime_1.jsx("input", { onChange: function (e) { return onChangeHandler(e); }, name: "password", value: data.password, placeholder: "Password", type: "password", className: "form-control" }, void 0)] }), void 0) }), void 0) }, void 0),
            jsx_runtime_1.jsxs("div", __assign({ className: "bottom" }, { children: [jsx_runtime_1.jsx(react_router_dom_1.Link, __assign({ className: "forgot__pass__link", to: "/accounts/password/reset" }, { children: "Forgot Password?" }), void 0),
                    jsx_runtime_1.jsx("button", __assign({ onClick: function () { return onclickLogin(); }, className: "btn btn-primary btn-sm " + (!isValid ? 'disabled' : '') + " login__button" }, { children: isLoginLoading ?
                            jsx_runtime_1.jsx("div", __assign({ className: "spinner-grow spinner-grow-sm", role: "status" }, { children: jsx_runtime_1.jsx("span", __assign({ className: "sr-only" }, { children: "Loading..." }), void 0) }), void 0)
                            :
                                "Log In" }), void 0),
                    jsx_runtime_1.jsxs("p", { children: ["Don't have an account? ", jsx_runtime_1.jsx("span", __assign({ onClick: function () { return history.push('/accounts/emailsignup'); } }, { children: "Sign up" }), void 0)] }, void 0)] }), void 0)] }), void 0));
}
exports.default = Login;
