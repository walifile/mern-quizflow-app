import { combineReducers, configureStore } from "@reduxjs/toolkit";
import resultReducer from "./result_reducer";

/** call reducers */

const rootReducer = combineReducers({
  result: resultReducer,
});

/** create store with reducer */
export default configureStore({ reducer: rootReducer });
