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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./ForgotPassword.scss");
var react_router_dom_1 = require("react-router-dom");
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
function ForgotPassword() {
    var history = react_router_dom_1.useHistory();
    return (jsx_runtime_1.jsxs("div", __assign({ id: "forgot__password__component" }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "header" }, { children: jsx_runtime_1.jsx("img", { className: "instagram__logo__text", src: "/static/images/instagram-logo-text.png", alt: "instagram-logo-text" }, void 0) }), void 0),
            jsx_runtime_1.jsxs("div", __assign({ className: "body" }, { children: [jsx_runtime_1.jsx("img", { className: "padlock__image", src: "/static/images/padlock.png", alt: "padlock" }, void 0),
                    jsx_runtime_1.jsx("p", __assign({ className: "title" }, { children: "Trouble Logging In?" }), void 0),
                    jsx_runtime_1.jsx("p", __assign({ className: "subtitle" }, { children: "Enter your email, phone or username and we'll send you a link to get back into your account" }), void 0),
                    jsx_runtime_1.jsx("form", __assign({ className: "forgot__pass__form" }, { children: jsx_runtime_1.jsx("div", __assign({ className: "form-group" }, { children: jsx_runtime_1.jsx("input", { placeholder: "Email, Phone or Username", type: "text", className: "form-control" }, void 0) }), void 0) }), void 0),
                    jsx_runtime_1.jsx("button", __assign({ className: "btn btn-primary btn-sm send__login__link__button disabled" }, { children: "Send Login Link" }), void 0),
                    jsx_runtime_1.jsxs("div", __assign({ className: "or" }, { children: [jsx_runtime_1.jsx("div", {}, void 0),
                            jsx_runtime_1.jsx("p", { children: "OR" }, void 0),
                            jsx_runtime_1.jsx("div", {}, void 0)] }), void 0),
                    jsx_runtime_1.jsx("p", __assign({ onClick: function () { return history.push("/accounts/emailsignup"); }, className: "sign__up__text" }, { children: "Create New Account" }), void 0)] }), void 0),
            jsx_runtime_1.jsx("div", __assign({ onClick: function () { return history.push({ pathname: "/", state: { from: "/accounts/password/reset" } }); }, className: "back__to__login__holder" }, { children: jsx_runtime_1.jsx("p", { children: "Back To Login" }, void 0) }), void 0),
            jsx_runtime_1.jsxs("div", __assign({ className: "footer" }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "top" }, { children: footerContentsTop.map(function (c) { return (jsx_runtime_1.jsx("p", __assign({ className: "footer__content" }, { children: c.title }), c.title)); }) }), void 0),
                    jsx_runtime_1.jsxs("div", __assign({ className: "bottom" }, { children: [jsx_runtime_1.jsx("form", { children: jsx_runtime_1.jsx("div", __assign({ className: "form-group" }, { children: jsx_runtime_1.jsxs("select", __assign({ className: "form-select form-control form-control-sm", "aria-label": "Default select example" }, { children: [jsx_runtime_1.jsx("option", __assign({ selected: true }, { children: "English" }), void 0),
                                            jsx_runtime_1.jsx("option", __assign({ value: "1" }, { children: "English(UK)" }), void 0),
                                            jsx_runtime_1.jsx("option", __assign({ value: "2" }, { children: "French" }), void 0),
                                            jsx_runtime_1.jsx("option", __assign({ value: "3" }, { children: "Deutsch" }), void 0)] }), void 0) }), void 0) }, void 0),
                            jsx_runtime_1.jsx("p", { children: "\u00A9 2021 Instagram from Facebook" }, void 0)] }), void 0)] }), void 0)] }), void 0));
}
exports.default = ForgotPassword;
