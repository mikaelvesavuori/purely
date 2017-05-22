import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers/index";

// Extend the combined root reducer with redux-thunk middleware
export const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
