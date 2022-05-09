import { createStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";


// this 2nd parameter is a redux devtool extension -
// https://github.com/zalmoxisus/redux-devtools-extension

const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
