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
var react_1 = __importDefault(require("react"));
var Auth_context_1 = require("../../contexts/Auth.context");
var formValidators_1 = require("../../utils/formValidators");
var initialState = {
    fullName: "",
    username: "",
    email: "",
    website: "",
    bio: "",
    phone: "",
    gender: "",
    isSuggestSimilarAccount: false
};
function reducer(state, action) {
    var _a, _b;
    switch (action.type) {
        case 'gender':
            return __assign(__assign({}, state), { gender: action.payload.target.value });
        case 'formData':
            if (action.payload.target.name === "isSuggestSimilarAccount") {
                return __assign(__assign({}, state), (_a = {}, _a[action.payload.target.name] = action.payload.target.checked, _a));
            }
            return __assign(__assign({}, state), (_b = {}, _b[action.payload.target.name] = action.payload.target.value, _b));
        case 'initState':
            return __assign(__assign({}, state), action.payload);
        default:
            return state;
    }
}
function useForm() {
    var _a = react_1.default.useReducer(reducer, initialState), state = _a[0], dispatch = _a[1];
    var userInfo = Auth_context_1.useAuth().userInfo;
    react_1.default.useEffect(function () {
        var info;
        console.log("RENDERINGGGG");
        if (Object.keys(userInfo).length > 5) {
            info = __assign({}, userInfo);
        }
        else {
            info = {
                username: userInfo.username,
                fullName: userInfo.fullName
            };
        }
        if (formValidators_1.validateNumber(userInfo.user)) {
            info = __assign(__assign({}, info), { phone: userInfo.user });
        }
        else if (formValidators_1.validateEmail(userInfo.user)) {
            info = __assign(__assign({}, info), { email: userInfo.user });
        }
        dispatch({ type: "initState", payload: info });
    }, [userInfo]);
    return [state, dispatch];
}
exports.default = useForm;
