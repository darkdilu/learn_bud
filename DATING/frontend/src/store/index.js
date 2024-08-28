import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: { isLoggedIn: true },
  reducers: {
    userLogin(state) {
      state.isLoggedIn = true;
    },
    userLogout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const userActions = userSlice.actions;
