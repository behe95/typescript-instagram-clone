"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var Actions_1 = __importDefault(require("./Actions"));
var UserInfo_1 = __importDefault(require("./UserInfo"));
var Header_1 = __importDefault(require("./Header"));
function UserInfoAndActions(_a) {
    var setShowOptions = _a.setShowOptions;
    var _b = react_1.default.useState({}), info = _b[0], setInfo = _b[1];
    // const {setIsAuthenticated, userInfo} = useAuth();
    // React.useEffect(() => {
    //     // axios
    //     //     .get('api/profile/info', {withCredentials:true})
    //     //     .then(res => {
    //     //         console.log(res);     
    //     //         setInfo({...res.data})           
    //     //     }).catch(err => {
    //     //         if(err.response.status === 401) setIsAuthenticated(false);             
    //     //     })
    //     setInfo(info => ({...info,...userInfo}))
    // },[setIsAuthenticated, userInfo])
    return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx(Header_1.default, { setShowOptions: setShowOptions, info: info }, void 0),
            jsx_runtime_1.jsx(UserInfo_1.default, { info: info }, void 0),
            jsx_runtime_1.jsx(Actions_1.default, {}, void 0)] }, void 0));
}
exports.default = UserInfoAndActions;
