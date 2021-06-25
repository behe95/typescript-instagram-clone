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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var TYPES = __importStar(require("../types"));
var initialState = {
    user: null,
    photos: []
};
function auth(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case TYPES.LOGOUT:
            return (__assign(__assign({}, state), { user: null }));
        case TYPES.GET_PROFILE_INFO:
            return (__assign(__assign({}, state), { user: __assign({}, action.payload) }));
        case TYPES.CHANGE_PROFILE_PHOTO:
            return (__assign(__assign({}, state), { user: __assign(__assign({}, state.user), action.payload) }));
        case TYPES.EDIT_PROFILE_INFO:
            return (__assign(__assign({}, state), { user: __assign(__assign({}, state.user), action.payload) }));
        case TYPES.GET_ALL_PHOTOS:
            return (__assign(__assign({}, state), { photos: __spreadArray([], action.payload) }));
        case TYPES.UPLOAD_PHOTO:
            return (__assign(__assign({}, state), { photos: __spreadArray(__spreadArray([], state.photos), [action.payload]) }));
        default:
            return state;
    }
}
exports.default = auth;
