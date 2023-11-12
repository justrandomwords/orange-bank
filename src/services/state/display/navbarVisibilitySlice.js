import { createSlice } from "@reduxjs/toolkit";

export const navbarVisibilitySlice = createSlice({
  name: 'navbar-visibility',
  initialState: {
    isShown: false
  },
  reducers: {
    invertNavbarVisibility: (state) => {
      state.isShown = !state.isShown;
    }
  }
})

export const { invertNavbarVisibility } = navbarVisibilitySlice.actions;

export default navbarVisibilitySlice.reducer;