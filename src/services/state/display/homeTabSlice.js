import { createSlice } from "@reduxjs/toolkit";
import navbarElements from '../../../pages/PersonalAccount/enums/navbarElements';

const homeTabSlice = createSlice({
  name: 'page-index',
  initialState: {
    index: navbarElements.Home
  },
  reducers: {
    changeHomeTab: (state, action) => {
      state.index = action.payload;
    }
  }
});

export const { changeHomeTab } = homeTabSlice.actions;

export default homeTabSlice.reducer;