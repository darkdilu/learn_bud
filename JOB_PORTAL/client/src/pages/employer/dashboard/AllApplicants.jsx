import React from "react";
import ApplicantList from "../../../components/employer/dashboard/allApplicants/ApplicantList";

export default function AllApplicants() {
  return (
    <div>
      <h1 className="text-xl my-3">All Applicants</h1>
      <ApplicantList />
    </div>
  );
}
