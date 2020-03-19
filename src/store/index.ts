import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { counterReducer } from "./counter/reducers";
import { fetchReducer } from "./fetch/reducers";

const AppReducer = combineReducers({ counter: counterReducer, list: fetchReducer });

export default createStore(AppReducer, {}, applyMiddleware(thunk));

export type AppState = ReturnType<typeof AppReducer>;
