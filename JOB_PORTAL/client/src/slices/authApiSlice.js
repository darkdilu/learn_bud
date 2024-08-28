
import { BASE_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/auth/register`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: `${BASE_URL}/auth/logout`,
        method: "POST",
        credentials: "include",
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/auth/login`,
        method: "POST",
        credentials: "include",
        body: data,
      }),
    }),
    googleLoginUser: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/auth/google-login`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    sendOTPtoUser: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/auth/send-otp`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    verifyOTPtoUser: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/auth/verify`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/auth/forgotPassword`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/auth/resetPassword`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    getUserInfo: builder.query({
      query: () => ({
        url: `${BASE_URL}/auth/userInfo`,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/auth/change-password`,
        body: data,
        method: "PATCH",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLogoutUserMutation,
  useLoginUserMutation,
  useGoogleLoginUserMutation,
  useSendOTPtoUserMutation,
  useVerifyOTPtoUserMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useGetUserInfoQuery,
  useChangePasswordMutation,
} = authApiSlice;
