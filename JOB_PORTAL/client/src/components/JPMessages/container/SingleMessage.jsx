import React from "react";
import { useSelector } from "react-redux";
import { extractTime } from "../../../utils/dateFormatter";

export default function SingleMessage({ data }) {
  const { type, EInfo, JSInfo } = useSelector((state) => state.allUsers);
  const { selectedConversation, conversationMessages } = useSelector(
    (state) => state.jpMessages
  );
  const myId = type === "employer" ? EInfo._id : JSInfo._id;
  const myPic =
    type === "employer"
      ? EInfo.logo
      : JSInfo.profilePic
      ? JSInfo.profilePic
      : "/nouser.png";
  const theirPic = selectedConversation?.jsId
    ? selectedConversation.jsId.profilePic
    : selectedConversation.emId.logo
    ? selectedConversation.emId.logo
    : "/nouser.png";
  const fromMe = data.senderId === myId;
  const formattedTime = extractTime(data.createdAt);
  const chatClass = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? myPic : theirPic;
  const chatbg = fromMe ? "bg-blue-500" : "bg-gray-400";
  return (
    <div className={`chat ${chatClass}`}>
      <div className="chat-image avatar">
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img src={profilePic} alt="img" />
        </div>
      </div>
      <div className={`chat-bubble text-ascent ${chatbg}`}>{data.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {`${data.createdAt.toString().slice(0, 10)}-${formattedTime}`}
      </div>
    </div>
  );
}
