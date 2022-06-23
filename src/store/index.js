import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import spaceReducer from "./space/slice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    space: spaceReducer,
  },
});
