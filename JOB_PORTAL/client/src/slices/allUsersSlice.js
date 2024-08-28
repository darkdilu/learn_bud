import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  JSInfo: null,
  EInfo: null,
  type: "",
};

const allUserSSlice = createSlice({
  name: "allUsers",
  initialState,
  reducers: {
    setUserInfo: (state, { payload }) => {
      state.userInfo = payload;
    },
    setJSInfo: (state, { payload }) => {
      state.JSInfo = payload;
    },
    setEInfo: (state, { payload }) => {
      state.EInfo = payload;
    },
    setType: (state, { payload }) => {
      state.type = payload;
    },
  },
});

export default allUserSSlice.reducer;
export const { setUserInfo, setEInfo, setJSInfo, setType } =
  allUserSSlice.actions;
