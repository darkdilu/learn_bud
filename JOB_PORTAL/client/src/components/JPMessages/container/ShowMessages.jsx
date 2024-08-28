import React, { useEffect, useRef } from "react";
import SingleMessage from "./SingleMessage";
import { useDispatch, useSelector } from "react-redux";
import { useGetMessagesQuery } from "../../../slices/JPMessagesApiSlice";
import Loading from "../../Loading";
import MessageInput from "./MessageInput";
import { setConversationMessages } from "../../../slices/JPMessagesSlice";
import { useSocketContext } from "../../../context/SocketContext";

export default function ShowMessages() {
  const { selectedConversation, conversationMessages } = useSelector(
    (state) => state.jpMessages
  );
  const { type, EInfo, JSInfo } = useSelector((state) => state.allUsers);
  const { notification, setNotification } = useSocketContext();
  const senderId = type === "employer" ? EInfo._id : JSInfo._id;
  const receiverId = selectedConversation?.jsId
    ? selectedConversation.jsId._id
    : selectedConversation.emId._id;
  const { data, isLoading, refetch } = useGetMessagesQuery({
    senderId,
    receiverId,
  });
  const lastMessageRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (notification.length > 0) {
      const userNotification = notification.filter((item) => {
        return item.senderId !== receiverId;
      });
      setNotification(userNotification);
    }
  }, [data, isLoading]);

  useEffect(() => {
    setTimeout(() => {
      if (lastMessageRef.current) {
        lastMessageRef.current.scrollTop = lastMessageRef.current.scrollHeight;
      }
    }, 100);
    dispatch(setConversationMessages(data));
  }, [data]);
  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div id="mcon" className="px-4 flex-1 overflow-auto" ref={lastMessageRef}>
        {conversationMessages?.length > 0 &&
          conversationMessages.map((item) => (
            <SingleMessage key={item._id} data={item} />
          ))}
      </div>
      <MessageInput refetch={refetch} />
    </>
  );
}
