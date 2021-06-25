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
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var auth_1 = require("../../store/actions/auth");
var notistack_1 = require("notistack");
function EditProfileForm(props) {
    var _this = this;
    var _a;
    var history = react_router_dom_1.useHistory();
    // const {setUserInfo} = useAuth();
    // const [prfilePhotoFile, setProfilePhotoFile] = React.useState("");
    var dispatchAction = react_redux_1.useDispatch();
    var enqueueSnackbar = notistack_1.useSnackbar().enqueueSnackbar;
    var userProfileInfo = react_redux_1.useSelector(function (state) { return state.auth; }).user;
    var profileChangeInputRef = react_1.default.useRef();
    var _b = react_1.default.useState(false), changeProfilePhotoLoading = _b[0], setChangeProfilePhotoLoading = _b[1];
    var _c = react_1.default.useState(false), editProfileInfoLoading = _c[0], setEditProfileInfoLoading = _c[1];
    var setShowGenderForm = props.setShowGenderForm, dispatch = props.dispatch, formValues = props.formValues;
    var onClickGenderInput = function (e) {
        e.preventDefault();
        setShowGenderForm(function (showGenderForm) { return !showGenderForm; });
    };
    // console.log("RENDERING EDITPROFILE",formValues);
    var onSubmitHandler = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setEditProfileInfoLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, dispatchAction(auth_1.editProfileInfo(formValues))];
                case 2:
                    _a.sent();
                    enqueueSnackbar("Profile updated", { variant: 'success' });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log("USER PROFILE EDIT ===================== ", error_1);
                    return [3 /*break*/, 4];
                case 4:
                    setEditProfileInfoLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var onClickProfilePhotoChangeHandler = function (e) {
        e.preventDefault();
        profileChangeInputRef.current.click();
    };
    var onChangeProfilePhotoInputRef = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var formData, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    formData = new FormData();
                    formData.append('file', e.target.files[0]);
                    // console.log(formData);
                    setChangeProfilePhotoLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, dispatchAction(auth_1.changeProfilePhoto(formData))];
                case 2:
                    _a.sent();
                    enqueueSnackbar("Profile updated", { variant: 'success' });
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.log("USER PROFILE PHOTO CHANGE ===================== ", error_2);
                    return [3 /*break*/, 4];
                case 4:
                    setChangeProfilePhotoLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return (jsx_runtime_1.jsxs("div", __assign({ className: "edit__profile__component__form" }, { children: [jsx_runtime_1.jsxs("div", __assign({ className: "edit__profile__component__form__photo" }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "left" }, { children: jsx_runtime_1.jsx("img", { src: (_a = userProfileInfo === null || userProfileInfo === void 0 ? void 0 : userProfileInfo.profilePhoto) === null || _a === void 0 ? void 0 : _a.url, alt: "portrait" }, void 0) }), void 0),
                    jsx_runtime_1.jsxs("div", __assign({ className: "right" }, { children: [jsx_runtime_1.jsx("p", __assign({ className: "username" }, { children: "User name" }), void 0),
                            changeProfilePhotoLoading ?
                                jsx_runtime_1.jsx("div", __assign({ className: "spinner-grow spinner-grow-sm", role: "status" }, { children: jsx_runtime_1.jsx("span", __assign({ className: "sr-only" }, { children: "Loading..." }), void 0) }), void 0)
                                :
                                    jsx_runtime_1.jsx("p", __assign({ style: { cursor: "pointer" }, onClick: function (e) { return onClickProfilePhotoChangeHandler(e); }, className: "change__photo" }, { children: "Change Profile Photo" }), void 0),
                            jsx_runtime_1.jsx("input", { onChange: function (e) { return onChangeProfilePhotoInputRef(e); }, ref: profileChangeInputRef, type: "file", className: "d-none" }, void 0)] }), void 0)] }), void 0),
            jsx_runtime_1.jsx("div", __assign({ className: "user__info" }, { children: jsx_runtime_1.jsxs("form", __assign({ className: "user__info__form" }, { children: [jsx_runtime_1.jsxs("div", __assign({ className: "form-group" }, { children: [jsx_runtime_1.jsx("label", __assign({ htmlFor: "name" }, { children: "Name" }), void 0),
                                jsx_runtime_1.jsx("input", { value: formValues.fullName, onChange: function (e) { return dispatch({ type: 'formData', payload: e }); }, name: "fullName", type: "text", placeholder: "Name", className: "form-control" }, void 0)] }), void 0),
                        jsx_runtime_1.jsxs("div", { children: [jsx_runtime_1.jsx("p", { children: "Hello people disconver your account by using the name you're known by: either your full name or business name." }, void 0),
                                jsx_runtime_1.jsx("p", __assign({ style: { marginTop: "15px" } }, { children: "You can only change your name twice within 14 days" }), void 0)] }, void 0),
                        jsx_runtime_1.jsxs("div", __assign({ className: "form-group" }, { children: [jsx_runtime_1.jsx("label", __assign({ htmlFor: "username" }, { children: "Username" }), void 0),
                                jsx_runtime_1.jsx("input", { value: formValues.username, onChange: function (e) { return dispatch({ type: 'formData', payload: e }); }, name: "username", type: "text", placeholder: "Username", className: "form-control" }, void 0)] }), void 0),
                        jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsxs("p", { children: ["In most cases, you'll be able to change your username back to \"USERNAME\" for another 14 days", jsx_runtime_1.jsx("span", __assign({ className: "learn__more" }, { children: "Learn more" }), void 0)] }, void 0) }, void 0),
                        jsx_runtime_1.jsxs("div", __assign({ className: "form-group" }, { children: [jsx_runtime_1.jsx("label", __assign({ htmlFor: "Website" }, { children: "Website" }), void 0),
                                jsx_runtime_1.jsx("input", { value: formValues.website, onChange: function (e) { return dispatch({ type: 'formData', payload: e }); }, name: "website", type: "text", placeholder: "Website", className: "form-control" }, void 0)] }), void 0),
                        jsx_runtime_1.jsxs("div", __assign({ className: "form-group" }, { children: [jsx_runtime_1.jsx("label", __assign({ htmlFor: "bio" }, { children: "Bio" }), void 0),
                                jsx_runtime_1.jsx("textarea", { value: formValues.bio, onChange: function (e) { return dispatch({ type: 'formData', payload: e }); }, name: "bio", style: { width: "100%", border: "1px solid #ced4da", borderRadius: ".25rem" }, rows: 3 }, void 0)] }), void 0),
                        jsx_runtime_1.jsxs("div", { children: [jsx_runtime_1.jsx("p", __assign({ className: "personal__information" }, { children: "Personal Information" }), void 0),
                                jsx_runtime_1.jsx("p", { children: "Provide your personal information, even if the account is used for business, a pet or something else. This won't be a part of your public profile." }, void 0)] }, void 0),
                        jsx_runtime_1.jsxs("div", __assign({ className: "form-group" }, { children: [jsx_runtime_1.jsx("label", __assign({ htmlFor: "email" }, { children: "Email" }), void 0),
                                jsx_runtime_1.jsx("input", { value: formValues.email, onChange: function (e) { return dispatch({ type: 'formData', payload: e }); }, name: "email", type: "text", placeholder: "Email", className: "form-control" }, void 0)] }), void 0),
                        jsx_runtime_1.jsxs("div", __assign({ className: "form-group" }, { children: [jsx_runtime_1.jsx("label", __assign({ htmlFor: "phone" }, { children: "Phone Number" }), void 0),
                                jsx_runtime_1.jsx("input", { value: formValues.phone, onChange: function (e) { return dispatch({ type: 'formData', payload: e }); }, name: "phone", type: "text", placeholder: "Phone Number", className: "form-control" }, void 0)] }), void 0),
                        jsx_runtime_1.jsxs("div", __assign({ className: "form-group" }, { children: [jsx_runtime_1.jsx("label", __assign({ htmlFor: "gender" }, { children: "Gender" }), void 0),
                                jsx_runtime_1.jsx("button", __assign({ className: "gender__button", onClick: function (e) { return onClickGenderInput(e); } }, { children: formValues === null || formValues === void 0 ? void 0 : formValues.gender }), void 0)] }), void 0),
                        jsx_runtime_1.jsxs("div", __assign({ className: "similar__account__suggestion" }, { children: [jsx_runtime_1.jsx("p", { children: "Similiar Account Suggestions" }, void 0),
                                jsx_runtime_1.jsxs("div", __assign({ className: "form-group" }, { children: [jsx_runtime_1.jsx("input", { checked: formValues.isSuggestSimilarAccount, onChange: function (e) { return dispatch({ type: 'formData', payload: e }); }, name: "isSuggestSimilarAccount", type: "checkbox" }, void 0),
                                        jsx_runtime_1.jsxs("label", __assign({ htmlFor: "checkbox" }, { children: ["Include your account when recommending similar accounts people might want to follow.", jsx_runtime_1.jsx("span", { children: "[?]" }, void 0)] }), void 0)] }), void 0)] }), void 0),
                        jsx_runtime_1.jsxs("div", __assign({ className: "submit__section" }, { children: [editProfileInfoLoading ?
                                    jsx_runtime_1.jsx("div", __assign({ className: "spinner-grow spinner-grow-sm", role: "status" }, { children: jsx_runtime_1.jsx("span", __assign({ className: "sr-only" }, { children: "Loading..." }), void 0) }), void 0)
                                    :
                                        jsx_runtime_1.jsx("button", __assign({ onClick: function (e) { return onSubmitHandler(e); }, className: "btn-sm btn-primary btn" }, { children: "Submit" }), void 0),
                                jsx_runtime_1.jsx("p", { children: "Temporarily disable my account" }, void 0)] }), void 0)] }), void 0) }), void 0)] }), void 0));
}
exports.default = EditProfileForm;
