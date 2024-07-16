import React, { useEffect } from "react";
import { useSocketContext } from "../../context/SocketContext";
import { useSelector } from "react-redux";

export default function useListenSocketNotifications() {
  const { socket, setJobNotification } = useSocketContext();
  const { type } = useSelector((state) => state.allUsers);
  useEffect(() => {
    socket?.on("jobNotification", (res) => {
      setJobNotification((prev) => [res, ...prev]);
    });

    return () => socket?.off("jobNotification");
  }, [socket, setJobNotification]);
}
