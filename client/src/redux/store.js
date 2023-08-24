import { combineReducers, configureStore } from "@reduxjs/toolkit";

/** call reducers */

const rootReducer = combineReducers({});

/** create store with reducer */
export default configureStore({ reducer: rootReducer });
