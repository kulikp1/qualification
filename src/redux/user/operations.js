import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  setAuthHeader,
  clearAuthHeader,
  axiosInstance,
} from "../../services/api.js";

// Операція для реєстрації користувача
export const register = createAsyncThunk(
  "user/register",
  async (userData, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/auth/register", userData);
      setAuthHeader(response.data.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

// Операція для логіну користувача
export const logIn = createAsyncThunk(
  "user/login",
  async (userData, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/auth/login", userData, {
        withCredentials: true,
      });
      setAuthHeader(response.data.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

// Операція для логауту користувача
export const logOut = createAsyncThunk("user/logout", async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.post("/auth/logout");
    clearAuthHeader();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.status);
  }
});

// Операція для оновлення доступу користувача
export const refreshUser = createAsyncThunk(
  "user/refresh",
  async (_, thunkAPI) => {
    try {
      const reduxState = thunkAPI.getState();
      const token = reduxState.user.token;

      setAuthHeader(token);

      const response = await axiosInstance.get("/users/data");

      return response.data;
    } catch (error) {
      clearAuthHeader();
      console.error("Error refreshing user:", error);
      return thunkAPI.rejectWithValue(error.response.status);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      const savedToken = reduxState.user.token;
      return savedToken !== null;
    },
  }
);

// Операція для отримання інформації про поточного користувача
export const getUserData = createAsyncThunk(
  "user/getUserData",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/users/data");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Операція для зміни інформації про користувача
export const updateUserData = createAsyncThunk(
  "user/updateUserData",
  async (userDataToUpdate, thunkAPI) => {
    try {
      const response = await axiosInstance.patch(
        `/users/update`,
        userDataToUpdate
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Операція для зміни аватару користувача
export const updateUserAvatar = createAsyncThunk(
  "user/updateAvatar",
  async (newAvatar, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("photo", newAvatar);

      const response = await axiosInstance.patch("/users/photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logInWithGoogle = createAsyncThunk(
  "user/logInWithGoogle",
  async (code, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        "/auth/google/confirm-google-auth",
        {
          code,
        }
      );
      const { accessToken, user } = response.data.data;
      setAuthHeader(accessToken);
      localStorage.setItem("accessToken", accessToken);
      return { accessToken, user };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// для зміни паролю користувача
export const sendResetPassword = createAsyncThunk(
  "user/resetPassword",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/users/send-reset-email", {
        email,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async ({ token, password }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/users/reset-pswrd", {
        token,
        password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
//Token refresh
export const refreshToken = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const reduxState = thunkAPI.getState();
      const token = reduxState.user.token;

      setAuthHeader(token);

      const response = await axiosInstance.post("/auth/refresh");

      return response.data.data.accessToken;
    } catch (error) {
      clearAuthHeader();
      return thunkAPI.rejectWithValue(error.response.status);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      const savedToken = reduxState.user.token;
      return savedToken !== null;
    },
  }
);

// Отримання загальної кількості користувачів
export const getUsersAmount = createAsyncThunk(
  "user/getUsersAmount",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/auth/users");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);