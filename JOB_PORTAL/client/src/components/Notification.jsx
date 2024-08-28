import React, { useEffect, useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { useSocketContext } from "../context/SocketContext";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useUpdateNotificationMutation } from "../slices/employerApiSlice";
import { useUpdatejobNotificationMutation } from "../slices/jobSeekerApiSlice";

export default function Notification() {
  const [isOpen, setIsOpen] = useState(false);
  const { jobNotification, setJobNotification } = useSocketContext();
  const [updateNotification] = useUpdateNotificationMutation();
  const [updatejobNotification] = useUpdatejobNotificationMutation();
  const { type, userInfo, EInfo, JSInfo } = useSelector(
    (state) => state.allUsers
  );

  async function updatejsDatabase(notification) {
    try {
      const res = await updatejobNotification({
        notification: notification,
      }).unwrap();
      if (res.msg === "success") {
        console.log(res.msg);
        return;
      } else {
        console.log(res.msg);
      }
    } catch (err) {
      console.log(err?.data?.msg || err?.error);
    }
  }
  async function updateemDatabase(notification) {
    try {
      const res = await updateNotification({
        notification: notification,
      }).unwrap();
      if (res.msg === "success") {
        console.log(res.msg);
        return;
      } else {
        console.log(res.msg);
      }
    } catch (err) {
      console.log(err?.data?.msg || err?.error);
    }
  }

  useEffect(() => {
    if (type === "employer") {
      updateemDatabase(jobNotification);
    }
    if (type === "jobseeker") {
      updatejsDatabase(jobNotification);
    }
  }, [jobNotification]);
  return (
    <div className="relative mx-2">
      <div className="indicator">
        <span
          className={`indicator-item badge badge-error ${
            jobNotification.length > 0 ? "" : "hidden"
          }`}
        >
          {jobNotification.length}
        </span>
        <div
          className="text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoNotificationsOutline />
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-14 -right-24 bg-background2 p-5 rounded-md w-72 max-h-96 overflow-auto">
          <div className="flex justify-between items-center border-b-2 border-blue-400 py-3 mb-2 font-semibold">
            <p>Notifications</p>
            <p
              className="cursor-pointer"
              onClick={() => setJobNotification([])}
            >
              clear all
            </p>
          </div>
          <div>
            {jobNotification.length < 0 && <h1>No Notifications</h1>}
            {jobNotification.length > 0 &&
              jobNotification.map((item) => (
                <Link
                  to={
                    type === "employer"
                      ? "/employer/dashboard/applicants"
                      : "/jobseeker/dashboard/applied-jobs"
                  }
                  key={item.date}
                  onClick={() => setIsOpen(false)}
                >
                  <div className=" text-sm my-3 border-b border-blue-200">
                    <h1>
                      {item.name}{" "}
                      {item.action === "applied"
                        ? "has been applied for a job"
                        : `${item.action} your job application`}
                    </h1>
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
