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
require("bootstrap/dist/css/bootstrap.min.css");
require("./App.scss");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var store_1 = require("./store");
var react_1 = require("redux-persist/integration/react");
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
var EditPhoto_1 = __importDefault(require("./components/EditPhoto"));
var SharePhoto_1 = __importDefault(require("./components/SharePhoto"));
var PageNotFound_1 = __importDefault(require("./components/PageNotFound"));
function App() {
    return (jsx_runtime_1.jsx(react_redux_1.Provider, __assign({ store: store_1.store }, { children: jsx_runtime_1.jsx(react_1.PersistGate, __assign({ loading: null, persistor: store_1.persistor }, { children: jsx_runtime_1.jsx(Root_1.default, { children: jsx_runtime_1.jsx(react_router_dom_1.BrowserRouter, { children: jsx_runtime_1.jsxs(Auth_context_1.AuthProvider, { children: [jsx_runtime_1.jsx(react_router_dom_1.Route, { exact: true, path: "/", component: Start_1.default }, void 0),
                            jsx_runtime_1.jsx(AuthRoute_1.default, { exact: true, path: "/home", component: Home_1.default }, void 0),
                            jsx_runtime_1.jsx(AuthRoute_1.default, { exact: true, path: "/explore", component: Search_1.default }, void 0),
                            jsx_runtime_1.jsx(AuthRoute_1.default, { exact: true, path: "/:userId", component: Profile_1.default }, void 0),
                            jsx_runtime_1.jsx(react_router_dom_1.Route, { exact: true, path: "/accounts/emailsignup", component: Signup_1.default }, void 0),
                            jsx_runtime_1.jsx(react_router_dom_1.Route, { exact: true, path: "/accounts/password/reset", component: ForgotPassword_1.default }, void 0),
                            jsx_runtime_1.jsx(AuthRoute_1.default, { exact: true, path: "/accounts/edit", component: EditProfile_1.default }, void 0),
                            jsx_runtime_1.jsx(AuthRoute_1.default, { exact: true, path: "/create/style", component: EditPhoto_1.default }, void 0),
                            jsx_runtime_1.jsx(AuthRoute_1.default, { exact: true, path: "/create/details", component: SharePhoto_1.default }, void 0),
                            jsx_runtime_1.jsx(react_router_dom_1.Route, { exact: true, path: "*", component: PageNotFound_1.default }, void 0)] }, void 0) }, void 0) }, void 0) }), void 0) }), void 0));
}
exports.default = App;
