import React from "react";
import { FaRegBuilding } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function JobCard({
  image,
  name,
  category,
  joblocation,
  jobtype,
  salary,
  open,
  seeker,
  id,
}) {
  return (
    <div className="flex md:flex-row flex-col md:justify-between bg-background1 items-center md:px-10 p-3 rounded-xl">
      <div className="flex md:flex-row flex-col gap-4 items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img src={image}></img>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-medium">{name}</h1>
          <div className="flex gap-5 text-sm">
            <p className="text-hover flex gap-2 items-center">
              <span>
                <FaRegBuilding />
              </span>
              {category}
            </p>
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <SlLocationPin />
              </span>
              {joblocation}
            </p>
          </div>
          <div className="flex gap-5 text-sm">
            <p className="text-gray-500 flex gap-2 items-center">{jobtype}</p>
            <p className="flex gap-2 items-center text-gray-500">
              {`${salary} CTC`}
            </p>
            {open && (
              <p className="text-gray-500 flex gap-2 items-center">
                {`${open} Applications`}
              </p>
            )}
          </div>
        </div>
      </div>
      {seeker && (
        <button>
          <Link
            to={seeker && `/jobseeker/jobs/${id}`}
            className="p-2 rounded-lg bg-ascent text-primary hover:bg-hover"
          >
            View Job
          </Link>
        </button>
      )}
    </div>
  );
}
