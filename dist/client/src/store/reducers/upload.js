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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var TYPES = __importStar(require("../types"));
var initialState = {
    selectedPhotoUpload: null,
    editedPhoto: null,
    donePhotoEditing: false,
    caption: "",
    filter: null,
    uploadLoading: false
};
function upload(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case TYPES.SELECT__UPLOAD__PHOTO:
            return (__assign(__assign({}, state), { selectedPhotoUpload: action.payload }));
        case TYPES.CLEAR__SELECT__UPLOAD__PHOTO:
            return (__assign({}, initialState));
        case TYPES.SET_EDITED_PHOTO:
            return (__assign(__assign({}, state), { editedPhoto: action.payload }));
        case TYPES.CLEAR_SET_EDITED_PHOTO:
            return (__assign(__assign({}, state), { editedPhoto: null }));
        case TYPES.TOGGOLE_DONE_PHOTO_EDITING:
            return (__assign(__assign({}, state), { donePhotoEditing: !state.donePhotoEditing }));
        case TYPES.PHOTO_CAPTION:
            return (__assign(__assign({}, state), { caption: action.payload }));
        case TYPES.SET_FILTER:
            return (__assign(__assign({}, state), { filter: action.payload }));
        case TYPES.TOGGLOE_UPLOAD_LOADING:
            return (__assign(__assign({}, state), { uploadLoading: !state.uploadLoading }));
        default:
            return state;
    }
}
exports.default = upload;
