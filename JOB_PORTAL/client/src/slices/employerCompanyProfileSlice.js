import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companyName: "",
  companyEmail: "",
  companyContact: "",
  logo: "",
  founded: "",
  size: "10-15",
  industry: "Information Technology & Telecommunications",
  website: "",
  facebook: "",
  twitter: "",
  linkedin: "",
  country: "",
  state: "",
  companyAddress: "",
  about: "",
};

const employerCompanyProfileSlice = createSlice({
  name: "employerCompanyProfile",
  initialState,
  reducers: {
    setCompanyName: (state, { payload }) => {
      state.companyName = payload;
    },
    setLogo: (state, { payload }) => {
      state.logo = payload;
    },
    setCompanyEmail: (state, { payload }) => {
      state.companyEmail = payload;
    },
    setCompanyContact: (state, { payload }) => {
      state.companyContact = payload;
    },
    setFounded: (state, { payload }) => {
      state.founded = payload;
    },
    setSize: (state, { payload }) => {
      state.size = payload;
    },
    setIndustry: (state, { payload }) => {
      state.industry = payload;
    },
    setWebsite: (state, { payload }) => {
      state.website = payload;
    },
    setFacebook: (state, { payload }) => {
      state.facebook = payload;
    },
    setTwitter: (state, { payload }) => {
      state.twitter = payload;
    },
    setLinkedin: (state, { payload }) => {
      state.linkedin = payload;
    },
    setCountry: (state, { payload }) => {
      state.country = payload;
    },
    setState: (state, { payload }) => {
      state.state = payload;
    },
    setCompanyAddress: (state, { payload }) => {
      state.companyAddress = payload;
    },
    setAbout: (state, { payload }) => {
      state.about = payload;
    },
  },
});

export default employerCompanyProfileSlice.reducer;
export const {
  setCompanyName,
  setCompanyEmail,
  setCompanyContact,
  setFounded,
  setSize,
  setIndustry,
  setWebsite,
  setFacebook,
  setTwitter,
  setLinkedin,
  setCountry,
  setState,
  setCompanyAddress,
  setAbout,
  setLogo,
} = employerCompanyProfileSlice.actions;
