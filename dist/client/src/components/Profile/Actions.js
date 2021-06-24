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
function Actions() {
    return (jsx_runtime_1.jsxs("div", __assign({ className: "profile__actions__component" }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "top" }, { children: jsx_runtime_1.jsxs("ul", __assign({ className: "list-group list-group-horizontal" }, { children: [jsx_runtime_1.jsxs("li", __assign({ className: "list-group-item" }, { children: [jsx_runtime_1.jsx("p", __assign({ className: "number" }, { children: "5" }), void 0),
                                jsx_runtime_1.jsx("p", __assign({ className: "title" }, { children: "posts" }), void 0)] }), void 0),
                        jsx_runtime_1.jsxs("li", __assign({ className: "list-group-item" }, { children: [jsx_runtime_1.jsx("p", __assign({ className: "number" }, { children: "4" }), void 0),
                                jsx_runtime_1.jsx("p", __assign({ className: "title" }, { children: "followers" }), void 0)] }), void 0),
                        jsx_runtime_1.jsxs("li", __assign({ className: "list-group-item" }, { children: [jsx_runtime_1.jsx("p", __assign({ className: "number" }, { children: "2" }), void 0),
                                jsx_runtime_1.jsx("p", __assign({ className: "title" }, { children: "following" }), void 0)] }), void 0)] }), void 0) }), void 0),
            jsx_runtime_1.jsxs("div", __assign({ className: "bottom" }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "posts" }, { children: jsx_runtime_1.jsx("svg", __assign({ "aria-label": "Posts", className: "posts__svg", fill: "#0095f6", height: "24", viewBox: "0 0 48 48", width: "24" }, { children: jsx_runtime_1.jsx("path", { clipRule: "evenodd", d: "M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z", fillRule: "evenodd" }, void 0) }), void 0) }), void 0),
                    jsx_runtime_1.jsx("div", __assign({ className: "feed" }, { children: jsx_runtime_1.jsx("svg", __assign({ width: "24", height: "24" }, { children: jsx_runtime_1.jsx("rect", { x: "0", y: "0", width: "24", height: "24", style: { fill: "white", stroke: "grey", strokeWidth: "2", fillOpacity: 0.1, strokeOpacity: 0.9 } }, void 0) }), void 0) }), void 0),
                    jsx_runtime_1.jsx("div", __assign({ className: "saved" }, { children: jsx_runtime_1.jsx("svg", __assign({ "aria-label": "Saved", className: "saved__svg", fill: "#8e8e8e", height: "24", viewBox: "0 0 48 48", width: "24" }, { children: jsx_runtime_1.jsx("path", { d: "M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z" }, void 0) }), void 0) }), void 0),
                    jsx_runtime_1.jsx("div", __assign({ className: "tagged" }, { children: jsx_runtime_1.jsx("svg", __assign({ "aria-label": "Tagged", className: "tagged__svg", fill: "#8e8e8e", height: "24", viewBox: "0 0 48 48", width: "24" }, { children: jsx_runtime_1.jsx("path", { d: "M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z" }, void 0) }), void 0) }), void 0)] }), void 0)] }), void 0));
}
exports.default = Actions;
