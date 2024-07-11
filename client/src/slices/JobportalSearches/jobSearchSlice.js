import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobSearchKeyword: "",
  jobSearchLocation: "",
  jobSearchCategory: "ALL",
  jobSearchGender: "ALL",
  jobSearchJobType: "ALL",
  jobSearchExperience: "ALL",
  jobSearchQualification: "ALL",
  jobSearchMinSalary: "ALL",
  jobSearchSort: "Newest",
  jobSearchCurrentPage: 1,
  jobSearchTotalPage: 1,
  jobSearchOn: false,
};

const jobSearchSlice = createSlice({
  name: "jobSearch",
  initialState,
  reducers: {
    setJobsearchKeyword: (state, { payload }) => {
      state.jobSearchKeyword = payload;
    },
    setJobsearchLocation: (state, { payload }) => {
      state.jobSearchLocation = payload;
    },
    setJobsearchCategory: (state, { payload }) => {
      state.jobSearchCategory = payload;
    },
    setJobsearchGender: (state, { payload }) => {
      state.jobSearchGender = payload;
    },
    setJobsearchJobType: (state, { payload }) => {
      state.jobSearchJobType = payload;
    },
    setJobsearchExperience: (state, { payload }) => {
      state.jobSearchExperience = payload;
    },
    setJobsearchQualification: (state, { payload }) => {
      state.jobSearchQualification = payload;
    },
    setJobsearchMinsalary: (state, { payload }) => {
      state.jobSearchMinSalary = payload;
    },
    setJobsearchSort: (state, { payload }) => {
      state.jobSearchSort = payload;
    },
    setJobsearchCurrentPage: (state, { payload }) => {
      state.jobSearchCurrentPage = payload;
    },
    setJobsearchTotalPage: (state, { payload }) => {
      state.jobSearchTotalPage = payload;
    },
    setJobSearchOn: (state) => {
      state.jobSearchOn = true;
    },
    setjobsearchOff: (state) => {
      state.jobSearchOn = false;
    },
    resetJobSearch: (state) => {
      state.jobSearchKeyword = "";
      state.jobSearchLocation = "";
      state.jobSearchCategory = "ALL";
      state.jobSearchGender = "ALL";
      state.jobSearchJobType = "ALL";
      state.jobSearchExperience = "ALL";
      state.jobSearchQualification = "ALL";
      state.jobSearchMinSalary = "ALL";
      state.jobSearchSort = "Newest";
      state.jobSearchCurrentPage = 1;
      state.jobSearchTotalPage = 1;
      state.jobSearchOn = false;
    },
  },
});

export default jobSearchSlice.reducer;
export const {
  setJobsearchCategory,
  setJobsearchCurrentPage,
  setJobsearchExperience,
  setJobsearchGender,
  setJobsearchJobType,
  setJobsearchKeyword,
  setJobsearchLocation,
  setJobsearchMinsalary,
  setJobsearchQualification,
  setJobsearchSort,
  setJobsearchTotalPage,
  resetJobSearch,
  setJobSearchOn,
  setjobsearchOff,
} = jobSearchSlice.actions;
