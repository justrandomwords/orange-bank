import { createSlice } from "@reduxjs/toolkit";
import navbarElements from '../../../pages/PersonalAccount/enums/navbarElements';

const homeTabSlice = createSlice({
  name: 'page-index',
  initialState: {
    index: navbarElements.Home
  },
  reducers: {
    change: (state, action) => {
      state.index = action.payload;
    }
  }
});

export const { change } = homeTabSlice.actions;

export default homeTabSlice.reducer;