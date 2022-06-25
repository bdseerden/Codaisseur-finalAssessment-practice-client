import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  profile: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.user;
    },
    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
      state.space = action.payload.space;
    },
    storyDeleteSuccess: (state, action) => {
      const storyId = action.payload;
      state.profile.space.stories = state.profile.space.stories.filter(
        (s) => s.id !== storyId
      );
    },
    storyPostSuccess: (state, action) => {
      state.profile.space.stories.push(action.payload);
    },
  },
});

export const {
  loginSuccess,
  logOut,
  tokenStillValid,
  storyDeleteSuccess,
  storyPostSuccess,
} = userSlice.actions;

export default userSlice.reducer;
