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
function Header(_a) {
    var setShowOptions = _a.setShowOptions;
    return (jsx_runtime_1.jsxs("div", __assign({ className: "options__header__component" }, { children: [jsx_runtime_1.jsx("button", __assign({ onClick: function () { return setShowOptions(function (b) { return !b; }); } }, { children: jsx_runtime_1.jsx("svg", __assign({ "aria-label": "Close", className: "_8-yf5 ", fill: "#262626", height: "24", viewBox: "0 0 48 48", width: "24" }, { children: jsx_runtime_1.jsx("path", { clipRule: "evenodd", d: "M41.1 9.1l-15 15L41 39c.6.6.6 1.5 0 2.1s-1.5.6-2.1 0L24 26.1l-14.9 15c-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1l14.9-15-15-15c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l15 15 15-15c.6-.6 1.5-.6 2.1 0 .6.6.6 1.6 0 2.2z", fillRule: "evenodd" }, void 0) }), void 0) }), void 0),
            jsx_runtime_1.jsx("p", { children: "Options" }, void 0)] }), void 0));
}
exports.default = Header;
