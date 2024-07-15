import React, { useEffect } from "react";
import ShowMessages from "./ShowMessages";
import NoChatSelected from "./NoChatSelected";
import { FaArrowLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  setConversationMessages,
  setSelectedConversation,
  toggleShowSide,
} from "../../../slices/JPMessagesSlice";

export default function JPMessageContainer() {
  const { selectedConversation, showSide } = useSelector(
    (state) => state.jpMessages
  );
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(setSelectedConversation(null));
      dispatch(setConversationMessages([]));
    };
  }, [setSelectedConversation]);

  return (
    <div className={`md:flex flex-col w-full ${showSide ? "hidden" : "flex"}`}>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-gray-300 px-4 py-3 rounded mb-2 flex gap-3 items-center">
            <span
              onClick={() => dispatch(toggleShowSide())}
              className="md:hidden"
            >
              <FaArrowLeft />
            </span>
            <span className="text-gray-400">To:</span>{" "}
            <span className="text-ascent text-lg">
              {selectedConversation.jsId
                ? selectedConversation.jsId.fullName
                : selectedConversation.emId
                ? selectedConversation.emId.companyName
                : "user"}
            </span>
          </div>
          <ShowMessages />
        </>
      )}
    </div>
  );
}
