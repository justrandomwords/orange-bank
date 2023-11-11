import { createSlice } from "@reduxjs/toolkit";

const transactionHistorySlice = createSlice({
  name: 'transaction-history',
  initialState: {
    transactionHistory: []
  },
  reducers: {
    setTransactionHistory: (state, action) => {
      state.transactionHistory = action.payload;
    }
  }
})

export const { setTransactionHistory } = transactionHistorySlice.actions;

export default transactionHistorySlice.reducer;