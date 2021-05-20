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
var Header_1 = __importDefault(require("./Header"));
require("./Options.scss");
var svg_1 = __importDefault(require("./svg"));
var accountData = ["Edit Profile", "Nametag", "Change Password", "Privacy and Security", "Login Activity", "Emails from Instagram"];
var settingsData = ["Language", "Apps and Website", "Notifications"];
var aboutData = ["Ads", "Help Center", "Report a Problem", "More"];
function Options(_a) {
    var setShowOptions = _a.setShowOptions;
    return (jsx_runtime_1.jsxs("div", __assign({ id: "options__component" }, { children: [jsx_runtime_1.jsx(Header_1.default, { setShowOptions: setShowOptions }, void 0),
            jsx_runtime_1.jsx("div", __assign({ id: "options__component__list__container" }, { children: jsx_runtime_1.jsxs("div", { children: [jsx_runtime_1.jsx("div", __assign({ className: "options__component__list__header" }, { children: jsx_runtime_1.jsx("p", { children: "ACCOUNT" }, void 0) }), void 0),
                        jsx_runtime_1.jsx("ul", __assign({ className: "options__component__list account__list" }, { children: accountData.map(function (d) { return jsx_runtime_1.jsxs("li", __assign({ className: "options__component__list__item" }, { children: [jsx_runtime_1.jsx("p", { children: d }, void 0),
                                    jsx_runtime_1.jsx("button", __assign({ onClick: function () { } }, { children: jsx_runtime_1.jsx("span", __assign({ style: { display: "inline-block", transform: "rotate(90deg)" } }, { children: jsx_runtime_1.jsx("svg", __assign({ "aria-label": "Back", className: "edit__profile__header__svg", fill: "#262626", height: "24", viewBox: "0 0 48 48", width: "24" }, { children: jsx_runtime_1.jsx("path", { d: "M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z" }, void 0) }), void 0) }), void 0) }), void 0)] }), d); }) }), void 0),
                        jsx_runtime_1.jsxs("div", __assign({ className: "options__component__social__icons__container" }, { children: [jsx_runtime_1.jsx("p", __assign({ className: "link" }, { children: "Switch to Professional Account" }), void 0),
                                jsx_runtime_1.jsx("div", __assign({ className: "options__component__social__icons" }, { children: jsx_runtime_1.jsx("svg", __assign({ "aria-label": "Facebook wordmark and family of apps logo", className: "_8-yf5 ", fill: "#262626", height: "12", viewBox: "0 0 771.7 44", width: "200" }, { children: jsx_runtime_1.jsx("path", { "clip-rule": "evenodd", d: svg_1.default, fillRule: "evenodd" }, void 0) }), void 0) }), void 0),
                                jsx_runtime_1.jsx("p", __assign({ className: "link" }, { children: "Accounts Center" }), void 0),
                                jsx_runtime_1.jsx("p", __assign({ className: "text" }, { children: "Control settings for connected experiences across Instagram, the Facebook app and Messenger, including story and post sharing and logging in." }), void 0)] }), void 0),
                        jsx_runtime_1.jsx("div", __assign({ className: "options__component__list__header" }, { children: jsx_runtime_1.jsx("p", { children: "SETTINGS" }, void 0) }), void 0),
                        jsx_runtime_1.jsx("ul", __assign({ className: "options__component__list settings__list" }, { children: settingsData.map(function (d) { return jsx_runtime_1.jsxs("li", __assign({ className: "options__component__list__item" }, { children: [jsx_runtime_1.jsx("p", { children: d }, void 0),
                                    jsx_runtime_1.jsx("button", __assign({ onClick: function () { } }, { children: jsx_runtime_1.jsx("span", __assign({ style: { display: "inline-block", transform: "rotate(90deg)" } }, { children: jsx_runtime_1.jsx("svg", __assign({ "aria-label": "Back", className: "edit__profile__header__svg", fill: "#262626", height: "24", viewBox: "0 0 48 48", width: "24" }, { children: jsx_runtime_1.jsx("path", { d: "M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z" }, void 0) }), void 0) }), void 0) }), void 0)] }), d); }) }), void 0),
                        jsx_runtime_1.jsx("div", __assign({ className: "options__component__list__header" }, { children: jsx_runtime_1.jsx("p", { children: "ABOUT" }, void 0) }), void 0),
                        jsx_runtime_1.jsx("ul", __assign({ className: "options__component__list" }, { children: aboutData.map(function (d) { return jsx_runtime_1.jsxs("li", __assign({ className: "options__component__list__item" }, { children: [jsx_runtime_1.jsx("p", { children: d }, void 0),
                                    jsx_runtime_1.jsx("button", __assign({ onClick: function () { } }, { children: jsx_runtime_1.jsx("span", __assign({ style: { display: "inline-block", transform: "rotate(90deg)" } }, { children: jsx_runtime_1.jsx("svg", __assign({ "aria-label": "Back", className: "edit__profile__header__svg", fill: "#262626", height: "24", viewBox: "0 0 48 48", width: "24" }, { children: jsx_runtime_1.jsx("path", { d: "M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z" }, void 0) }), void 0) }), void 0) }), void 0)] }), d); }) }), void 0),
                        jsx_runtime_1.jsx("ul", __assign({ className: "options__component__list logout__list" }, { children: jsx_runtime_1.jsxs("li", __assign({ className: "options__component__list__item" }, { children: [jsx_runtime_1.jsx("p", { children: "Log Out" }, void 0),
                                    jsx_runtime_1.jsx("button", __assign({ onClick: function () { } }, { children: jsx_runtime_1.jsx("span", __assign({ style: { display: "inline-block", transform: "rotate(90deg)" } }, { children: jsx_runtime_1.jsx("svg", __assign({ "aria-label": "Back", className: "edit__profile__header__svg", fill: "#262626", height: "24", viewBox: "0 0 48 48", width: "24" }, { children: jsx_runtime_1.jsx("path", { d: "M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z" }, void 0) }), void 0) }), void 0) }), void 0)] }), void 0) }), void 0)] }, void 0) }), void 0)] }), void 0));
}
exports.default = Options;
