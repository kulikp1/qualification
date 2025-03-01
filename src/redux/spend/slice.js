import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState.js";
import {
  addSpendItem,
  deleteSpendItem,
  editSpendItem,
  getDaySpendByDate,
  getMonthSpendByMonth,
} from "./operations.js";
import { logOut } from "../user/operations";
import { logoutAction } from "../user/slice.js";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const spendSlice = createSlice({
  name: "spend",
  initialState: initialState.spend,
  reducers: {
    changeActualDate: (state, action) => {
      state.items.date = action.payload;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(addSpendItem.pending, handlePending)
      .addCase(addSpendItem.fulfilled, (state, action) => {
        state.loading = false;
        const newItem = { ...action.payload.data, id: action.payload.data._id };
        if (state.items.date === action.payload.data.date) {
          state.items.day.push(newItem);
        }
        state.items.totalValue += action.payload.data.value;
      })
      .addCase(addSpendItem.rejected, handleRejected)
      .addCase(deleteSpendItem.pending, handlePending)
      .addCase(deleteSpendItem.fulfilled, (state, action) => {
        state.loading = false;

        const itemToDelete = state.items.day.find(
          (item) => item.id === action.payload.id
        );

        if (itemToDelete) {
          state.items.totalValue -= itemToDelete.value;
        }

        state.items.day = state.items.day.filter(
          (item) => item.id !== action.payload.id
        );
        state.items.month = state.items.month.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteSpendItem.rejected, handleRejected)
      .addCase(editSpendItem.pending, handlePending)
      .addCase(editSpendItem.fulfilled, (state, action) => {
        state.loading = false;

        const updatedItem = action.payload.data;

        const dayItemIndex = state.items.day.findIndex(
          (item) => item.id === updatedItem._id
        );

        const oldValueDay =
          dayItemIndex !== -1 ? state.items.day[dayItemIndex].value : 0;

        if (dayItemIndex !== -1) {
          state.items.day[dayItemIndex] = {
            ...state.items.day[dayItemIndex],
            value: updatedItem.value,
            time: updatedItem.time,
          };
        }

        const monthItemIndex = state.items.month.findIndex(
          (item) => item.id === updatedItem._id
        );

        const oldValueMonth =
          monthItemIndex !== -1 ? state.items.month[monthItemIndex].value : 0;

        if (monthItemIndex !== -1) {
          state.items.month[monthItemIndex] = {
            ...state.items.month[monthItemIndex],
            value: updatedItem.value,
            time: updatedItem.time,
          };
        }

        state.items.totalValue +=
          updatedItem.value - (oldValueDay + oldValueMonth);
      })
      .addCase(editSpendItem.rejected, handleRejected)
      .addCase(getDaySpendByDate.pending, handlePending)
      .addCase(getDaySpendByDate.fulfilled, (state, action) => {
        state.items.date = action.payload.date;
        state.items.totalValue = action.payload.totalValue;
        state.loading = false;
        state.items.day = action.payload.data;
      })
      .addCase(getDaySpendByDate.rejected, handleRejected)
      .addCase(getMonthSpendByMonth.pending, handlePending)
      .addCase(getMonthSpendByMonth.fulfilled, (state, action) => {
        state.loading = false;
        state.items.month = action.payload.data;
      })
      .addCase(getMonthSpendByMonth.rejected, handleRejected)
      .addCase(logOut.fulfilled, (state) => {
        state.items.day = [];
        state.items.month = [];
        state.loading = false;
        state.error = null;
      })
      .addCase(logoutAction, (state) => {
        state = initialState.spend;
      }),
});

export const { changeActualDate } = spendSlice.actions;

export default spendSlice.reducer;