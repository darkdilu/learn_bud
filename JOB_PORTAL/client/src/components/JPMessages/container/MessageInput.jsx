import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useSendMessageMutation } from "../../../slices/JPMessagesApiSlice";
import { toast } from "react-toastify";
import { setConversationMessages } from "../../../slices/JPMessagesSlice";

export default function MessageInput({ refetch }) {
  const { type, EInfo, JSInfo } = useSelector((state) => state.allUsers);
  const { selectedConversation, conversationMessages } = useSelector(
    (state) => state.jpMessages
  );
  const [sendMessage, { isLoading }] = useSendMessageMutation();
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  async function handleSend() {
    if (!message) return;
    const receiverType = selectedConversation?.jsId ? "jobseeker" : "employer";
    const senderId = type === "employer" ? EInfo._id : JSInfo._id;
    const receiverId = selectedConversation?.jsId
      ? selectedConversation.jsId._id
      : selectedConversation.emId._id;
    try {
      const res = await sendMessage({
        senderId,
        receiverId,
        senderType: type,
        receiverType,
        message,
      }).unwrap();
      if (res.msg === "success") {
        await refetch();
        setMessage("");
      } else {
        toast.error(res.msg);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  }
  return (
    <div className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="text-sm rounded-lg block w-full p-2.5 bg-gray-300 text-ascent"
          placeholder="send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {isLoading ? (
            <span className="loading loading-spinner loading-xs"></span>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </div>
  );
}
