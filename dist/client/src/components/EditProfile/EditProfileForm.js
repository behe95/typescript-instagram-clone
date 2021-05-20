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
var axios_1 = __importDefault(require("axios"));
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Auth_context_1 = require("../../contexts/Auth.context");
function EditProfileForm(props) {
    var history = react_router_dom_1.useHistory();
    var setUserInfo = Auth_context_1.useAuth().setUserInfo;
    // const [prfilePhotoFile, setProfilePhotoFile] = React.useState("");
    var profileChangeInputRef = react_1.default.useRef();
    var setShowGenderForm = props.setShowGenderForm, dispatch = props.dispatch, formValues = props.formValues;
    var onClickGenderInput = function (e) {
        e.preventDefault();
        setShowGenderForm(function (showGenderForm) { return !showGenderForm; });
    };
    console.log("RENDERING EDITPROFILE", formValues);
    var onSubmitHandler = function (e) {
        e.preventDefault();
        axios_1.default
            .post('/api/profile/edit', __assign({}, formValues), { withCredentials: true })
            .then(function (res) {
            setUserInfo(function (userInfo) { return (__assign(__assign({}, userInfo), formValues)); });
            if (res.status === 200)
                history.goBack();
        }).catch(function (err) {
            console.log(err);
        });
    };
    var onClickProfilePhotoChangeHandler = function (e) {
        e.preventDefault();
        profileChangeInputRef.current.click();
    };
    var onChangeProfilePhotoInputRef = function (e) {
        var formData = new FormData();
        formData.append('file', e.target.files[0]);
        console.log(formData);
        axios_1.default
            .post('/api/profile/changeProfilePhoto', formData, { withCredentials: true, headers: {
                "Contetnt-Type": "multipart/form-data"
            } })
            .then(function (res) {
            console.log(res);
            setUserInfo(function (userInfo) { return (__assign(__assign({}, userInfo), res.data.data)); });
            if (res.status === 200)
                history.goBack();
        }).catch(function (err) {
            console.log(err.response);
        });
    };
    return (jsx_runtime_1.jsxs("div", __assign({ className: "edit__profile__component__form" }, { children: [jsx_runtime_1.jsxs("div", __assign({ className: "edit__profile__component__form__photo" }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "left" }, { children: jsx_runtime_1.jsx("img", { src: formValues && formValues.profilePhoto && "" + formValues.profilePhoto.url, alt: "portrait" }, void 0) }), void 0),
                    jsx_runtime_1.jsxs("div", __assign({ className: "right" }, { children: [jsx_runtime_1.jsx("p", __assign({ className: "username" }, { children: "User name" }), void 0),
                            jsx_runtime_1.jsx("p", __assign({ onClick: function (e) { return onClickProfilePhotoChangeHandler(e); }, className: "change__photo" }, { children: "Change Profile Photo" }), void 0),
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
                                jsx_runtime_1.jsx("button", __assign({ className: "gender__button", onClick: function (e) { return onClickGenderInput(e); } }, { children: "Gender" }), void 0)] }), void 0),
                        jsx_runtime_1.jsxs("div", __assign({ className: "similar__account__suggestion" }, { children: [jsx_runtime_1.jsx("p", { children: "Similiar Account Suggestions" }, void 0),
                                jsx_runtime_1.jsxs("div", __assign({ className: "form-group" }, { children: [jsx_runtime_1.jsx("input", { checked: formValues.isSuggestSimilarAccount, onChange: function (e) { return dispatch({ type: 'formData', payload: e }); }, name: "isSuggestSimilarAccount", type: "checkbox" }, void 0),
                                        jsx_runtime_1.jsxs("label", __assign({ htmlFor: "checkbox" }, { children: ["Include your account when recommending similar accounts people might want to follow.", jsx_runtime_1.jsx("span", { children: "[?]" }, void 0)] }), void 0)] }), void 0)] }), void 0),
                        jsx_runtime_1.jsxs("div", __assign({ className: "submit__section" }, { children: [jsx_runtime_1.jsx("button", __assign({ onClick: function (e) { return onSubmitHandler(e); }, className: "btn-sm btn-primary btn" }, { children: "Submit" }), void 0),
                                jsx_runtime_1.jsx("p", { children: "Temporarily disable my account" }, void 0)] }), void 0)] }), void 0) }), void 0)] }), void 0));
}
exports.default = EditProfileForm;
