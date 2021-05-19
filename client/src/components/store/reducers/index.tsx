import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import upload from "./upload";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['upload']
};


const reducers = combineReducers({
    upload
});


export default persistReducer<any, any>(persistConfig, reducers);

export type RootState = ReturnType<typeof reducers>