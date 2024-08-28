import React from "react";
import { IoCashOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { BsClockHistory } from "react-icons/bs";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function HeaderPart({ data }) {
  function handleDownload(url, name) {
    if (!url || url === "") {
      toast.error("No resume found");
      return;
    }
    const link = document.createElement("a");
    link.href = url;
    link.target = "blank";
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className="flex md:flex-row flex-col md:justify-between bg-background2 items-center md:px-10 p-3  rounded-xl">
      <div className="flex md:flex-row flex-col gap-4 items-center">
        <div className=" w-24 h-24 rounded-full overflow-hidden">
          <img
            src={
              data.profilePic
                ? data.profilePic
                : data.owner.image
                ? data.owner.image
                : "/nouser.png"
            }
          ></img>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-medium">{data.fullName}</h1>
          <p className="text-hover">{data.oneWord ? data.oneWord : ""}</p>
          <div className="flex md:flex-row flex-col gap-5 text-sm">
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <SlLocationPin />
              </span>
              {data.preferredLocation ? data.preferredLocation[0] : ""}
            </p>
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <IoCashOutline />
              </span>
              {data.currentSalary} CTC
            </p>
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <BsClockHistory />
              </span>
              Member since, {data.createdAt.toString().slice(0, 10)}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {data.skills.slice(0, 3).map((item) => (
              <div
                className="px-2 py-2 text-xs text-center text-blue-500 bg-blue-100 rounded-lg"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 md:mt-0">
        <Link
          to={"/employer/candidates"}
          className="px-3 py-3 bg-ascent hover:bg-hover text-secondary rounded-lg mr-2"
        >
          Back
        </Link>
        <button
          onClick={() => handleDownload(data.resume, data.resumePublicId)}
          className="px-3 py-3 bg-ascent hover:bg-hover text-secondary rounded-lg"
        >
          Download CV
        </button>
      </div>
    </div>
  );
}
