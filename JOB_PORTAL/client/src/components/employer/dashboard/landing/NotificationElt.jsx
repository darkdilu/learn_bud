import React from "react";
import { BsSuitcaseLg } from "react-icons/bs";

export default function NotificationElt({ name, post }) {
  return (
    <div className="flex gap-2 items-center">
      <div className={`text-xl p-2 bg-blue-100 text-blue-700 rounded-xl`}>
        <BsSuitcaseLg />
      </div>

      <p className="leading-6">
        <span className="font-semibold">{name}</span> applied for a job{" "}
        <span className=" text-blue-700">{post}</span>
      </p>
    </div>
  );
}
