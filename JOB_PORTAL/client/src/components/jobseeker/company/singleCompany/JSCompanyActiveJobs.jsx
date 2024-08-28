import React from "react";
import JobCard from "../../../employer/companies/companySingle/JobCard";

export default function JSCompanyActiveJobs({ data }) {
  return (
    <div>
      <h1 className="my-4 text-xl">Active Jobs</h1>
      <div className="flex flex-col gap-3">
        {" "}
        {data &&
          data.map((x) => (
            <JobCard
              key={x._id}
              seeker
              id={x._id}
              image={x.owner.logo ? x.owner.logo : "/nocompany.png"}
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
