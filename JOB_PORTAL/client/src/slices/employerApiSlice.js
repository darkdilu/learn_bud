import { BASE_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const employerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateCompanyProfile: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/employer/company-profile`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    getCompanyProfile: builder.query({
      query: () => ({
        url: `${BASE_URL}/employer/company-profile`,
        credentials: "include",
      }),
      keepUnusedDataFor: 1,
    }),
    postNewJob: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/employer/job`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    getMyJobs: builder.query({
      query: () => ({
        url: `${BASE_URL}/employer/job`,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    editSingleJob: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/employer/job/${data.id}`,
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
    }),
    getMySingleJob: builder.query({
      query: (jobId) => ({
        url: `${BASE_URL}/employer/job/${jobId}`,
        credentials: "include",
      }),
      keepUnusedDataFor: 3,
    }),
    deleteMyJob: builder.mutation({
      query: (jobId) => ({
        url: `${BASE_URL}/employer/job/${jobId}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
    deleteMyAccount: builder.mutation({
      query: () => ({
        url: `${BASE_URL}/employer`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
    uploadLogo: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/employer/company-logo`,
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
    }),
    getAllCandidates: builder.query({
      query: ({
        candidateSearchKeyword,
        candidateSearchLocation,
        candidateSearchGender,
        candidateSearchExperience,
        candidateSearchQualification,
        candidateSearchSort,
        candidateSearchCurrentPage,
      }) => ({
        url: `${BASE_URL}/employer/candidates`,
        params: {
          candidateSearchKeyword,
          candidateSearchLocation,
          candidateSearchGender,
          candidateSearchExperience,
          candidateSearchQualification,
          candidateSearchSort,
          candidateSearchCurrentPage,
        },
        credentials: "include",
      }),
      keepUnusedDataFor: 3,
    }),
    getSingleCandidate: builder.query({
      query: (candidateId) => ({
        url: `${BASE_URL}/employer/candidates/${candidateId}`,
        credentials: "include",
      }),
      keepUnusedDataFor: 3,
    }),
    getAllEmployerCompanies: builder.query({
      query: ({
        companySearchKeyword,
        companySearchLocation,
        companySearchIndustry,
        companySearchCurrentPage,
        companySearchSort,
      }) => ({
        url: `${BASE_URL}/employer/companies`,
        params: {
          companySearchKeyword,
          companySearchLocation,
          companySearchIndustry,
          companySearchCurrentPage,
          companySearchSort,
        },
        credentials: "include",
      }),
      keepUnusedDataFor: 3,
    }),
    getSingleECompany: builder.query({
      query: (id) => ({
        url: `${BASE_URL}/employer/companies/${id}`,
        credentials: "include",
      }),
      keepUnusedDataFor: 3,
    }),
    getAllApplicants: builder.query({
      query: () => ({
        url: `${BASE_URL}/employer/applicants`,
        credentials: "include",
      }),
      keepUnusedDataFor: 3,
    }),
    shortListUser: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/employer/shortlist`,
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
    }),
    rejectUser: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/employer/reject`,
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
    }),
    updateNotification: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/employer/notification`,
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useUpdateCompanyProfileMutation,
  useGetCompanyProfileQuery,
  usePostNewJobMutation,
  useGetMyJobsQuery,
  useEditSingleJobMutation,
  useGetMySingleJobQuery,
  useDeleteMyJobMutation,
  useDeleteMyAccountMutation,
  useUploadLogoMutation,
  useGetAllCandidatesQuery,
  useGetSingleCandidateQuery,
  useGetAllEmployerCompaniesQuery,
  useGetSingleECompanyQuery,
  useGetAllApplicantsQuery,
  useShortListUserMutation,
  useRejectUserMutation,
  useUpdateNotificationMutation,
} = employerApiSlice;
