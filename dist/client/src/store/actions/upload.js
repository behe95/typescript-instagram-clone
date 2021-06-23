"use strict";
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
exports.clearPhotoUpload = exports.photoUpload = void 0;
var TYPES = __importStar(require("../types"));
var photoUpload = function (file) { return function (dispatch) { return Promise.resolve().then(function () {
    console.log("DEEEEEEEEEEEEEEEEEE");
    dispatch({
        type: TYPES.SELECT__UPLOAD__PHOTO,
        payload: file
    });
    // return new Promise((resolve, reject) => resolve(null))
}); }; };
exports.photoUpload = photoUpload;
var clearPhotoUpload = function () { return function (dispatch) {
    console.log("ARRRRRRRRRRRRRRR");
    dispatch({
        type: TYPES.CLEAR__SELECT__UPLOAD__PHOTO
    });
}; };
exports.clearPhotoUpload = clearPhotoUpload;
