"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.persistor = exports.store = void 0;
var reducers_1 = __importDefault(require("./reducers"));
var redux_1 = require("redux");
var redux_promise_1 = __importDefault(require("redux-promise"));
var redux_thunk_1 = __importDefault(require("redux-thunk"));
var redux_persist_1 = require("redux-persist");
var storeWithMiddleware = redux_1.applyMiddleware(redux_promise_1.default, redux_thunk_1.default)(redux_1.createStore);
// const store = storeWithMiddleware(
//     reducers
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ ()
// )
var store = storeWithMiddleware(reducers_1.default);
exports.store = store;
var persistor = redux_persist_1.persistStore(store);
exports.persistor = persistor;
