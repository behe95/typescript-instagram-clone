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
require("./Signup.scss");
var axios_1 = __importDefault(require("axios"));
var formValidators_1 = require("../utils/formValidators");
var notistack_1 = require("notistack");
var API = __importStar(require("../api"));
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
var dataInit = {
    user: "",
    password: "",
    username: "",
    fullName: "",
    registeredUsing: ""
};
function Signup() {
    var history = react_router_dom_1.useHistory();
    var _a = react_1.useState(dataInit), data = _a[0], setData = _a[1];
    var _b = react_1.default.useState(false), isValid = _b[0], setIsValid = _b[1];
    var isMounted = react_1.default.useRef(true);
    var enqueueSnackbar = notistack_1.useSnackbar().enqueueSnackbar;
    var _c = react_1.default.useState(false), isLoginLoading = _c[0], setIsLoginLoading = _c[1];
    react_1.useEffect(function () {
        var key;
        for (key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key) && key !== 'registeredUsing') {
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
    console.log(data, isValid);
    var onChangeHandler = function (e) {
        var _a;
        setData(__assign(__assign({}, data), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var onclickLoginWithFacebook = function () {
        history.push("/home");
    };
    var onclickSignup = function () {
        if (!isValid)
            return;
        var user = data.user;
        console.log(formValidators_1.validateEmail(user), formValidators_1.validateNumber(user));
        if (!formValidators_1.validateNumber(user) && !formValidators_1.validateEmail(user))
            return enqueueSnackbar("Input valid phone number or email address", { variant: 'error' });
        // if(validateNumber(user)) setData({...data, registeredUsing: 'phone'});
        // if(validateEmail(user)) setData({...data, registeredUsing: 'email'});
        // axios
        //     .post('api/auth/register',{...data, registeredUsing: data.registeredUsing})
        //     .then(res => {
        //         console.log(res);
        //     }).catch(err => {
        //         // const {data} = err.response;
        //         // console.log(data);
        //         console.log(err);
        //     })
        setIsLoginLoading(true);
        if (formValidators_1.validateNumber(user)) {
            axios_1.default
                .post(API.REGISTER, __assign(__assign({}, data), { registeredUsing: "phone" }))
                .then(function (res) {
                setIsLoginLoading(false);
                enqueueSnackbar("User registration completed", { variant: 'success' });
            }).catch(function (err) {
                var _a, _b;
                // const {data} = err.response;
                // console.log(data);
                if (err.response) {
                    enqueueSnackbar((_b = (_a = err.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message, { variant: 'error' });
                }
                else {
                    enqueueSnackbar(err.message, { variant: 'error' });
                }
            });
        }
        else if (formValidators_1.validateEmail(user)) {
            axios_1.default
                .post(API.REGISTER, __assign(__assign({}, data), { registeredUsing: "email" }))
                .then(function (res) {
                setIsLoginLoading(false);
                enqueueSnackbar("User registration completed", { variant: 'success' });
            }).catch(function (err) {
                var _a, _b;
                // const {data} = err.response;
                // console.log(data);
                if (err.response) {
                    enqueueSnackbar((_b = (_a = err.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message, { variant: 'error' });
                }
                else {
                    enqueueSnackbar(err.message, { variant: 'error' });
                }
            });
        }
        // history.push("/",{from: history.location.pathname})
    };
    return (jsx_runtime_1.jsxs("div", __assign({ id: "signup__component" }, { children: [jsx_runtime_1.jsxs("div", __assign({ className: "signup__component__header" }, { children: [jsx_runtime_1.jsx("img", { className: "instagram__logo__text__image", src: "/static/images/instagram-logo-text.png", alt: "instagram-logo-text" }, void 0),
                    jsx_runtime_1.jsx("p", __assign({ className: "text__description" }, { children: "Sign up to see photos and videos from your friends" }), void 0),
                    jsx_runtime_1.jsx("button", __assign({ onClick: onclickLoginWithFacebook, className: "btn btn-primary btn-sm facebook__button" }, { children: "Log in with Facebook" }), void 0),
                    jsx_runtime_1.jsxs("div", __assign({ className: "or" }, { children: [jsx_runtime_1.jsx("div", {}, void 0),
                            jsx_runtime_1.jsx("p", { children: "OR" }, void 0),
                            jsx_runtime_1.jsx("div", {}, void 0)] }), void 0)] }), void 0),
            jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsx("form", __assign({ className: "signup__form" }, { children: jsx_runtime_1.jsxs("div", __assign({ className: "form-group" }, { children: [jsx_runtime_1.jsx("input", { onChange: function (e) { return onChangeHandler(e); }, name: "user", value: data.user, placeholder: "Mobile Number or Email", type: "text", className: "form-control" }, void 0),
                            jsx_runtime_1.jsx("input", { onChange: function (e) { return onChangeHandler(e); }, name: "fullName", value: data.fullName, placeholder: "Full Name", type: "text", className: "form-control" }, void 0),
                            jsx_runtime_1.jsx("input", { onChange: function (e) { return onChangeHandler(e); }, name: "username", value: data.username, placeholder: "Username", type: "text", className: "form-control" }, void 0),
                            jsx_runtime_1.jsx("input", { onChange: function (e) { return onChangeHandler(e); }, name: "password", value: data.password, placeholder: "Password", type: "password", className: "form-control" }, void 0)] }), void 0) }), void 0) }, void 0),
            jsx_runtime_1.jsxs("div", __assign({ className: "bottom" }, { children: [jsx_runtime_1.jsx("button", __assign({ onClick: function () { return onclickSignup(); }, className: "btn btn-primary btn-sm " + (!isValid ? 'disabled' : '') + " login__button" }, { children: isLoginLoading ?
                            jsx_runtime_1.jsx("div", __assign({ className: "spinner-grow spinner-grow-sm", role: "status" }, { children: jsx_runtime_1.jsx("span", __assign({ className: "sr-only" }, { children: "Loading..." }), void 0) }), void 0)
                            :
                                "Sign Up" }), void 0),
                    jsx_runtime_1.jsxs("p", { children: ["By signing up, you agree to our", jsx_runtime_1.jsx("span", { children: " Terms, Data Policy and Cookies Policy" }, void 0)] }, void 0)] }), void 0),
            jsx_runtime_1.jsxs("div", __assign({ className: "store__icon__holder" }, { children: [jsx_runtime_1.jsxs("p", __assign({ className: "login__text" }, { children: ["Have an account? ", jsx_runtime_1.jsx("span", __assign({ onClick: function () { return history.push({ pathname: "/", state: { from: "/accounts/emailsignup" } }); } }, { children: "Log in" }), void 0)] }), void 0),
                    jsx_runtime_1.jsx("p", __assign({ className: "get__the__app__text" }, { children: "Get the app" }), void 0),
                    jsx_runtime_1.jsxs("div", __assign({ className: "store__icon__images" }, { children: [jsx_runtime_1.jsx("img", { src: "/static/images/appstore-install-badges-badge_ios_english-en.png-180ae7a0bcf7.png", alt: "appstore-install-badges-badge_ios_english-en.png-180ae7a0bcf7" }, void 0),
                            jsx_runtime_1.jsx("img", { src: "/static/images/appstore-install-badges-badge_android_english-en.png-e9cd846dc748.png.png", alt: "appstore-install-badges-badge_android_english-en.png-e9cd846dc748" }, void 0)] }), void 0)] }), void 0),
            jsx_runtime_1.jsxs("div", __assign({ className: "footer" }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "top" }, { children: footerContentsTop.map(function (c) { return (jsx_runtime_1.jsx("p", __assign({ className: "footer__content" }, { children: c.title }), c.title)); }) }), void 0),
                    jsx_runtime_1.jsxs("div", __assign({ className: "bottom" }, { children: [jsx_runtime_1.jsx("form", { children: jsx_runtime_1.jsx("div", __assign({ className: "form-group" }, { children: jsx_runtime_1.jsxs("select", __assign({ defaultValue: "0", className: "form-select form-control form-control-sm", "aria-label": "Default select example" }, { children: [jsx_runtime_1.jsx("option", __assign({ value: "0" }, { children: "English" }), void 0),
                                            jsx_runtime_1.jsx("option", __assign({ value: "1" }, { children: "English(UK)" }), void 0),
                                            jsx_runtime_1.jsx("option", __assign({ value: "2" }, { children: "French" }), void 0),
                                            jsx_runtime_1.jsx("option", __assign({ value: "3" }, { children: "Deutsch" }), void 0)] }), void 0) }), void 0) }, void 0),
                            jsx_runtime_1.jsx("p", { children: "\u00A9 2021 Instagram from Facebook" }, void 0)] }), void 0)] }), void 0)] }), void 0));
}
exports.default = Signup;
