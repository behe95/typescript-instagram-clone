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
var react_redux_1 = require("react-redux");
var react_router_1 = require("react-router");
function Header() {
    var history = react_router_1.useHistory();
    var dispatch = react_redux_1.useDispatch();
    var onClickNextButtonHandler = function () {
    };
    var onClickCloseButtonHandler = function () {
        history.goBack();
    };
    return (jsx_runtime_1.jsxs("div", __assign({ className: "share__photo__header" }, { children: [jsx_runtime_1.jsx("button", __assign({ className: "back__btn", onClick: onClickCloseButtonHandler }, { children: jsx_runtime_1.jsx("span", __assign({ style: { display: "inline-block", transform: "rotate(270deg)" } }, { children: jsx_runtime_1.jsx("svg", __assign({ "aria-label": "Back", className: "back__btn__svg", fill: "#262626", height: "24", viewBox: "0 0 48 48", width: "24" }, { children: jsx_runtime_1.jsx("path", { d: "M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z" }, void 0) }), void 0) }), void 0) }), void 0),
            jsx_runtime_1.jsx("p", { children: "New Post" }, void 0),
            jsx_runtime_1.jsx("button", __assign({ onClick: onClickNextButtonHandler, className: "next__btn" }, { children: "Share" }), void 0)] }), void 0));
}
exports.default = Header;
