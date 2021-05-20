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
require("./LoaderComponent.scss");
function LoaderComponent() {
    return (jsx_runtime_1.jsx("div", __assign({ id: "loader__component" }, { children: jsx_runtime_1.jsx("img", { src: "https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47paud6vdvh3o74aely1itnovf34pkx6revl3pih7y&rid=giphy.gif&ct=g", alt: "loader__gif" }, void 0) }), void 0));
}
exports.default = LoaderComponent;
