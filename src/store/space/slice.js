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
    fetchedSpaceDetails: (state, action) => {
      state.spaceDetails = action.payload;
    },
  },
});

export const { fetchedAllSpaces, fetchedSpaceDetails } = spaceSlice.actions;
export default spaceSlice.reducer;
