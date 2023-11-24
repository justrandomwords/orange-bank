import { createSlice } from "@reduxjs/toolkit";

const accessTab = createSlice({
  name: 'accessTab',
  initialState: {
    isLogin: true,
  },
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    }
  },
})

export const { setIsLogin } = accessTab.actions;

export default accessTab.reducer;