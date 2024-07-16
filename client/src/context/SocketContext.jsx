import { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";

const SocketContext = createContext();
export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [notification, setNotification] = useState([]);
  const [jobNotification, setJobNotification] = useState([]);
  const { userInfo, JSInfo, EInfo, type } = useSelector(
    (state) => state.allUsers
  );

  useEffect(() => {
    if (userInfo) {
      const newId = type === "employer" ? EInfo?._id : JSInfo?._id;

      const socket = io("http://localhost:3000", {
        query: {
          userId: newId,
        },
      });
      setSocket(socket);

      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [userInfo, JSInfo, EInfo, type]);

  return (
    <SocketContext.Provider
      value={{
        socket,
        onlineUsers,
        notification,
        setNotification,
        jobNotification,
        setJobNotification,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
