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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Login_1 = __importDefault(require("./Login"));
var footerContentsTop = [
    { title: "About" },
    { title: "Blog" },
    { title: "Jobs" },
    { title: "Help" },
    { title: "API" },
    { title: "Privacy" },
    { title: "Terms" },
    { title: "Top Accounts" },
    { title: "Hashtags" },
    { title: "Locations" },
];
var footerContentsBottom = [
    { title: "Beauty" },
    { title: "Dance & Performance" },
    { title: "Fitness" },
    { title: "Food & Drink" },
    { title: "Home & Garden" },
    { title: "Music" },
    { title: "Visual Arts" },
];
var StartComponentTop = react_1.default.memo(function () {
    // console.log("RENDERING ========================== StartComponentTop");
    return (jsx_runtime_1.jsx("div", __assign({ className: "top" }, { children: jsx_runtime_1.jsx("form", { children: jsx_runtime_1.jsx("div", __assign({ className: "form-group" }, { children: jsx_runtime_1.jsxs("select", __assign({ className: "form-select form-control form-control-sm", "aria-label": "Default select example" }, { children: [jsx_runtime_1.jsx("option", __assign({ selected: true }, { children: "English" }), void 0),
                        jsx_runtime_1.jsx("option", __assign({ value: "1" }, { children: "English(UK)" }), void 0),
                        jsx_runtime_1.jsx("option", __assign({ value: "2" }, { children: "French" }), void 0),
                        jsx_runtime_1.jsx("option", __assign({ value: "3" }, { children: "Deutsch" }), void 0)] }), void 0) }), void 0) }, void 0) }), void 0));
});
var StartBottomComponent = react_1.default.memo(function () {
    // console.log("RENDERING ========================== StartBottomComponent");
    return (jsx_runtime_1.jsxs("div", __assign({ className: "bottom" }, { children: [jsx_runtime_1.jsxs("div", __assign({ className: "copyright" }, { children: [jsx_runtime_1.jsx("p", { children: "from" }, void 0),
                    jsx_runtime_1.jsx("h6", { children: "FACEBOOK" }, void 0)] }), void 0),
            jsx_runtime_1.jsxs("footer", __assign({ className: "footer" }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "top" }, { children: footerContentsTop.map(function (c) { return (jsx_runtime_1.jsx("p", __assign({ className: "footer__content" }, { children: c.title }), c.title)); }) }), void 0),
                    jsx_runtime_1.jsx("div", __assign({ className: "bottom" }, { children: footerContentsBottom.map(function (c) { return (jsx_runtime_1.jsx("p", __assign({ className: "footer__content" }, { children: c.title }), c.title)); }) }), void 0)] }), void 0)] }), void 0));
});
var StartMidComponent = function (props) {
    var setShowLogin = props.setShowLogin;
    // console.log("RENDERING ========================== StartMidComponent");
    return (jsx_runtime_1.jsxs("div", __assign({ className: "mid" }, { children: [jsx_runtime_1.jsx("img", { className: "instagram__logo__text__image", src: "/static/images/instagram-logo-text.png", alt: "instagram-logo-text" }, void 0),
            jsx_runtime_1.jsx("p", __assign({ className: "text__description" }, { children: "Sign up to see photos and videos from your friends" }), void 0),
            jsx_runtime_1.jsx("img", { className: "google__play__button__image", src: "static/images/appstore-install-badges-badge_android_english-en.png-e9cd846dc748.png.png", alt: "appstore-install-badges-badge_android_english-en.png-e9cd846dc748" }, void 0),
            jsx_runtime_1.jsxs("div", __assign({ className: "auth__links" }, { children: [jsx_runtime_1.jsx("p", __assign({ onClick: function () { return setShowLogin(function (showLogin) { return !showLogin; }); }, className: "link" }, { children: "Log In" }), void 0),
                    jsx_runtime_1.jsx("p", { children: "or" }, void 0),
                    jsx_runtime_1.jsx(react_router_dom_1.Link, __assign({ className: "link", to: "/accounts/emailsignup" }, { children: "Sign Up" }), void 0)] }), void 0)] }), void 0));
};
function Start(_a) {
    var history = _a.history;
    // const history = useHistory();
    var location = react_router_dom_1.useLocation();
    var _b = react_1.default.useState(function () {
        var from = (location.state || { from: '/' }).from;
        if (from !== '/')
            return true;
        return false;
    }), showLogin = _b[0], setShowLogin = _b[1];
    react_1.default.useEffect(function () {
        localStorage.clear();
    }, []);
    var isMounted = react_1.default.useRef(true);
    react_1.useCallback(function () {
        history.replace(__assign(__assign({}, history.location), { state: undefined }));
        // eslint-disable-next-line
    }, []);
    react_1.default.useEffect(function () {
        if (isMounted.current) {
            // window.addEventListener('onbeforeunload', resetLocation);
            // const { from } = location.state || {from: '/'};
            // if(from !== '/') setShowLogin(b => !b);  
            window.history.replaceState({}, document.title);
        }
        return function () {
            isMounted.current = false;
        };
    }, []);
    return (jsx_runtime_1.jsxs("div", __assign({ id: "start__component" }, { children: [jsx_runtime_1.jsx(StartComponentTop, {}, void 0),
            showLogin ?
                jsx_runtime_1.jsx(Login_1.default, {}, void 0)
                :
                    jsx_runtime_1.jsx(StartMidComponent, { setShowLogin: setShowLogin }, void 0),
            jsx_runtime_1.jsx(StartBottomComponent, {}, void 0)] }), void 0));
}
exports.default = Start;
