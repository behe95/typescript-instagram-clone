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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
require("./BottomNavigationMenu.scss");
var react_router_dom_1 = require("react-router-dom");
var Auth_context_1 = require("../contexts/Auth.context");
var react_redux_1 = require("react-redux");
var upload_1 = require("../store/actions/upload");
function BottomNavigationMenu() {
    var _this = this;
    var history = react_router_dom_1.useHistory();
    var dispatch = react_redux_1.useDispatch();
    var info = Auth_context_1.useAuth().userInfo;
    var photoUploadInputRef = react_1.default.useRef();
    var onClickPhotoUploadHandler = function () {
        photoUploadInputRef.current.click();
    };
    var onChangePhotoUploadInputRef = function (e) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dispatch(upload_1.photoUpload(e.target.files[0]))];
                case 1:
                    _a.sent();
                    history.push('/create/style');
                    return [2 /*return*/];
            }
        });
    }); };
    return (jsx_runtime_1.jsxs("div", __assign({ id: "bottom__navigation__menu__component" }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "item home", onClick: function () { return history.push('/home'); } }, { children: jsx_runtime_1.jsx("p", { children: jsx_runtime_1.jsx("svg", __assign({ "aria-label": "Home", className: "home__svg", fill: "#262626", height: "24", viewBox: "0 0 48 48", width: "24" }, { children: jsx_runtime_1.jsx("path", { d: "M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z" }, void 0) }), void 0) }, void 0) }), void 0),
            jsx_runtime_1.jsx("div", __assign({ className: "item search", onClick: function () { return history.push("/explore"); } }, { children: jsx_runtime_1.jsx("p", { children: jsx_runtime_1.jsxs("svg", __assign({ "aria-label": "Search & Explore", className: "search__svh ", fill: "#262626", height: "24", viewBox: "0 0 48 48", width: "24" }, { children: [jsx_runtime_1.jsx("path", { d: "M20 40C9 40 0 31 0 20S9 0 20 0s20 9 20 20-9 20-20 20zm0-37C10.6 3 3 10.6 3 20s7.6 17 17 17 17-7.6 17-17S29.4 3 20 3z" }, void 0), jsx_runtime_1.jsx("path", { d: "M46.6 48.1c-.4 0-.8-.1-1.1-.4L32 34.2c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l13.5 13.5c.6.6.6 1.5 0 2.1-.2.3-.6.4-1 .4z" }, void 0)] }), void 0) }, void 0) }), void 0),
            jsx_runtime_1.jsxs("div", __assign({ className: "item add__photo", onClick: onClickPhotoUploadHandler }, { children: [jsx_runtime_1.jsx("p", { children: jsx_runtime_1.jsxs("svg", __assign({ "aria-label": "New Post", className: "add__photo__svg", fill: "#262626", height: "24", viewBox: "0 0 48 48", width: "24" }, { children: [jsx_runtime_1.jsx("path", { d: "M31.8 48H16.2c-6.6 0-9.6-1.6-12.1-4C1.6 41.4 0 38.4 0 31.8V16.2C0 9.6 1.6 6.6 4 4.1 6.6 1.6 9.6 0 16.2 0h15.6c6.6 0 9.6 1.6 12.1 4C46.4 6.6 48 9.6 48 16.2v15.6c0 6.6-1.6 9.6-4 12.1-2.6 2.5-5.6 4.1-12.2 4.1zM16.2 3C10 3 7.8 4.6 6.1 6.2 4.6 7.8 3 10 3 16.2v15.6c0 6.2 1.6 8.4 3.2 10.1 1.6 1.6 3.8 3.1 10 3.1h15.6c6.2 0 8.4-1.6 10.1-3.2 1.6-1.6 3.1-3.8 3.1-10V16.2c0-6.2-1.6-8.4-3.2-10.1C40.2 4.6 38 3 31.8 3H16.2z" }, void 0), jsx_runtime_1.jsx("path", { d: "M36.3 25.5H11.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h24.6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z" }, void 0), jsx_runtime_1.jsx("path", { d: "M24 37.8c-.8 0-1.5-.7-1.5-1.5V11.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v24.6c0 .8-.7 1.5-1.5 1.5z" }, void 0)] }), void 0) }, void 0),
                    jsx_runtime_1.jsx("input", { onChange: function (e) { return onChangePhotoUploadInputRef(e); }, ref: photoUploadInputRef, type: "file", className: "d-none" }, void 0)] }), void 0),
            jsx_runtime_1.jsx("div", __assign({ className: "item notification" }, { children: jsx_runtime_1.jsx("p", { children: jsx_runtime_1.jsx("svg", __assign({ "aria-label": "Activity", className: "notification__svg ", fill: "#262626", height: "24", viewBox: "0 0 48 48", width: "24" }, { children: jsx_runtime_1.jsx("path", { d: "M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" }, void 0) }), void 0) }, void 0) }), void 0),
            jsx_runtime_1.jsx("div", __assign({ className: "item profile", onClick: function () { return history.push("/user.one"); } }, { children: jsx_runtime_1.jsx("p", { children: jsx_runtime_1.jsx("img", { className: "profile__image", src: info && info.profilePhoto && "" + info.profilePhoto.url, alt: "profile__image" }, void 0) }, void 0) }), void 0)] }), void 0));
}
exports.default = react_1.default.memo(BottomNavigationMenu);
