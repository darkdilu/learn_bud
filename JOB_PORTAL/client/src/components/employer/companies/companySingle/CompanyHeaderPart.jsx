import React from "react";
import { BsClockHistory, BsSuitcase } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function CompanyHeaderPart({ data }) {
  return (
    <div className="flex md:flex-row flex-col md:justify-between bg-background2 items-center md:px-10 p-3  rounded-xl">
      <div className="flex md:flex-row flex-col gap-4 items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <img src={data.company.logo || "/nocompany.png"}></img>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-medium">{data.company.companyName}</h1>
          <div className="flex gap-5 md:flex-row flex-col text-sm">
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <SlLocationPin />
              </span>
              {data.company.state}
            </p>
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <BsSuitcase />
              </span>
              {data.company.industry}
            </p>
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <BsClockHistory />
              </span>
              Member since, {data.company.createdAt.toString().slice(0, 10)}
            </p>
          </div>
          <div className="px-2 py-2 text-xs bg-primary w-fit text-gray-500 rounded-lg">
            Active Jobs: {data.totalJobs.length}
          </div>
        </div>
      </div>
      <div className="mt-3 md:mt-0">
        <Link
          to={"/employer/companies"}
          className="px-3 py-3 bg-ascent hover:bg-hover text-secondary rounded-lg mr-2"
        >
          Back
        </Link>
      </div>
    </div>
  );
}
