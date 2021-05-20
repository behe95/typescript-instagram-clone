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
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
exports.default = react_1.default.memo(function EditPhoto(_a) {
    var editValues = _a.editValues;
    var selectedPhotoUpload = react_redux_1.useSelector(function (state) { return state.upload; }).selectedPhotoUpload;
    var canvasRef = react_1.default.useRef();
    react_1.default.useEffect(function () {
        var img = new Image();
        var reader = new FileReader();
        reader.readAsDataURL(selectedPhotoUpload);
        // reader.addEventListener('load', () => {
        //     const ctx = canvasRef.current.getContext('2d');
        //     img.src = reader.result as string;
        //     img.onload = function(){
        //         img.height = canvasRef.current.height;
        //         img.width = canvasRef.current.width;
        //         ctx!.imageSmoothingEnabled = false;
        //         ctx?.drawImage(img, 0, 0, img.width, img.height);
        //     }
        // })
        reader.addEventListener('load', function () {
            var ctx = canvasRef.current.getContext('2d');
            img.src = reader.result;
            img.onload = function () {
                var measure = document.getElementById('measure');
                measure === null || measure === void 0 ? void 0 : measure.appendChild(img);
                var wrh = img.width / img.height;
                var newWidth = canvasRef.current.width;
                var newHeight = newWidth / wrh;
                if (newHeight > canvasRef.current.height) {
                    newHeight = canvasRef.current.height;
                    newWidth = newHeight * wrh;
                }
                var xOffset = newWidth < canvasRef.current.width ? ((canvasRef.current.width - newWidth) / 2) : 0;
                var yOffset = newHeight < canvasRef.current.height ? ((canvasRef.current.height - newHeight) / 2) : 0;
                ctx.filter = "brightness(" + editValues.brightness + "%)";
                ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(img, xOffset, yOffset, newWidth, newHeight);
            };
        });
        console.log(editValues);
    }, [editValues]);
    return (jsx_runtime_1.jsxs("div", __assign({ id: "canvas__holder" }, { children: [jsx_runtime_1.jsx("canvas", { height: "1080", width: "1080", ref: canvasRef, style: {
                    width: "320px",
                    height: "320px",
                } }, void 0),
            jsx_runtime_1.jsx("div", { style: { position: "absolute", left: "-10000px", top: "-100000px" }, id: "measure" }, void 0)] }), void 0));
});
