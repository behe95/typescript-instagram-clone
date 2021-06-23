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
var BottomNavigationMenu_1 = __importDefault(require("./BottomNavigationMenu"));
require("./Search.scss");
var data = [
    { username: "user.one", img: "/static/images/portrait/portrait1.jfif", contentType: "img" },
    { username: "user.2", img: "/static/images/portrait/portrait2.jfif", contentType: "img" },
    { username: "user.three", img: "/static/images/portrait/portrait3.jfif", contentType: "video" },
    { username: "user.4", img: "/static/images/portrait/portrait4.jfif", contentType: "video" },
    { username: "user.five", img: "/static/images/portrait/portrait5.jfif", contentType: "img" },
    { username: "user.one", img: "/static/images/portrait/portrait1.jfif", contentType: "img" },
    { username: "user.2", img: "/static/images/portrait/portrait2.jfif", contentType: "img" },
    { username: "user.2", img: "/static/images/portrait/portrait2.jfif", contentType: "img" },
    { username: "user.2", img: "/static/images/portrait/portrait2.jfif", contentType: "img" },
    { username: "user.2", img: "/static/images/portrait/portrait2.jfif", contentType: "img" },
    { username: "user.2", img: "/static/images/portrait/portrait2.jfif", contentType: "img" },
    { username: "user.2", img: "/static/images/portrait/portrait2.jfif", contentType: "img" },
    { username: "user.2", img: "/static/images/portrait/portrait2.jfif", contentType: "img" },
    { username: "user.three", img: "/static/images/portrait/portrait3.jfif", contentType: "video" },
    { username: "user.4", img: "/static/images/portrait/portrait4.jfif", contentType: "video" },
    { username: "user.five", img: "/static/images/portrait/portrait2.jfif", contentType: "video" },
    { username: "user.five", img: "/static/images/portrait/portrait2.jfif", contentType: "video" },
    { username: "user.five", img: "/static/images/portrait/portrait4.jfif", contentType: "img" },
    { username: "user.five", img: "/static/images/portrait/portrait1.jfif", contentType: "img" },
];
function Search() {
    return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsxs("div", __assign({ id: "search__component" }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "header" }, { children: jsx_runtime_1.jsx("form", __assign({ className: "search__form" }, { children: jsx_runtime_1.jsx("div", __assign({ className: "form-group" }, { children: jsx_runtime_1.jsx("input", { placeholder: "Search", type: "text", className: "form-control" }, void 0) }), void 0) }), void 0) }), void 0),
                    jsx_runtime_1.jsx("div", __assign({ className: "posts" }, { children: data.map(function (d, i) { return (jsx_runtime_1.jsx("div", __assign({ className: "post item-" + d.contentType }, { children: jsx_runtime_1.jsx("img", { src: "" + d.img, alt: "search__image" }, void 0) }), i)); }) }), void 0)] }), void 0),
            jsx_runtime_1.jsx(BottomNavigationMenu_1.default, {}, void 0)] }, void 0));
}
exports.default = Search;
