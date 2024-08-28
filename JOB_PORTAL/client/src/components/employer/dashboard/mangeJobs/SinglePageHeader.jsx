import React from "react";
import { BsClockHistory, BsSuitcase } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { GiMoneyStack } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function SinglePageHeader({ data }) {
  return (
    <div className="flex md:flex-row flex-col md:justify-between bg-background2 items-center md:px-10 p-3  rounded-xl">
      <div className="flex md:flex-row flex-col gap-4 items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img src={data.owner.logo ? data.owner.logo : "/nocompany.png"}></img>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-medium">{data.jobTitle}</h1>
          <div className="flex gap-5 md:flex-row flex-col text-sm">
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <SlLocationPin />
              </span>
              {data.jobLocation}
              {", "}
              {data.jobPlace}
            </p>
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <BsSuitcase />
              </span>
              {data.category}
            </p>
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <BsClockHistory />
              </span>
              posted on, {data.createdAt.toString().slice(0, 10)}
            </p>
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <GiMoneyStack />
              </span>
              {data.salary} LPA
            </p>
          </div>
          <div className="flex gap-5 md:flex-row flex-col text-sm">
            {data.skills.slice(0, 3).map((x) => (
              <div
                className="p-2 bg-background1 text-center rounded-md"
                key={x}
              >
                {x}
              </div>
            ))}
          </div>
          <h1 className="text-sm text-gray-500">
            Total Applications: {data.applied.length}
          </h1>
        </div>
      </div>
      <Link
        to={"/employer/dashboard/manage-jobs"}
        className="p-3 rounded-lg bg-ascent text-secondary hover:bg-hover"
      >
        Back
      </Link>
    </div>
  );
}
