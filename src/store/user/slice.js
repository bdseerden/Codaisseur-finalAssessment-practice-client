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
      state.user.profile.space.stories = state.space.stories.filter(
        (s) => s.id !== storyId
      );
    },
  },
});

export const { loginSuccess, logOut, tokenStillValid, storyDeleteSuccess } =
  userSlice.actions;

export default userSlice.reducer;
