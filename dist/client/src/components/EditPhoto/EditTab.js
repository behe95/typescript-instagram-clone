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
var react_1 = __importDefault(require("react"));
var edits = [
    {
        title: 'Brightness',
        name: 'brightness',
        icon: 'fas fa-sun',
        defaultValue: 100,
        maxValue: 200,
        minValue: 0
    },
    {
        title: "Contrast",
        name: "contrast",
        icon: 'fas fa-adjust',
        defaultValue: 100,
        maxValue: 200,
        minValue: 0
    },
    // {
    //     title: "Structure",
    //     name: "structure",
    //     icon: 'fas fa-caret-up',
    //     defaultValue: 100,
    //     maxValue: 200,
    //     minValue: 0
    // },
    // {
    //     title: "Warmth",
    //     name: "warmth",
    //     icon: 'fas fa-thermometer-half',
    //     defaultValue: 100,
    //     maxValue: 200,
    //     minValue: 0
    // },
    {
        title: "Saturation",
        name: "saturation",
        icon: "fas fa-tint",
        defaultValue: 100,
        maxValue: 200,
        minValue: 0
    },
    // {
    //     title: "Colour",
    //     name: "colour",
    //     icon: "fas fa-rainbow",
    //     defaultValue: 100,
    //     maxValue: 200,
    //     minValue: 0
    // },
    // {
    //     title: "Fade",
    //     name: "fade",
    //     icon: "fas fa-cloud",
    //     defaultValue: 0,
    //     maxValue: 10,
    //     minValue: 0
    // },
    // {
    //     title: "Highlights",
    //     name: "highlights",
    //     icon: "fas fa-circle",
    //     defaultValue: 100,
    //     maxValue: 200,
    //     minValue: 0
    // },
    // {
    //     title: "Shadows",
    //     name: "shadows",
    //     icon: "fas fa-moon",
    //     defaultValue: 100,
    //     maxValue: 200,
    //     minValue: 0
    // },
    // {
    //     title: "Vignette",
    //     name: "vignette",
    //     icon: "fas fa-dot-circle",
    //     defaultValue: 100,
    //     maxValue: 200,
    //     minValue: 0
    // }
];
function EditTab(_a) {
    var isEditing = _a.isEditing, setIsEditing = _a.setIsEditing, onEditSliderChangeHandler = _a.onEditSliderChangeHandler;
    var _b = react_1.default.useState(""), currentEditSelected = _b[0], setCurrentEditSelected = _b[1];
    var _c = react_1.default.useState(0), defaultValue = _c[0], setDefaultValue = _c[1];
    var _d = react_1.default.useState(0), minValue = _d[0], setMinValue = _d[1];
    var _e = react_1.default.useState(0), maxValue = _e[0], setMaxValue = _e[1];
    var onClickHandler = function (name, defaultValue, minValue, maxValue) {
        setIsEditing(true);
        setCurrentEditSelected(name);
        setDefaultValue(defaultValue);
        setMinValue(minValue);
        setMaxValue(maxValue);
    };
    if (isEditing) {
        return (jsx_runtime_1.jsx("div", __assign({ className: "edit__photo__component__upper__bottom__tab" }, { children: jsx_runtime_1.jsx("div", __assign({ className: "input__slider__container" }, { children: jsx_runtime_1.jsx("input", { name: currentEditSelected, onChange: function (e) { return onEditSliderChangeHandler(e); }, type: "range", defaultValue: defaultValue, max: maxValue, min: minValue }, void 0) }), void 0) }), void 0));
    }
    return (jsx_runtime_1.jsx("div", __assign({ className: "edit__photo__component__upper__bottom__tab" }, { children: edits.map(function (e) { return (jsx_runtime_1.jsxs("div", __assign({ className: "edit", onClick: function () { return onClickHandler(e.name, e.defaultValue, e.minValue, e.maxValue); } }, { children: [jsx_runtime_1.jsx("p", { children: e.title }, void 0),
                jsx_runtime_1.jsx("div", __assign({ className: "icon__holder" }, { children: jsx_runtime_1.jsx("i", { className: e.icon }, void 0) }), void 0)] }), e.title)); }) }), void 0));
}
exports.default = EditTab;
