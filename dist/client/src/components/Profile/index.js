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
var BottomNavigationMenu_1 = __importDefault(require("../BottomNavigationMenu"));
var Posts_1 = __importDefault(require("./Posts"));
require("./Profile.scss");
// import UserInfo from "./UserInfo";
var UserInfoAndActions_1 = __importDefault(require("./UserInfoAndActions"));
function Profile() {
    return (jsx_runtime_1.jsxs("div", __assign({ id: "profile__component" }, { children: [jsx_runtime_1.jsx(UserInfoAndActions_1.default, {}, void 0),
            jsx_runtime_1.jsx(Posts_1.default, {}, void 0),
            jsx_runtime_1.jsx(BottomNavigationMenu_1.default, {}, void 0)] }), void 0));
}
exports.default = Profile;