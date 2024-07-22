import React from "react";
import JSSinglePageExtra from "./JSSinglePageExtra";
import JSSkillsDetails from "./JSSkillsDetails";
import JSCompanyDetail from "./JSCompanyDetail";
import MessageForm from "../../../MessageForm";

export default function JSSinglePageDetails({ data }) {
  return (
    <div className="flex lg:flex-row flex-col gap-3 w-full my-4">
      <div className="bg-background2 w-full rounded-lg p-3 lg:px-10">
        <h1 className="my-4 text-xl">Job Description</h1>
        <p
          className="text-gray-500 leading-9"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></p>
      </div>
      <div className="bg-background2 w-full lg:w-1/4 rounded-lg p-3 lg:px-8">
        <JSSinglePageExtra data={data} />
        <JSSkillsDetails data={data} />
        <JSCompanyDetail data={data} />
        <MessageForm data={data.owner} />
      </div>
    </div>
  );
}
