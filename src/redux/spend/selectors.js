export const selectDayWaterItems = (state) => state.spend.items.day;

export const selectMonthWaterItems = (state) => state.spend.items.month;

export const selectLoading = (state) => state.spend.loading;

export const selectError = (state) => state.spend.error;

export const selectTotalValue = (state) => state.spend.items.totalValue;

export const selectDate = (state) => state.spend.items.date;