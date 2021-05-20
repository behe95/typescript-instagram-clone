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
function Bottomtab(_a) {
    var showFilterTab = _a.showFilterTab, setShowFilterTab = _a.setShowFilterTab, isEditing = _a.isEditing, setIsEditing = _a.setIsEditing;
    var onClickHandler = function (tabPos) {
        switch (tabPos) {
            case "left":
                if (isEditing)
                    return setIsEditing(false);
                setShowFilterTab(true);
                break;
            case "right":
                if (isEditing)
                    return setIsEditing(false);
                setShowFilterTab(false);
                break;
            default:
                break;
        }
    };
    return (jsx_runtime_1.jsxs("div", __assign({ id: "edit__photo__bottomtab__component" }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "left " + (showFilterTab && !isEditing ? 'active' : null), onClick: function () { return onClickHandler("left"); } }, { children: jsx_runtime_1.jsx("p", { children: isEditing ? "Cancel" : "Filter" }, void 0) }), void 0),
            jsx_runtime_1.jsx("div", __assign({ className: "right " + (!showFilterTab && !isEditing ? 'active' : null), onClick: function () { return onClickHandler("right"); } }, { children: jsx_runtime_1.jsx("p", { children: isEditing ? "Done" : "Edit" }, void 0) }), void 0)] }), void 0));
}
exports.default = Bottomtab;
