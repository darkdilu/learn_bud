import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companySearchKeyword: "",
  companySearchLocation: "",
  companySearchIndustry: "ALL",
  companySearchCurrentPage: 1,
  companySearchTotalPage: 1,
  companySearchSort: "Newest",
  companySearchOn: false,
};

const companySearchSlice = createSlice({
  name: "companySearch",
  initialState,
  reducers: {
    setCompanySearchKeyword: (state, { payload }) => {
      state.companySearchKeyword = payload;
    },
    setCompanySearchLocation: (state, { payload }) => {
      state.companySearchLocation = payload;
    },
    setCompanySearchIndustry: (state, { payload }) => {
      state.companySearchIndustry = payload;
    },
    setCompanySearchCurrentPage: (state, { payload }) => {
      state.companySearchCurrentPage = payload;
    },
    setCompanySearchTotalPage: (state, { payload }) => {
      state.companySearchTotalPage = payload;
    },
    setCompanySearchSort: (state, { payload }) => {
      state.companySearchSort = payload;
    },
    setCompanySearchOn: (state, { payload }) => {
      state.companySearchOn = true;
    },
    setCompanySearchOff: (state, { payload }) => {
      state.companySearchOn = false;
    },
    resetCompanySearch: (state) => {
      state.companySearchKeyword = "";
      state.companySearchLocation = "";
      state.companySearchIndustry = "ALL";
      state.companySearchCurrentPage = 1;
      state.companySearchTotalPage = 1;
      state.companySearchSort = "Newest";
      state.companySearchOn = false;
    },
  },
});

export default companySearchSlice.reducer;
export const {
  setCompanySearchCurrentPage,
  setCompanySearchIndustry,
  setCompanySearchKeyword,
  setCompanySearchLocation,
  setCompanySearchOff,
  setCompanySearchOn,
  setCompanySearchSort,
  setCompanySearchTotalPage,
  resetCompanySearch,
} = companySearchSlice.actions;
