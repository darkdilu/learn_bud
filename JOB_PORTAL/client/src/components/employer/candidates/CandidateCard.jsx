import React from "react";
import { IoCashOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { professionalSkills } from "../../../utils/skills";
import { Link } from "react-router-dom";

export default function CandidateCard({
  image,
  name,
  position,
  location,
  currentCTC,
  id,
}) {
  return (
    <div className="flex md:flex-row flex-col gap-3 md:justify-between items-center md:px-10 p-3 border border-primary shadow-md rounded-xl">
      <div className="flex md:flex-row flex-col gap-4 items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img src={image}></img>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-medium">{name}</h1>
          <div className="flex flex-col md:flex-row gap-5 text-sm">
            <p className="text-hover">{position}</p>
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <SlLocationPin />
              </span>
              {location}
            </p>
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <IoCashOutline />
              </span>
              {currentCTC} CTC
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {professionalSkills.slice(0, 6).map((item) => (
              <div
                className="px-2 py-2 text-xs bg-background1 text-center text-gray-500 rounded-lg"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-3 md:my-0">
        <Link
          to={`/employer/candidates/${id}`}
          className="px-3 py-3 bg-primary hover:bg-ascent hover:text-secondary rounded-lg"
        >
          View profile
        </Link>
      </div>
    </div>
  );
}
