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
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataUrlToFile = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_redux_1 = require("react-redux");
var react_router_1 = require("react-router");
var auth_1 = require("../../store/actions/auth");
var upload_1 = require("../../store/actions/upload");
function dataUrlToFile(dataUrl, fileName) {
    return __awaiter(this, void 0, void 0, function () {
        var res, blob;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(dataUrl)];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.blob()];
                case 2:
                    blob = _a.sent();
                    return [2 /*return*/, new File([blob], fileName, { type: 'image/png' })];
            }
        });
    });
}
exports.dataUrlToFile = dataUrlToFile;
function Header() {
    var _this = this;
    var history = react_router_1.useHistory();
    var dispatch = react_redux_1.useDispatch();
    var _a = react_redux_1.useSelector(function (state) { return state.upload; }), caption = _a.caption, selectedPhotoUpload = _a.selectedPhotoUpload;
    var onClickNextButtonHandler = function () { return __awaiter(_this, void 0, void 0, function () {
        var file, formData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dataUrlToFile(selectedPhotoUpload, "image")];
                case 1:
                    file = _a.sent();
                    console.log(caption, file);
                    formData = new FormData();
                    formData.append('file', file);
                    formData.append('caption', caption);
                    dispatch(upload_1.toggleUploadLoading());
                    return [4 /*yield*/, dispatch(auth_1.uploadPhoto(formData))];
                case 2:
                    _a.sent();
                    history.push("/home");
                    return [2 /*return*/];
            }
        });
    }); };
    var onClickCloseButtonHandler = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dispatch(upload_1.toggleDonePhotoEditing())];
                case 1:
                    _a.sent();
                    history.goBack();
                    return [2 /*return*/];
            }
        });
    }); };
    return (jsx_runtime_1.jsxs("div", __assign({ className: "share__photo__header" }, { children: [jsx_runtime_1.jsx("button", __assign({ className: "back__btn", onClick: onClickCloseButtonHandler }, { children: jsx_runtime_1.jsx("span", __assign({ style: { display: "inline-block", transform: "rotate(270deg)" } }, { children: jsx_runtime_1.jsx("svg", __assign({ "aria-label": "Back", className: "back__btn__svg", fill: "#262626", height: "24", viewBox: "0 0 48 48", width: "24" }, { children: jsx_runtime_1.jsx("path", { d: "M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z" }, void 0) }), void 0) }), void 0) }), void 0),
            jsx_runtime_1.jsx("p", { children: "New Post" }, void 0),
            jsx_runtime_1.jsx("button", __assign({ onClick: onClickNextButtonHandler, className: "next__btn" }, { children: "Share" }), void 0)] }), void 0));
}
exports.default = Header;
