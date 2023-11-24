import { configureStore } from "@reduxjs/toolkit";
import homeTabReducer from './display/homeTabSlice'
import cardsReducer from "./user/cards";
import transactionHistoryReducer from "./user/transactionHistory";
import navbarVisibilityReducer from "./display/navbarVisibilitySlice";
import themeReducer from "./display/themeSlice";
import pageReducer from "./display/pageSlice";
import accessTabReducer from "./display/accessTabSlice";


export const store = configureStore({
    reducer: {
      page: pageReducer,
      theme: themeReducer,
      accessTab: accessTabReducer,
      homeTab: homeTabReducer,
      navbarVisibility: navbarVisibilityReducer,
      cards: cardsReducer,
      transactionHistory: transactionHistoryReducer,
    }
});