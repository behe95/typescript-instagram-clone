import reducers from "./reducers";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

const storeWithMiddleware = applyMiddleware(promiseMiddleware,thunk)(createStore);

// const store = storeWithMiddleware(
//     reducers
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ ()
// )

const store = storeWithMiddleware(reducers)

const persistor = persistStore(store);

export {
    store,
    persistor
}