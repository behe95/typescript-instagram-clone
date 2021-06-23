import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import upload from "./upload";
import auth from "./auth";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['upload', 'auth']
};


const reducers = combineReducers({
    upload,
    auth
});


export default persistReducer<any, any>(persistConfig, reducers);

export type RootState = ReturnType<typeof reducers>