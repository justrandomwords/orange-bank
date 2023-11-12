import { createSlice } from "@reduxjs/toolkit";
import { themes } from "../../../enums/theme";


const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: localStorage.getItem('theme') || getPreferredTheme()
  },
  reducers: {
    setTheme: (state, action) => {
      state.value = action.payload;
      localStorage.setItem('theme', state.value)
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