import React from "react";
import JobTable from "../../../../components/employer/dashboard/mangeJobs/Table";
import Pagination from "../../../../components/Pagination";
import { useGetMyJobsQuery } from "../../../../slices/employerApiSlice";

export default function ManageJobs() {
  const { data } = useGetMyJobsQuery();
  return (
    <div>
      <h1 className="text-xl my-3">My Jobs</h1>
      <div className="my-4">
        <JobTable />
      </div>
      {data?.length > 10 && <Pagination />}
    </div>
  );
}
