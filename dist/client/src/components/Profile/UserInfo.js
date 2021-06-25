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
var react_router_dom_1 = require("react-router-dom");
function UserInfo(_a) {
    var _b;
    var info = _a.info;
    var history = react_router_dom_1.useHistory();
    var userProfileInfo = react_redux_1.useSelector(function (state) { return state.auth; }).user;
    return (jsx_runtime_1.jsxs("div", __assign({ className: "profile__user__info__component" }, { children: [jsx_runtime_1.jsxs("div", __assign({ className: "top" }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "left" }, { children: jsx_runtime_1.jsx("img", { src: (_b = userProfileInfo === null || userProfileInfo === void 0 ? void 0 : userProfileInfo.profilePhoto) === null || _b === void 0 ? void 0 : _b.url, alt: "portrait1" }, void 0) }), void 0),
                    jsx_runtime_1.jsxs("div", __assign({ onClick: function () { return history.push('/accounts/edit'); }, className: "right" }, { children: [jsx_runtime_1.jsx("p", __assign({ className: "username" }, { children: userProfileInfo === null || userProfileInfo === void 0 ? void 0 : userProfileInfo.username }), void 0),
                            jsx_runtime_1.jsx("button", __assign({ className: "btn btn-light btn-sm" }, { children: "Edit Profile" }), void 0)] }), void 0)] }), void 0),
            jsx_runtime_1.jsxs("div", __assign({ className: "bottom" }, { children: [jsx_runtime_1.jsx("p", __assign({ className: "username" }, { children: userProfileInfo === null || userProfileInfo === void 0 ? void 0 : userProfileInfo.fullName }), void 0),
                    jsx_runtime_1.jsx("p", __assign({ className: "description" }, { children: userProfileInfo === null || userProfileInfo === void 0 ? void 0 : userProfileInfo.bio }), void 0)] }), void 0)] }), void 0));
}
exports.default = UserInfo;