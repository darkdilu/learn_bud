import React from "react";
import { FaStar } from "react-icons/fa";

export default function SAStarHeading({ title }) {
  return (
    <h1 className="flex gap-3 items-center mt-8">
      <span className="text-red-700">
        <FaStar />
      </span>
      {title}
      <span className="text-red-700">
        <FaStar />
      </span>
    </h1>
  );
}
