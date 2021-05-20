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
function PageNotFound() {
    return (jsx_runtime_1.jsx("div", __assign({ id: "page__not__found__component", className: "d-flex justify-content-center align-items-center" }, { children: jsx_runtime_1.jsx("h5", { children: "Page Not Found" }, void 0) }), void 0));
}
exports.default = PageNotFound;
