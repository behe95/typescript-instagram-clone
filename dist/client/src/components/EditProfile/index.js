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
var BottomNavigationMenu_1 = __importDefault(require("../BottomNavigationMenu"));
require("./EditProfile.scss");
var EditProfileForm_1 = __importDefault(require("./EditProfileForm"));
var GenderForm_1 = __importDefault(require("./GenderForm"));
var Header_1 = __importDefault(require("./Header"));
var useForm_1 = __importDefault(require("./useForm"));
function EditProfile() {
    var _a = react_1.default.useState(false), showGenderForm = _a[0], setShowGenderForm = _a[1];
    var _b = react_1.default.useState(""), headerFor = _b[0], setHeaderFor = _b[1];
    react_1.default.useEffect(function () {
        if (showGenderForm)
            return setHeaderFor('gender__form');
        setHeaderFor("");
    }, [showGenderForm]);
    var _c = useForm_1.default(), formValues = _c[0], dispatch = _c[1];
    return (jsx_runtime_1.jsxs("div", __assign({ id: "edit__profile__component" }, { children: [jsx_runtime_1.jsx(Header_1.default, { setShowGenderForm: setShowGenderForm, for: headerFor }, void 0),
            showGenderForm ?
                jsx_runtime_1.jsx(GenderForm_1.default, { formValues: formValues, dispatch: dispatch }, void 0)
                :
                    jsx_runtime_1.jsx(EditProfileForm_1.default, { formValues: formValues, dispatch: dispatch, setShowGenderForm: setShowGenderForm }, void 0),
            jsx_runtime_1.jsx(BottomNavigationMenu_1.default, {}, void 0)] }), void 0));
}
exports.default = EditProfile;
