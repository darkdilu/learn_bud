import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { toggleShowSide } from "../../../slices/JPMessagesSlice";

export default function NoChatSelected() {
  const dispatch = useDispatch();
  return (
    <>
      <span onClick={() => dispatch(toggleShowSide())} className="md:hidden">
        <FaArrowLeft />
      </span>
      <div className="flex items-center justify-center w-full h-full">
        <div className="px-4 text-center text-lg md:text-xl text-gray-800 font-semibold flex flex-col items-center gap-2">
          <p>Welcome, User</p>
          <p>Select a chat to start messaging</p>
          <TiMessages className="text-3xl md:text-6xl text-center" />
        </div>
      </div>
    </>
  );
}
