import { createSlice } from "@reduxjs/toolkit";

const mainInfoSlice = createSlice({
  name: 'mainInfo',
  initialState: {
    fullName: undefined,
  },
  reducers: {
    setFullName: (state, action) => {
      state.fullName = action.payload;
    }
  }
})

export const { setFullName } = mainInfoSlice.actions;

export default mainInfoSlice.reducer;