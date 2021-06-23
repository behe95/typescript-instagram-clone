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
var filters = [
    {
        name: "normal"
    },
    {
        name: "Clarendon"
    },
    {
        name: "Gingham"
    },
    {
        name: "Moon"
    },
    {
        name: "Lark"
    },
    {
        name: "Reyes"
    },
    {
        name: "Juno"
    },
    {
        name: "Slumber"
    },
    {
        name: "Crema"
    },
    {
        name: "Ludwig"
    },
    {
        name: "Aden"
    },
    {
        name: "Perpetua"
    }
];
function FilterTab() {
    return (jsx_runtime_1.jsx("div", __assign({ className: "edit__photo__component__upper__bottom__tab" }, { children: filters.map(function (f) { return (jsx_runtime_1.jsxs("div", __assign({ className: "filter" }, { children: [jsx_runtime_1.jsx("p", { children: f.name }, void 0),
                jsx_runtime_1.jsx("img", { src: "/static/images/filter.jpg", alt: f.name }, void 0)] }), f.name)); }) }), void 0));
}
exports.default = FilterTab;
