export const selectIsLoggedIn = (state) => state.user.isLoggedIn;

export const selectUser = (state) => state.user.userData;

export const selectAuth = (state) => state.user;

export const selectIsRefreshing = (state) => state.user.isRefreshing;

export const selectLoadingUser = (state) => state.user.loadingUser;

export const selectLoadingAuth = (state) => state.user.loadingAuth;

export const selectLoadingTracker = (state) => state.user.loadingTracker;

export const selectError = (state) => state.user.error;

export const selectTotalAmount = (state) => state.user.totalAmount;