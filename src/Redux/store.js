import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';

import { rootReducer } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
