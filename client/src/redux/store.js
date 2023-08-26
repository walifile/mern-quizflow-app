import { combineReducers, configureStore } from "@reduxjs/toolkit";
import resultReducer from "./result_reducer";
import questionReducer from "./question_reducer";

/** call reducers */

const rootReducer = combineReducers({
  result: resultReducer,
  questions: questionReducer,
});

/** create store with reducer */
export default configureStore({ reducer: rootReducer });
