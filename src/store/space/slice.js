// src/store/something/slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = { allSpaces: [], spaceDetails: null };

export const spaceSlice = createSlice({
  name: "space",
  initialState,
  reducers: {
    fetchedAllSpaces: (state, action) => {
      state.allSpaces = [...action.payload];
    },
  },
});

export const { fetchedAllSpaces } = spaceSlice.actions;
export default spaceSlice.reducer;
