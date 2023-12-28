import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import homeTabReducer from './display/homeTabSlice'
import cardsReducer from "./user/cards";
import transactionHistoryReducer from "./user/transactionHistory";
import navbarVisibilityReducer from "./display/navbarVisibilitySlice";
import themeReducer from "./display/themeSlice";
import pageReducer from "./display/pageSlice";
import accessTabReducer from "./display/accessTabSlice";
import mainInfoReducer from "./user/mainInfo";


const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({ 
  page: pageReducer,
  theme: themeReducer,
  accessTab: accessTabReducer,
  homeTab: homeTabReducer,
  navbarVisibility: navbarVisibilityReducer,
  cards: cardsReducer,
  transactionHistory: transactionHistoryReducer,
  mainInfo: mainInfoReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export const persistor = persistStore(store)