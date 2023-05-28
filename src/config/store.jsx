//src/app/store.js

import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import userReducer from "../features/userSlice";

const reducers = combineReducers({
  userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whiteList: [userReducer],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
