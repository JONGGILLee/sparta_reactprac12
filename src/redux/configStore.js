import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import bucket from "./modules/bucket";
// import bucket22 from "./modules/bucket";

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ bucket });
// const rootReducer = combineReducers({ bucket, bucket22 });

const store = createStore(rootReducer, enhancer);

export default store;

// 스토어 만들기 끝!!!
