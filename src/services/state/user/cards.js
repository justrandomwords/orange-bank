import { createSlice } from "@reduxjs/toolkit";

const cadrsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: []
  },
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
    }
  }
})

export const { setCards } = cadrsSlice.actions;

export default cadrsSlice.reducer;