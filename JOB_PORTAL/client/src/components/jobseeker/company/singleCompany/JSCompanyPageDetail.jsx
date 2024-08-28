import React from "react";
import SocialMedia from "../../../SocialMedia";
import JSCompanyExtra from "./JSCompanyExtra";
import MessageForm from "../../../MessageForm";
import Loading from "../../../Loading";
import JSCompanyActiveJobs from "./JSCompanyActiveJobs";

export default function JSCompanyPageDetail({ data, data2, isLoading }) {
  return (
    <div className="flex lg:flex-row flex-col gap-3 w-full my-4">
      <div className="bg-background2 w-full rounded-lg p-3 lg:px-10">
        <h1 className="my-4 text-xl">About Company</h1>
        <p
          className="text-gray-500 leading-9"
          dangerouslySetInnerHTML={{ __html: data.about }}
        ></p>
        {isLoading ? <Loading /> : <JSCompanyActiveJobs data={data2} />}
      </div>
      <div className="bg-background1 w-full lg:w-1/4 rounded-lg p-3 lg:px-8">
        <JSCompanyExtra data={data} />
        <SocialMedia />
        <MessageForm data={data} />
      </div>
    </div>
  );
}
