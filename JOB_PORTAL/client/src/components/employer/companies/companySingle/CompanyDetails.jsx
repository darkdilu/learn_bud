import React from "react";
import CompanyExtraDetails from "./CompanyExtraDetails";
import ActiveJobs from "./ActiveJobs";
import SocialMedia from "../../../SocialMedia";
import MessageForm from "../../../MessageForm";

export default function CompanyDetails({ data }) {
  return (
    <div className="flex lg:flex-row flex-col gap-3 w-full my-4">
      <div className="bg-background2 w-full rounded-lg p-3 lg:px-10">
        <h1 className="my-4 text-xl">About Company</h1>
        <p className="text-gray-500 leading-9">{data.company.about}</p>
        <ActiveJobs data={data.totalJobs} logo={data.company.logo} />
      </div>
      <div className="bg-background1 w-full lg:w-1/4 rounded-lg p-3 lg:px-8">
        <CompanyExtraDetails data={data.company} />
        <SocialMedia />
        <MessageForm data={data.company} />
      </div>
    </div>
  );
}
