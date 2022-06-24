export const selectToken = (state) => state.user.token;

export const selectUser = (state) => state.user.profile;

export const selectMySpace = (state) =>
  state.user.profile ? state.user.profile.space : null;
