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
var EditPhoto_1 = __importDefault(require("./EditPhoto"));
var Header_1 = __importDefault(require("./Header"));
require("./EditPhoto.scss");
var Bottomtab_1 = __importDefault(require("./Bottomtab"));
var FilterTab_1 = __importDefault(require("./FilterTab"));
var EditTab_1 = __importDefault(require("./EditTab"));
var useEdit_1 = __importDefault(require("./useEdit"));
function EditPhotoIndex() {
    var _a = react_1.default.useState(true), showFilterTab = _a[0], setShowFilterTab = _a[1];
    var _b = react_1.default.useState(false), isEditing = _b[0], setIsEditing = _b[1];
    var _c = useEdit_1.default(), editValues = _c[0], onEditSliderChangeHandler = _c[1];
    return (jsx_runtime_1.jsxs("div", __assign({ id: "edit__photo__component" }, { children: [jsx_runtime_1.jsx(Header_1.default, {}, void 0),
            jsx_runtime_1.jsx(EditPhoto_1.default, { editValues: editValues }, void 0),
            showFilterTab ?
                jsx_runtime_1.jsx(FilterTab_1.default, {}, void 0)
                :
                    jsx_runtime_1.jsx(EditTab_1.default, { editValues: editValues, onEditSliderChangeHandler: onEditSliderChangeHandler, isEditing: isEditing, setIsEditing: setIsEditing }, void 0),
            jsx_runtime_1.jsx(Bottomtab_1.default, { isEditing: isEditing, setIsEditing: setIsEditing, showFilterTab: showFilterTab, setShowFilterTab: setShowFilterTab }, void 0)] }), void 0));
}
exports.default = EditPhotoIndex;
