import changeTheNumber from "./upDown";
// this is needed for the redux - combineReducers
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber
});

export default rootReducer;