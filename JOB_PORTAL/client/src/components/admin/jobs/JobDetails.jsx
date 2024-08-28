import React from "react";

import DetailElement from "../DetailElement";
import { description } from "../../../utils/data2";

export default function JobDetails({ job }) {
  return (
    <>
      <section className="bg-secondary p-3 rounded-lg">
        <DetailElement title={"Posted By"} content={job?.company || "Google"} />
        <DetailElement
          title={"Posted"}
          content={job?.createdAt || "2 days ago"}
        />
        <DetailElement title={"Location"} content={job?.location || "Remote"} />
        <DetailElement
          title={"Job Type"}
          content={job?.jobType || "Full-Time"}
        />
        <DetailElement
          title={"Salary"}
          content={`${job?.salary ? `${job.salary} LPA` : `5 LPA`}`}
        />
        <DetailElement
          title={"Skills"}
          content={job?.skills || "Html, css, react, python"}
        />
      </section>
      <section className="bg-secondary p-3 rounded-lg mt-2">
        <h1 className="font-semibold mb-2">Description</h1>
        <p className="leading-normal">{description.desc}</p>
      </section>
    </>
  );
}
