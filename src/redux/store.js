import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import persistStore from "redux-persist/es/persistStore";


const middleware = [thunk];
export const store = createStore( rootReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);
