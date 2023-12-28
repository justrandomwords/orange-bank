import { createSlice } from "@reduxjs/toolkit";
import { themes } from "../../../enums/theme";


const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: getPreferredTheme()
  },
  reducers: {
    setTheme: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;

function getPreferredTheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return themes.dark;
  } else {
    return themes.light;
  }
} 