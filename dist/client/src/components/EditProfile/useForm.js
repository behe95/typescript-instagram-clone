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
var react_redux_1 = require("react-redux");
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
            // console.log(action.payload);
            return __assign(__assign({}, state), action.payload);
        default:
            return state;
    }
}
function useForm() {
    var userProfileInfo = react_redux_1.useSelector(function (state) { return state.auth; }).user;
    var _a = react_1.default.useReducer(reducer, userProfileInfo), state = _a[0], dispatch = _a[1];
    // const {userInfo} = useAuth();
    // React.useEffect(() => {
    //     let info:initialStateTypes;
    //     // console.log("RENDERINGGGG");
    //     if(Object.keys(userInfo).length > 5){
    //         info = {
    //             ...userInfo
    //         }
    //     }else{
    //         info = {
    //             username: userInfo.username,
    //             fullName: userInfo.fullName
    //         }
    //     }
    //     if(validateNumber(userInfo.user)){
    //         info = {
    //             ...info,
    //             phone: userInfo.user
    //         }
    //     }else if(validateEmail(userInfo.user)){
    //         info = {
    //             ...info,
    //             email: userInfo.user
    //         }
    //     }
    //     dispatch({type:"initState", payload: info})
    // },[userInfo])
    return [state, dispatch];
}
exports.default = useForm;
