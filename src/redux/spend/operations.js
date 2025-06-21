import { createAsyncThunk } from "@reduxjs/toolkit";
import {axiosInstance} from '../../services/api.js'

export const addSpendItem = createAsyncThunk(
  "spend/addSpendItem",
  async ({ newSpendItem, selectedDate }, thunkAPI) => {
    try {
     const response = await axiosInstance.post("/spend", {
       ...newSpendItem,
       date: selectedDate,
     });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteSpendItem = createAsyncThunk(
  "spend/deleteItem",
  async (spendItemId, thunkAPI) => {
    try {
      await axiosInstance.delete(`/spend/${spendItemId}`);
      
      return { id: spendItemId };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editSpendItem = createAsyncThunk(
  "spend/editSpendItem",
  async (spendItemToEdit, thunkAPI) => {
    try {
      const { spendItemId, ...spendItemWithoutId } = spendItemToEdit;

      const response = await axiosInstance.patch(
        `/spend/${spendItemId}`,
        spendItemWithoutId
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getDaySpendByDate = createAsyncThunk(
  "spend/getDaySpendrByDate",
  async (date, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/spend/day/${date}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Операція для отримання даних за конкретний місяць
export const getMonthSpendByMonth = createAsyncThunk(
  "spend/getMonthSpendByMonth",
  async (month, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`spend/month/${month}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);