import React from "react";
import { IoCashOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useGetSingleCompanyQuery } from "../../../slices/jobSeekerApiSlice";
import Loading from "../../Loading";
import { useSelector } from "react-redux";

export default function JSDashJobCard({
  jobTitle,
  owner,
  salary,
  location,
  skills,
  jobId,
  shortlist,
  reject,
}) {
  const { data, isLoading } = useGetSingleCompanyQuery(owner);
  const { JSInfo } = useSelector((state) => state.allUsers);
  return (
    <div className="flex md:flex-row flex-col md:justify-between items-center md:px-10 p-3 border border-primary shadow-md rounded-xl">
      <div className="flex md:flex-row flex-col gap-4 items-center">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <img src={data.logo || "/nocompany.png"}></img>
          </div>
        )}

        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-medium">{jobTitle}</h1>
          <div className="flex gap-5 text-sm">
            {isLoading ? (
              <Loading />
            ) : (
              <p className="text-hover">{data.companyName}</p>
            )}

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
              {salary} CTC
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {skills.slice(0, 3).map((item) => (
              <div
                className="px-2 py-2 text-xs bg-primary text-center text-gray-500 rounded-lg"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
          {shortlist && reject && (
            <>
              {shortlist?.includes(JSInfo._id) ? (
                <h1 className="p-2 w-fit rounded-md bg-green-400 text-green-800">
                  ShortListed
                </h1>
              ) : reject?.includes(JSInfo._id) ? (
                <h1 className="p-2 rounded-md w-fit bg-red-400 text-red-800">
                  Rejected
                </h1>
              ) : (
                <h1 className="p-2 rounded-md w-fit bg-yellow-400 text-yellow-800">
                  Pending
                </h1>
              )}
            </>
          )}

          <div className="flex gap-3 justify-between">
            <Link
              to={`/jobseeker/jobs/${jobId}`}
              className="text-blue-700 bg-blue-100 hover:bg-blue-200 p-2 rounded-xl"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
