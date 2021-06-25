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
var react_1 = __importDefault(require("react"));
var initEditValues = {
    brightness: 100,
    contrast: 100,
    // warmth: 100,
    saturation: 100,
};
function useEdit() {
    var _a = react_1.default.useState(__assign({}, initEditValues)), editValues = _a[0], setEditValues = _a[1];
    var onEditSliderChangeHandler = function (e) {
        var _a;
        setEditValues(__assign(__assign({}, editValues), (_a = {}, _a[e.target.name] = parseInt(e.target.value), _a)));
    };
    return [editValues, onEditSliderChangeHandler];
}
exports.default = useEdit;
