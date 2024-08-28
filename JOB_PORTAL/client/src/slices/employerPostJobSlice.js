import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobTitle: "",
  description: "",
  category: "Healthcare & Medical",
  jobType: "Full-time",
  qualification: "Certificate",
  experience: "All",
  gender: "All",
  skills: "",
  deadline: "",
  jobPlace: "",
  jobLocation: "On-site",
  salary: "",
};

const employerPostJobSlice = createSlice({
  name: "employerPostJob",
  initialState,
  reducers: {
    setJobTitle: (state, { payload }) => {
      state.jobTitle = payload;
    },
    setDescription: (state, { payload }) => {
      state.description = payload;
    },
    setCategory: (state, { payload }) => {
      state.category = payload;
    },
    setJobType: (state, { payload }) => {
      state.jobType = payload;
    },
    setJobPlace: (state, { payload }) => {
      state.jobPlace = payload;
    },
    setQualification: (state, { payload }) => {
      state.qualification = payload;
    },
    setExperience: (state, { payload }) => {
      state.experience = payload;
    },
    setGender: (state, { payload }) => {
      state.gender = payload;
    },
    setSkills: (state, { payload }) => {
      state.skills = payload;
    },
    setDeadline: (state, { payload }) => {
      state.deadline = payload;
    },
    setJobLocation: (state, { payload }) => {
      state.jobLocation = payload;
    },
    setSalary: (state, { payload }) => {
      state.salary = payload;
    },
    resetAll: (state) => {
      state.jobTitle = "";
      state.description = "";
      state.category = "Healthcare & Medical";
      state.jobType = "Full-time";
      state.qualification = "Certificate";
      state.experience = "All";
      state.gender = "All";
      state.skills = "";
      state.deadline = "";
      state.jobLocation = "On-site";
      state.salary = "";
      state.jobPlace = "";
    },
  },
});

export default employerPostJobSlice.reducer;
export const {
  setJobTitle,
  setDescription,
  setCategory,
  setJobType,
  setDeadline,
  setExperience,
  setJobPlace,
  setGender,
  setJobLocation,
  setQualification,
  setSalary,
  setSkills,
  resetAll,
} = employerPostJobSlice.actions;
