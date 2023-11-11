import { createSlice } from "@reduxjs/toolkit";
import navbarElements from "../../../enums/navbarElements";

const pageIndexSlice = createSlice({
  name: 'page-index',
  initialState: {
    value: navbarElements.Home
  },
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { change } = pageIndexSlice.actions;

export default pageIndexSlice.reducer;