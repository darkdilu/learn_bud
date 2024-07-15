import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedConversation,
  toggleShowSide,
} from "../../../slices/JPMessagesSlice";
import { useSocketContext } from "../../../context/SocketContext";

export default function ConversationElt({ data }) {
  const { selectedConversation } = useSelector((state) => state.jpMessages);
  const { notification, setNotification } = useSocketContext();
  const isSelected = selectedConversation?._id === data._id;
  const dispatch = useDispatch();
  const { onlineUsers } = useSocketContext();
  const onlineId = data?.jsId ? data.jsId._id : data?.emId._id;
  const isOnline = onlineUsers.includes(onlineId);
  const [singleUserNotification, setSingleUserNotification] = useState([]);

  function handleClick() {
    dispatch(setSelectedConversation(data));
    dispatch(toggleShowSide());
    if (notification.length > 0) {
      const userNotification = notification.filter((item) => {
        if (data.jsId) {
          return item.senderId !== data.jsId._id;
        }
        if (data.emId) {
          return item.senderId !== data.emId._id;
        }
      });
      setNotification(userNotification);
    }
  }

  useEffect(() => {
    if (notification.length > 0) {
      const userNotification = notification.filter((item) => {
        if (data.jsId) {
          return item.senderId === data.jsId._id;
        }
        if (data.emId) {
          return item.senderId === data.emId._id;
        }
      });
      setSingleUserNotification(userNotification);
    }
    if (notification.length < 1) {
      setSingleUserNotification([]);
    }
  }, [notification, selectedConversation]);
  return (
    <div>
      <div
        className={`flex gap-3 items-center hover:bg-primary rounded px-2 py-1 cursor-pointer border-b-2 ${
          isSelected ? "bg-primary" : ""
        }`}
        onClick={handleClick}
      >
        <div className={`avatar z-0 ${isOnline ? "online" : ""}`}>
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src={
                data.jsId
                  ? data.jsId.profilePic
                  : data.emId
                  ? data.emId.logo
                  : "/nouser.png"
              }
              alt="pic"
            />
          </div>
        </div>
        <div className="flex justify-between w-full items-center">
          <p className="text-base">
            {data.jsId
              ? data.jsId.fullName
              : data.emId
              ? data.emId.companyName
              : "user"}
          </p>
          {singleUserNotification.length > 0 && (
            <div className="badge badge-success badge-sm">
              {singleUserNotification.length}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
