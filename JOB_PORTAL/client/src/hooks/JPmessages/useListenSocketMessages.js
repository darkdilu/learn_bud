import { useDispatch, useSelector } from "react-redux";
import { useSocketContext } from "../../context/SocketContext";
import { useEffect } from "react";
import { setConversationMessages } from "../../slices/JPMessagesSlice";
import { useUpdatemsgNotificationMutation } from "../../slices/JPMessagesApiSlice";

const useListenSocketMessages = () => {
  const { socket, setNotification, notification } = useSocketContext();
  //const [updatemsgNotification] = useUpdatemsgNotificationMutation();
  const { conversationMessages, selectedConversation } = useSelector(
    (state) => state.jpMessages
  );
  const { type, userInfo, EInfo, JSInfo } = useSelector(
    (state) => state.allUsers
  );

  const dispatch = useDispatch();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      const selectedId = selectedConversation
        ? selectedConversation.jsId
          ? selectedConversation.jsId._id
          : selectedConversation.emId._id
        : null;
      const isChatOpen = selectedId
        ? selectedId === newMessage.senderId
        : false;
      if (isChatOpen) {
        dispatch(
          setConversationMessages([...conversationMessages, newMessage])
        );
      }
    });

    socket?.on("newNotification", (res) => {
      const selectedId = selectedConversation
        ? selectedConversation.jsId
          ? selectedConversation.jsId._id
          : selectedConversation.emId._id
        : null;
      const isChatOpen = selectedId ? selectedId === res.senderId : false;
      if (isChatOpen) {
        console.log("chat is open");
      } else {
        let userName = "";
        if (type === "employer") {
          const obj = userInfo.emconnections.find((item) => {
            if (item.jsId && item.jsId._id === res.senderId) {
              return item;
            }
            if (item.emId && item.emId._id === res.senderId) {
              return item;
            }
          });

          userName = obj.jsId ? obj.jsId.fullName : obj.emId.companyName;
        }
        if (type === "jobseeker") {
          const obj = userInfo.jsconnections.find((item) => {
            if (item.jsId && item.jsId._id === res.senderId) {
              return item;
            }
            if (item.emId && item.emId._id === res.senderId) {
              return item;
            }
          });
          userName = obj.jsId ? obj.jsId.fullName : obj.emId.companyName;
        }
        setNotification((prev) => [{ ...res, name: userName }, ...prev]);
      }
    });
    return () => {
      socket?.off("newMessage");
      socket?.off("newNotification");
    };
  }, [
    socket,
    conversationMessages,
    setConversationMessages,
    selectedConversation,
  ]);
};

export default useListenSocketMessages;
