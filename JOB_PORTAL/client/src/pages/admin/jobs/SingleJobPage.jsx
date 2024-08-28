import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { jobData, userData } from "../../../utils/data";
import JobDetails from "../../../components/admin/jobs/JobDetails";

import JobApplies from "../../../components/admin/jobs/JobApplies";

export default function SingleJobPage() {
  const { id } = useParams();
  const [job, setJob] = useState();

  useEffect(() => {
    const newId = parseInt(id);
    setJob(jobData.find((item) => item.id === newId));
  }, [id]);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="my-5 lg:text-2xl text-lg font-semibold">{job?.job}</h1>
        <div className="flex gap-1">
          <Link
            to={"/admin/jobs"}
            className="bg-ascent text-primary lg:text-lg text-sm p-2 rounded-md hover:bg-hover"
          >
            BACK
          </Link>
          <button className="bg-ascent text-primary lg:text-lg text-sm p-2 rounded-md hover:bg-hover">
            DISABLE
          </button>
          <button className="bg-red-500 text-primary lg:text-lg text-sm p-2 rounded-md hover:bg-red-400">
            DELETE
          </button>
        </div>
      </div>
      <JobDetails job={job} />
      <JobApplies job={job} data={userData} />
    </div>
  );
}
