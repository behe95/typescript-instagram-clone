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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var Actions_1 = __importDefault(require("./Actions"));
var UserInfo_1 = __importDefault(require("./UserInfo"));
var Auth_context_1 = require("../../contexts/Auth.context");
var Header_1 = __importDefault(require("./Header"));
function UserInfoAndActions(_a) {
    var setShowOptions = _a.setShowOptions;
    var _b = react_1.default.useState({}), info = _b[0], setInfo = _b[1];
    var _c = Auth_context_1.useAuth(), setIsAuthenticated = _c.setIsAuthenticated, userInfo = _c.userInfo;
    react_1.default.useEffect(function () {
        // axios
        //     .get('api/profile/info', {withCredentials:true})
        //     .then(res => {
        //         console.log(res);     
        //         setInfo({...res.data})           
        //     }).catch(err => {
        //         if(err.response.status === 401) setIsAuthenticated(false);             
        //     })
        setInfo(function (info) { return (__assign(__assign({}, info), userInfo)); });
    }, [setIsAuthenticated, userInfo]);
    return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx(Header_1.default, { setShowOptions: setShowOptions, info: info }, void 0),
            jsx_runtime_1.jsx(UserInfo_1.default, { info: info }, void 0),
            jsx_runtime_1.jsx(Actions_1.default, {}, void 0)] }, void 0));
}
exports.default = UserInfoAndActions;
