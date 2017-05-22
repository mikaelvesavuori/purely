import { combineReducers } from "redux";

// Import all reducers
import counterReducer from "../components/Counter/counterReducer";

// Create root reducer from all other reducers
export const rootReducer = combineReducers({counterReducer});

export default rootReducer;
