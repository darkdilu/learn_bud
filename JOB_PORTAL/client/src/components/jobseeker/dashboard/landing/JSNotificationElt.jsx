import React from "react";
import { BsSuitcaseLg } from "react-icons/bs";

export default function JSNotificationElt({ name, action }) {
  return (
    <div className="flex gap-2 items-center">
      <div className={`text-xl p-2 bg-blue-100 text-blue-700 rounded-xl`}>
        <BsSuitcaseLg />
      </div>

      <p className="leading-6">
        <span className="font-semibold">{name}</span>{" "}
        <span
          className={
            action === "shortlisted" ? "text-green-800" : "text-red-800"
          }
        >
          {action}
        </span>{" "}
        your job application
      </p>
    </div>
  );
}
