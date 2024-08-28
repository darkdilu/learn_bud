import React from "react";
import { BsClockHistory } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function JSCompanyCard({
  name,
  image,
  Industry,
  location,
  created,
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
          <div className="flex gap-5 text-sm">
            <p className="text-hover">{Industry}</p>
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <SlLocationPin />
              </span>
              {location}
            </p>
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <BsClockHistory />
              </span>
              Member Since, {created?.toString().slice(0, 10)}
            </p>
          </div>
        </div>
      </div>
      <div className="my-3 md:my-0">
        <Link
          to={`/jobseeker/companies/${id}`}
          className="px-3 py-3 bg-primary hover:bg-ascent hover:text-secondary rounded-lg"
        >
          View Company
        </Link>
      </div>
    </div>
  );
}
