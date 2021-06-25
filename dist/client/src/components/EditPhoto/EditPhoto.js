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
exports.dataUrlToFile = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
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
function getImage(dataUrl) {
    return new Promise(function (resolve, reject) {
        var image = new Image();
        image.src = dataUrl;
        image.onload = function () {
            resolve(image);
        };
        // image.onerror = (el: any, err: ErrorEvent) => {
        //     reject(err.error);
        // };
    });
}
function downscaleImage(dataUrl, imageType, resolution, quality) {
    return __awaiter(this, void 0, void 0, function () {
        var image, oldWidth, oldHeight, longestDimension, currentRes, newSize, newWidth, newHeight, canvas, ctx, newDataUrl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getImage(dataUrl)];
                case 1:
                    image = _a.sent();
                    oldWidth = image.naturalWidth;
                    oldHeight = image.naturalHeight;
                    console.log('dims', oldWidth, oldHeight);
                    longestDimension = oldWidth > oldHeight ? 'width' : 'height';
                    currentRes = longestDimension == 'width' ? oldWidth : oldHeight;
                    console.log('longest dim', longestDimension, currentRes);
                    if (currentRes > resolution) {
                        console.log('need to resize...');
                        newSize = longestDimension == 'width'
                            ? Math.floor(oldHeight / oldWidth * resolution)
                            : Math.floor(oldWidth / oldHeight * resolution);
                        newWidth = longestDimension == 'width' ? resolution : newSize;
                        newHeight = longestDimension == 'height' ? resolution : newSize;
                        console.log('new width / height', newWidth, newHeight);
                        canvas = document.createElement('canvas');
                        canvas.width = newWidth;
                        canvas.height = newHeight;
                        ctx = canvas.getContext('2d');
                        ctx.drawImage(image, 0, 0, newWidth, newHeight);
                        newDataUrl = canvas.toDataURL(imageType, quality);
                        return [2 /*return*/, newDataUrl];
                    }
                    else {
                        return [2 /*return*/, dataUrl];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = react_1.default.memo(function EditPhoto(_a) {
    var editValues = _a.editValues;
    var _b = react_redux_1.useSelector(function (state) { return state.upload; }), selectedPhotoUpload = _b.selectedPhotoUpload, donePhotoEditing = _b.donePhotoEditing, selectedPhotoFilter = _b.filter;
    var canvasRef = react_1.default.useRef();
    var _c = react_1.default.useState({}), photoFile = _c[0], setPhotoFile = _c[1];
    // const [photoProcessingLoading, setPhotoProcessingLoading] = React.useState(false);
    var _d = react_1.default.useState({}), editedPhoto = _d[0], setEditedPhoto = _d[1];
    var _e = react_1.default.useState(false), imageLoaded = _e[0], setImageLoaded = _e[1];
    var history = react_router_dom_1.useHistory();
    var dispatch = react_redux_1.useDispatch();
    react_1.default.useEffect(function () {
        (function () {
            return __awaiter(this, void 0, void 0, function () {
                var file;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, dataUrlToFile(selectedPhotoUpload, "image")];
                        case 1:
                            file = _a.sent();
                            console.log(file);
                            setPhotoFile(file);
                            return [2 /*return*/];
                    }
                });
            });
        }());
        return function () { return setPhotoFile({}); };
    }, []);
    react_1.default.useEffect(function () {
        (function () {
            return __awaiter(this, void 0, void 0, function () {
                var dataUrl;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!imageLoaded) return [3 /*break*/, 2];
                            dataUrl = canvasRef.current.toDataURL();
                            return [4 /*yield*/, downscaleImage(dataUrl, 'image/png', 480, 0.9)];
                        case 1:
                            dataUrl = _a.sent();
                            dispatch(upload_1.photoUpload(dataUrl));
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        })();
    }, [donePhotoEditing]);
    console.log(canvasRef);
    react_1.default.useEffect(function () {
        if (!photoFile.name)
            return;
        var img = new Image();
        var reader = new FileReader();
        reader.readAsDataURL(photoFile);
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
        var draw = function () {
            if (!imageLoaded)
                setImageLoaded(function (b) { return true; });
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
                if (selectedPhotoFilter) {
                    ctx.filter = "brightness(" + editValues.brightness + "%) contrast(" + editValues.contrast + "%) saturate(" + editValues.saturation + "%) " + selectedPhotoFilter;
                }
                else {
                    ctx.filter = "brightness(" + editValues.brightness + "%) contrast(" + editValues.contrast + "%) saturate(" + editValues.saturation + "%)";
                }
                console.log(selectedPhotoFilter);
                ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(img, xOffset, yOffset, newWidth, newHeight);
            };
            //   canvasRef.current.toBlob(function(blob){
            //       // setEditedPhoto(blob as Blob);
            //       dispatch(setEditedPhoto(blob))
            //   }, 'image/jpeg', 1)
        };
        reader.addEventListener('load', draw);
        // console.log(editedPhoto);
        return function () {
            reader.removeEventListener("load", draw);
        };
    }, [editValues, photoFile, selectedPhotoFilter]);
    // if(donePhotoEditing){
    //     return (
    //         <div className="spinner spinner-sm" role="status">
    //             <span className="sr-only">Loading...</span>
    //         </div>            
    //     )
    // }
    return (jsx_runtime_1.jsxs("div", __assign({ id: "canvas__holder" }, { children: [jsx_runtime_1.jsx("canvas", { height: "1080", width: "1080", ref: canvasRef, style: {
                    width: "320px",
                    height: "320px",
                } }, void 0),
            jsx_runtime_1.jsx("div", { style: { position: "absolute", left: "-10000px", top: "-100000px" }, id: "measure" }, void 0)] }), void 0));
});
