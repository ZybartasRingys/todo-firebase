//src/app/store.js

import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import userSlice from "../features/userSlice";

const reducers = combineReducers({
  userSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["userSlice"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
