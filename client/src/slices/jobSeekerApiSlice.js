import { BASE_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const jobSeekerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    saveJobSeekerDetails: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/jobseeker/data`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    getAllJobs: builder.query({
      query: ({
        jobSearchKeyword,
        jobSearchLocation,
        jobSearchCategory,
        jobSearchGender,
        jobSearchJobType,
        jobSearchExperience,
        jobSearchQualification,
        jobSearchSort,
        jobSearchCurrentPage,
      }) => ({
        url: `${BASE_URL}/jobseeker/jobs`,
        params: {
          jobSearchKeyword,
          jobSearchLocation,
          jobSearchCategory,
          jobSearchGender,
          jobSearchJobType,
          jobSearchExperience,
          jobSearchQualification,
          jobSearchSort,
          jobSearchCurrentPage,
        },
        credentials: "include",
      }),
      keepUnusedDataFor: 2,
    }),
    getSingleJob: builder.query({
      query: (jobId) => ({
        url: `${BASE_URL}/jobseeker/jobs/${jobId}`,
        credentials: "include",
      }),
      keepUnusedDataFor: 3,
    }),
    applyJob: builder.mutation({
      query: (id) => ({
        url: `${BASE_URL}/jobseeker/jobs/${id}`,
        method: "PATCH",
        credentials: "include",
      }),
    }),
    getAllCompanies: builder.query({
      query: ({
        companySearchKeyword,
        companySearchLocation,
        companySearchIndustry,
        companySearchCurrentPage,
        companySearchSort,
      }) => ({
        url: `${BASE_URL}/jobseeker/companies`,
        params: {
          companySearchKeyword,
          companySearchLocation,
          companySearchIndustry,
          companySearchCurrentPage,
          companySearchSort,
        },
        credentials: "include",
      }),
      keepUnusedDataFor: 2,
    }),
    getSingleCompany: builder.query({
      query: (companyId) => ({
        url: `${BASE_URL}/jobseeker/companies/${companyId}`,
        credentials: "include",
      }),
      keepUnusedDataFor: 3,
    }),
    getCompanyActiveJobs: builder.query({
      query: (companyId) => ({
        url: `${BASE_URL}/jobseeker/active-jobs/${companyId}`,
        credentials: "include",
      }),
      keepUnusedDataFor: 3,
    }),
    deleteMyJSAccount: builder.mutation({
      query: () => ({
        url: `${BASE_URL}/jobseeker`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
    getJobSeekerDetails: builder.query({
      query: () => ({
        url: `${BASE_URL}/jobseeker`,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    updateBasicDetails: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/jobseeker/profile/basic`,
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
    }),
    updateEducationDetails: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/jobseeker/profile/education`,
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
    }),
    updateWorkDetails: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/jobseeker/profile/work`,
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
    }),
    updateProfessionalDetails: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/jobseeker/profile/professional`,
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
    }),
    updatePreferences: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/jobseeker/profile/preferences`,
        body: data,
        method: "PATCH",
        credentials: "include",
      }),
    }),
    updateProfilePicture: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/jobseeker/profile/profile-image`,
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
    }),
    updateResume: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/jobseeker/profile/resume`,
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
    }),
    getAllAppliedJobs: builder.query({
      query: () => ({
        url: `${BASE_URL}/jobseeker/applied-jobs`,
        credentials: "include",
      }),
      keepUnusedDataFor: 3,
    }),
    updatejobNotification: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/jobseeker/notification`,
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useSaveJobSeekerDetailsMutation,
  useGetAllJobsQuery,
  useGetAllCompaniesQuery,
  useGetSingleCompanyQuery,
  useGetCompanyActiveJobsQuery,
  useGetSingleJobQuery,
  useApplyJobMutation,
  useDeleteMyJSAccountMutation,
  useGetJobSeekerDetailsQuery,
  useUpdateBasicDetailsMutation,
  useUpdateEducationDetailsMutation,
  useUpdateWorkDetailsMutation,
  useUpdateProfessionalDetailsMutation,
  useUpdatePreferencesMutation,
  useUpdateProfilePictureMutation,
  useUpdateResumeMutation,
  useGetAllAppliedJobsQuery,
  useUpdatejobNotificationMutation,
} = jobSeekerApiSlice;
