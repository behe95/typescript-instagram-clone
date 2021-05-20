"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_persist_1 = require("redux-persist");
var storage_1 = __importDefault(require("redux-persist/lib/storage"));
var upload_1 = __importDefault(require("./upload"));
var persistConfig = {
    key: 'root',
    storage: storage_1.default,
    whitelist: ['upload']
};
var reducers = redux_1.combineReducers({
    upload: upload_1.default
});
exports.default = redux_persist_1.persistReducer(persistConfig, reducers);
