import React from "react";
import MessageSearch from "./MessageSearch";
import Conversation from "./Conversation";
import { useSelector } from "react-redux";

export default function JPmessageSideBar() {
  const { showSide } = useSelector((state) => state.jpMessages);
  return (
    <div
      className={`border-r-2 p-4 flex flex-col w-full md:w-fit ${
        showSide ? "block" : "hidden md:block"
      }`}
    >
      <MessageSearch />
      <div className="divider divider-primary"></div>
      <Conversation />
    </div>
  );
}
