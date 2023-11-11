import { configureStore } from "@reduxjs/toolkit";
import pageIndexReducer from './pageIndex/pageIndexSlice'
import cardsReducer from "./user/cards";
import transactionHistoryReducer from "./user/transactionHistory";

export const store = configureStore({
    reducer: {
      pageIndex: pageIndexReducer,
      cards: cardsReducer,
      transactionHistory: transactionHistoryReducer
    }
});