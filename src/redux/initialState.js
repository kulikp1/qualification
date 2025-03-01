export const initialState = {
  spend: {
    items: {
      totalValue: 0,
      day: [],
      month: [],
      date: null,
    },

    loading: false,
    error: null,
  },

  user: {
    userData: {
      name: null,
      email: null,
      gender: null,
      photo: null,
      weight: null,
      activeTime: null,
      dailyNorm: null,
    },
    totalAmount: null,
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    loadingUser: false,
    loadingTracker: false,
    error: null,
  },
};