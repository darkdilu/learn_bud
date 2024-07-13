import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedConversation: null,
  conversationMessages: [],
  showSide: true,
  emList: [],
  jsList: [],
};

const jpMessagesSlice = createSlice({
  name: "jpMessages",
  initialState,
  reducers: {
    setSelectedConversation: (state, { payload }) => {
      state.selectedConversation = payload;
    },
    setConversationMessages: (state, { payload }) => {
      state.conversationMessages = payload;
    },
    resetMessages: (state) => {
      (state.selectedConversation = null), (state.conversationMessages = []);
    },
    toggleShowSide: (state) => {
      state.showSide = !state.showSide;
    },
    setEmlist: (state, { payload }) => {
      state.emList = payload;
    },
    setJsList: (state, { payload }) => {
      state.jsList = payload;
    },
  },
});

export default jpMessagesSlice.reducer;
export const {
  setConversationMessages,
  setSelectedConversation,
  resetMessages,
  toggleShowSide,
  setEmlist,
  setJsList,
} = jpMessagesSlice.actions;
