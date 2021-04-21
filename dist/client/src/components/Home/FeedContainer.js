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
var FeedItem_1 = __importDefault(require("./FeedItem"));
var data = [
    { username: "user.one", img: "/static/images/portrait/portrait1.jfif" },
    { username: "user.2", img: "/static/images/portrait/portrait2.jfif" },
    { username: "user.three", img: "/static/images/portrait/portrait3.jfif" },
    { username: "user.4", img: "/static/images/portrait/portrait4.jfif" },
    { username: "user.five", img: "/static/images/portrait/portrait5.jfif" },
];
function FeedContainer() {
    return (jsx_runtime_1.jsx("div", __assign({ id: "home__feed__container" }, { children: data.map(function (d) { return (jsx_runtime_1.jsx(FeedItem_1.default, { username: d.username, img: d.img }, d.username)); }) }), void 0));
}
exports.default = FeedContainer;
