import { BASE_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const JPMessagesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/jobportal/messages/send`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    getMessages: builder.query({
      query: ({ receiverId, senderId }) => ({
        url: `${BASE_URL}/jobportal/messages`,
        params: { receiverId, senderId },
        credentials: "include",
      }),
      keepUnusedDataFor: 1,
    }),
    updatemsgNotification: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/jobportal/messages/notification`,
        body: data,
        method: "PATCH",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useSendMessageMutation,
  useGetMessagesQuery,
  useUpdatemsgNotificationMutation,
} = JPMessagesApiSlice;
