//src/app/store.js

import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import userReducer from '../features/userSlice'

const reducers = combineReducers({
  userReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whiteList: [userReducer],
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
  reducer: {
    user: userReducer,
    middleware: [thunk],
  },
})
