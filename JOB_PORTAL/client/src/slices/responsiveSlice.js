import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showEmployerSmallBar: false,
  showEmployerCandidatesFilter: false,
  showEmployerCompanyFilter: false,
  showEmployerSmallDashboard: false,
  showJobSeekerSmallBar: false,
  showJobSeekerJobsFilter: false,
  showJobSeekerCompanyFilter: false,
  showJobSeekerSmallDashboard: false,
};
const responsiveSlice = createSlice({
  name: "responsive",
  initialState,
  reducers: {
    toggleEmployerSmallBar: (state) => {
      state.showEmployerSmallBar = !state.showEmployerSmallBar;
    },
    toggleEmployerCandidatesFilter: (state) => {
      state.showEmployerCandidatesFilter = !state.showEmployerCandidatesFilter;
    },
    toggleEmployerCompanyFilter: (state) => {
      state.showEmployerCompanyFilter = !state.showEmployerCompanyFilter;
    },
    toggleEmployerSmallDashboard: (state) => {
      state.showEmployerSmallDashboard = !state.showEmployerSmallDashboard;
    },
    toggleJobSeekerSmallBar: (state) => {
      state.showJobSeekerSmallBar = !state.showJobSeekerSmallBar;
    },
    toggleJobSeekerJobsFilter: (state) => {
      state.showJobSeekerJobsFilter = !state.showJobSeekerJobsFilter;
    },
    toggleJobSeekerCompanyFilter: (state) => {
      state.showJobSeekerCompanyFilter = !state.showJobSeekerCompanyFilter;
    },
    toggleJobSeekerSmallDashboard: (state) => {
      state.showJobSeekerSmallDashboard = !state.showJobSeekerSmallDashboard;
    },
  },
});

export default responsiveSlice.reducer;
export const {
  toggleEmployerSmallBar,
  toggleEmployerCandidatesFilter,
  toggleEmployerCompanyFilter,
  toggleEmployerSmallDashboard,
  toggleJobSeekerSmallBar,
  toggleJobSeekerCompanyFilter,
  toggleJobSeekerJobsFilter,
  toggleJobSeekerSmallDashboard,
} = responsiveSlice.actions;
