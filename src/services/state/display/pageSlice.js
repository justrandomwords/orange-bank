import { createSlice } from "@reduxjs/toolkit";
import { pages } from "../../../enums/pages";

const page = createSlice({
  name: 'page',
  initialState: {
    index: pages.Main.id
  },
  reducers: {
    updatePage: (state, action) => {
      state.index = action.payload
      window.location.href = Object.values(pages)
        .find(page => page.id === state.index)
        .address
    }
  }
})

export const { updatePage } = page.actions;

export default page.reducer;