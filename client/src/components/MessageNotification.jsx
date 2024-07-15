import React, { useState } from "react";
import { MdOutlineMessage } from "react-icons/md";
import { useSocketContext } from "../context/SocketContext";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MessageNotification() {
  const [isOpen, setIsOpen] = useState(false);
  const { notification } = useSocketContext();
  const { type } = useSelector((state) => state.allUsers);

  function handleClick() {
    setIsOpen(false);
  }
  return (
    <div className="relative mx-2">
      <div className="indicator">
        <span
          className={`indicator-item badge badge-error ${
            notification.length > 0 ? "" : "hidden"
          }`}
        >
          {notification.length}
        </span>
        <div
          className="text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MdOutlineMessage />
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-14 -right-24 bg-background2 p-5 rounded-md w-72 max-h-96 overflow-auto">
          <div className="flex justify-between items-center border-b-2 border-blue-400 py-3 mb-2 font-semibold">
            <p>Recent Messages</p>
          </div>
          <div>
            {notification.length < 0 && <h1>No new messages...</h1>}
            {notification.length > 0 &&
              notification.map((item) => (
                <Link
                  to={
                    type === "employer"
                      ? "/employer/dashboard/messages"
                      : "/jobseeker/dashboard/messages"
                  }
                  key={item.date}
                  onClick={() => handleClick()}
                >
                  <div className=" text-sm my-3 border-b border-blue-200">
                    <h1>{item.name} send you a message</h1>
                    <p className="text-xs text-gray-400 pt-1">
                      {item.date.toString().slice(0, 10)}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
