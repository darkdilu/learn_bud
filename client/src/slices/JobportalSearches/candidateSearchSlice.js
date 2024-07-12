import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  candidateSearchKeyword: "",
  candidateSearchLocation: "",
  candidateSearchCategory: "ALL",
  candidateSearchGender: "ALL",
  candidateSearchExperience: "ALL",
  candidateSearchQualification: "ALL",
  candidateSearchSort: "Newest",
  candidateSearchCurrentPage: 1,
  candidateSearchTotalPage: 1,
  candidateSearchOn: false,
};

const candidateSearchSlice = createSlice({
  name: "candidateSearch",
  initialState,
  reducers: {
    setCandidateSearchKeyword: (state, { payload }) => {
      state.candidateSearchKeyword = payload;
    },
    setCandidateSearchLocation: (state, { payload }) => {
      state.candidateSearchLocation = payload;
    },
    setCandidateSearchCategory: (state, { payload }) => {
      state.candidateSearchCategory = payload;
    },
    setCandidateSearchGender: (state, { payload }) => {
      state.candidateSearchGender = payload;
    },
    setCandidateSearchExperience: (state, { payload }) => {
      state.candidateSearchExperience = payload;
    },
    setCandidateSearchQualification: (state, { payload }) => {
      state.candidateSearchQualification = payload;
    },
    setCandidateSearchSort: (state, { payload }) => {
      state.candidateSearchSort = payload;
    },
    setCandidateSearchCurrentPage: (state, { payload }) => {
      state.candidateSearchCurrentPage = payload;
    },
    setCandidateSearchTotalPage: (state, { payload }) => {
      state.candidateSearchTotalPage = payload;
    },
    setCandidateSearchOn: (state, { payload }) => {
      state.candidateSearchOn = true;
    },
    setCandidateSearchOff: (state, { payload }) => {
      state.candidateSearchOn = false;
    },
    resetCandidateSearch: (state) => {
      state.candidateSearchKeyword = "";
      state.candidateSearchLocation = "";
      state.candidateSearchCategory = "ALL";
      state.candidateSearchGender = "ALL";
      state.candidateSearchExperience = "ALL";
      state.candidateSearchQualification = "ALL";
      state.candidateSearchSort = "Newest";
      state.candidateSearchCurrentPage = 1;
      state.candidateSearchTotalPage = 1;
      state.candidateSearchOn = false;
    },
  },
});

export default candidateSearchSlice.reducer;
export const {
  setCandidateSearchCategory,
  setCandidateSearchCurrentPage,
  setCandidateSearchExperience,
  setCandidateSearchGender,
  setCandidateSearchKeyword,
  setCandidateSearchLocation,
  setCandidateSearchOff,
  setCandidateSearchOn,
  setCandidateSearchQualification,
  setCandidateSearchSort,
  setCandidateSearchTotalPage,
  resetCandidateSearch,
} = candidateSearchSlice.actions;
