import React from "react";
import { FaRegStar } from "react-icons/fa";

export default function ProfessionalDetailListing({
  education,
  work,
  certificates,
  projects,
  heading,
  subheading,
  year,
  desc,
}) {
  return (
    <div className="flex gap-5 my-6">
      <div
        className={
          education
            ? "text-blue-700"
            : work
            ? "text-green-700"
            : certificates
            ? "text-yellow-700"
            : projects
            ? "text-red-700"
            : ""
        }
      >
        <FaRegStar />
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex gap-6 items-start">
          <div className="flex flex-col gap-3">
            <h1>{heading}</h1>
            <p
              className={
                education
                  ? "text-blue-700"
                  : work
                  ? "text-green-700"
                  : certificates
                  ? "text-yellow-700"
                  : projects
                  ? "text-red-700"
                  : ""
              }
            >
              {subheading}
            </p>
          </div>
          <div
            className={`px-2 py-2 rounded-lg ${
              education
                ? "text-blue-700 bg-blue-100"
                : work
                ? "text-green-700 bg-green-100"
                : certificates
                ? "text-yellow-700 bg-yellow-100"
                : projects
                ? "text-red-700 bg-red-100"
                : ""
            }`}
          >
            <p>{year}</p>
          </div>
        </div>
        <p className="text-gray-500 text-sm">{desc}</p>
      </div>
    </div>
  );
}
