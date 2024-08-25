import { combineReducers } from "redux";
import hobbyReducer from "./hobby";
// import { useReducer } from "react";

const rootReducer = combineReducers({
    hobby: hobbyReducer
    // user: useReducer,
});

export default rootReducer;