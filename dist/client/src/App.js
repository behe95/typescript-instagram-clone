"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("bootstrap/dist/css/bootstrap.min.css");
require("./App.scss");
var react_router_dom_1 = require("react-router-dom");
var Root_1 = __importDefault(require("./components/Root"));
var Start_1 = __importDefault(require("./components/Start"));
var Signup_1 = __importDefault(require("./components/Signup"));
var ForgotPassword_1 = __importDefault(require("./components/ForgotPassword"));
var Home_1 = __importDefault(require("./components/Home"));
var Profile_1 = __importDefault(require("./components/Profile"));
var Search_1 = __importDefault(require("./components/Search"));
var AuthRoute_1 = __importDefault(require("./components/AuthRoute"));
var Auth_context_1 = require("./contexts/Auth.context");
var EditProfile_1 = __importDefault(require("./components/EditProfile"));
function App() {
    return (jsx_runtime_1.jsx(Root_1.default, { children: jsx_runtime_1.jsx(react_router_dom_1.BrowserRouter, { children: jsx_runtime_1.jsx(Auth_context_1.AuthProvider, { children: jsx_runtime_1.jsxs(react_router_dom_1.Switch, { children: [jsx_runtime_1.jsx(react_router_dom_1.Route, { exact: true, path: "/", component: Start_1.default }, void 0),
                        jsx_runtime_1.jsx(AuthRoute_1.default, { exact: true, path: "/home", component: Home_1.default }, void 0),
                        jsx_runtime_1.jsx(AuthRoute_1.default, { exact: true, path: "/explore", component: Search_1.default }, void 0),
                        jsx_runtime_1.jsx(AuthRoute_1.default, { exact: true, path: "/:userId", component: Profile_1.default }, void 0),
                        jsx_runtime_1.jsx(react_router_dom_1.Route, { exact: true, path: "/accounts/emailsignup", component: Signup_1.default }, void 0),
                        jsx_runtime_1.jsx(react_router_dom_1.Route, { exact: true, path: "/accounts/password/reset", component: ForgotPassword_1.default }, void 0),
                        jsx_runtime_1.jsx(AuthRoute_1.default, { exact: true, path: "/accounts/edit", component: EditProfile_1.default }, void 0)] }, void 0) }, void 0) }, void 0) }, void 0));
}
exports.default = App;
