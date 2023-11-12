import { configureStore } from "@reduxjs/toolkit";
import pageIndexReducer from './display/pageIndexSlice'
import cardsReducer from "./user/cards";
import transactionHistoryReducer from "./user/transactionHistory";
import navbarVisibilityReducer from "./display/navbarVisibilitySlice";
import themeReducer from "./display/themeSlice";


export const store = configureStore({
    reducer: {
      pageIndex: pageIndexReducer,
      cards: cardsReducer,
      transactionHistory: transactionHistoryReducer,
      navbarVisibility: navbarVisibilityReducer,
      theme: themeReducer
    }
});