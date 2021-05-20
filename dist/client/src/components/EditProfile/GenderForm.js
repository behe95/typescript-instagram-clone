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
function GenderForm(props) {
    var dispatch = props.dispatch, formValues = props.formValues;
    return (jsx_runtime_1.jsx("div", __assign({ className: "edit__profile__component__gender__form" }, { children: jsx_runtime_1.jsxs("form", __assign({ className: "gender__form" }, { children: [jsx_runtime_1.jsxs("div", __assign({ className: "form-check" }, { children: [jsx_runtime_1.jsx("input", { checked: formValues.gender === 'male' && true, onChange: function (e) { return dispatch({ type: 'gender', payload: e }); }, className: "form-check-input", type: "radio", name: "gender", value: "male" }, void 0),
                        jsx_runtime_1.jsx("label", __assign({ className: "form-check-label", htmlFor: "male" }, { children: "Male" }), void 0)] }), void 0),
                jsx_runtime_1.jsxs("div", __assign({ className: "form-check" }, { children: [jsx_runtime_1.jsx("input", { checked: formValues.gender === 'female' && true, onChange: function (e) { return dispatch({ type: 'gender', payload: e }); }, className: "form-check-input", type: "radio", name: "gender", value: "female" }, void 0),
                        jsx_runtime_1.jsx("label", __assign({ className: "form-check-label", htmlFor: "female" }, { children: "Female" }), void 0)] }), void 0),
                jsx_runtime_1.jsxs("div", __assign({ className: "form-check" }, { children: [jsx_runtime_1.jsx("input", { checked: formValues.gender === 'custom' && true, onChange: function (e) { return dispatch({ type: 'gender', payload: e }); }, className: "form-check-input", type: "radio", name: "gender", value: "custom" }, void 0),
                        jsx_runtime_1.jsx("label", __assign({ className: "form-check-label", htmlFor: "custom" }, { children: "Custom" }), void 0)] }), void 0),
                jsx_runtime_1.jsxs("div", __assign({ className: "form-check" }, { children: [jsx_runtime_1.jsx("input", { checked: formValues.gender === 'preferNotToSay' && true, onChange: function (e) { return dispatch({ type: 'gender', payload: e }); }, className: "form-check-input", type: "radio", name: "gender", value: "preferNotToSay" }, void 0),
                        jsx_runtime_1.jsx("label", __assign({ className: "form-check-label", htmlFor: "preferNotToSay" }, { children: "Prefer Not To Say" }), void 0)] }), void 0)] }), void 0) }), void 0));
}
exports.default = GenderForm;
