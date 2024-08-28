import React from "react";
import JobCard from "./JobCard";

export default function ActiveJobs({ data, logo }) {
  return (
    <div>
      <h1 className="my-4 text-xl">Active Jobs</h1>
      <div className="flex flex-col gap-3">
        {" "}
        {data.length > 0 &&
          data.map((x) => (
            <JobCard
              key={x._id}
              image={logo || "/nocompany.png"}
              name={x.jobTitle}
              joblocation={x.jobLocation}
              category={x.category}
              jobtype={x.jobType}
              salary={x.salary}
              open={x.applied.length.toString()}
            />
          ))}
      </div>
    </div>
  );
}
