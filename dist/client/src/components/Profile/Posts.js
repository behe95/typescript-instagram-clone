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
exports.Post = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_redux_1 = require("react-redux");
var data = [
    { username: "user.one", img: "/static/images/portrait/portrait1.jfif" },
    { username: "user.2", img: "/static/images/portrait/portrait2.jfif" },
    { username: "user.three", img: "/static/images/portrait/portrait3.jfif" },
    { username: "user.4", img: "/static/images/portrait/portrait4.jfif" },
    { username: "user.five", img: "/static/images/portrait/portrait5.jfif" },
    { username: "user.one", img: "/static/images/portrait/portrait1.jfif" },
    { username: "user.2", img: "/static/images/portrait/portrait2.jfif" },
    { username: "user.three", img: "/static/images/portrait/portrait3.jfif" },
    { username: "user.4", img: "/static/images/portrait/portrait4.jfif" },
    { username: "user.five", img: "/static/images/portrait/portrait5.jfif" },
];
function Post(props) {
    var src = props.src, number = props.number;
    var getMarginClass = function (key) {
        if (key <= 2) {
            switch (key) {
                case 0:
                    return "removeTopBorder rightBottomBorder";
                case 1:
                    return "removeTopBorder allsideBorder";
                case 2:
                    return "removeTopBorder leftBottomBorder";
                default:
                    break;
            }
        }
        switch (key % 3) {
            case 0:
                return "rightBottomBorder";
            case 1:
                return "allsideBorder";
            case 2:
                return "leftBottomBorder";
            default:
                break;
        }
    };
    return (jsx_runtime_1.jsx("div", __assign({ className: "profile__post col-4 " + getMarginClass(number) }, { children: jsx_runtime_1.jsx("img", { src: "" + src, alt: "image__post" }, void 0) }), void 0));
}
exports.Post = Post;
function Posts() {
    var userProfilePhotos = react_redux_1.useSelector(function (state) { return state.auth; }).photos;
    return (jsx_runtime_1.jsx("div", __assign({ className: "profile__posts__container" }, { children: jsx_runtime_1.jsx("div", __assign({ className: "row no-gutters" }, { children: userProfilePhotos.map(function (d, key) { return (jsx_runtime_1.jsx(Post, { number: key, src: d.url }, key)); }) }), void 0) }), void 0));
}
exports.default = Posts;
