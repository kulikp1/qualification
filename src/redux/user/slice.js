import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState.js";
import {
  getUserData,
  getUsersAmount,
  logIn,
  logInWithGoogle,
  logOut,
  refreshToken,
  refreshUser,
  register,
  updateUserAvatar,
  updateUserData,
} from "./operations.js";

const handlePendingIsLoggedIn = (state) => {
  state.isLoggedIn = false;
  state.error = null;
  state.loadingTracker = true;
};

// register logIn logInWithGoogle
const handleRejectedIsLoggedIn = (state, action) => {
  state.token = null;
  state.isLoggedIn = false;
  state.loadingTracker = false;
  state.error = action.payload;
};

// logOut
const handlePendingAuth = (state) => {
  state.loadingTracker = true;
  state.error = null;
};

// logOut
const handleRejectedAuth = (state, action) => {
  state.loadingTracker = false;
  state.error = action.payload;
};

// getUserData updateUserAvatar updateUserData
const handlePendingUser = (state) => {
  state.loadingUser = true;
  state.error = null;
};

// getUserData updateUserAvatar updateUserData
const handleRejectedUser = (state, action) => {
  state.loadingUser = false;
  state.loadingTracker = false;
  state.error = action.payload;
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState.user,
  reducers: {
    resetToken: (state, action) => {
      state.token = action.payload;
    },
    logoutAction: (state) => {
      state.userData = initialState.user.userData;
      state.token = null;
      state.isLoggedIn = false;
      state.loadingTracker = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, handlePendingIsLoggedIn)
      .addCase(register.fulfilled, (state, action) => {
        state.token = action.payload.data.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, handleRejectedIsLoggedIn)
      .addCase(logIn.pending, handlePendingIsLoggedIn)
      .addCase(logIn.fulfilled, (state, action) => {
        state.token = action.payload.data.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, handleRejectedIsLoggedIn)
      .addCase(logOut.pending, handlePendingAuth)
      .addCase(logOut.fulfilled, (state) => {
        state.userData = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
        state.loadingTracker = false;
      })
      .addCase(logOut.rejected, handleRejectedAuth)
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.loadingTracker = true;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.userData = { ...state.userData, ...action.payload.data };
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.token = null;
        state.isRefreshing = false;
        state.loadingTracker = false;
        state.error = action.payload;
      })
      .addCase(getUserData.pending, handlePendingUser)
      .addCase(getUserData.fulfilled, (state, action) => {
        state.userData = action.payload.data;
        state.loadingUser = false;
        state.loadingTracker = false;
      })
      .addCase(getUserData.rejected, handleRejectedUser)
      .addCase(updateUserAvatar.pending, handlePendingUser)
      .addCase(updateUserAvatar.fulfilled, (state, action) => {
        state.userData.photo = action.payload.data.photo;
        state.loadingUser = false;
      })
      .addCase(updateUserAvatar.rejected, handleRejectedUser)
      .addCase(updateUserData.pending, handlePendingUser)
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.userData = {
          ...state.userData,
          ...action.payload.data,
        };
        state.loadingUser = false;
      })
      .addCase(updateUserData.rejected, handleRejectedUser)
      .addCase(logInWithGoogle.pending, handlePendingIsLoggedIn)
      .addCase(logInWithGoogle.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.loadingTracker = true;
      })
      .addCase(logInWithGoogle.rejected, handleRejectedIsLoggedIn)
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.token = action.payload;
      })
      .addCase(getUsersAmount.pending, handlePendingAuth)
      .addCase(getUsersAmount.fulfilled, (state, action) => {
        state.totalAmount = action.payload.count;
        state.loadingTracker = false;
      })
      .addCase(getUsersAmount.rejected, handleRejectedAuth),
});

export const { resetToken, logoutAction } = userSlice.actions;
export default userSlice.reducer;