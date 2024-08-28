import React from "react";
import JobForm from "../../../components/employer/dashboard/postAJob/JobForm";

export default function PostAJob() {
  return (
    <div>
      <h1 className="text-xl my-3">Post A Job</h1>
      <p className="text-xs text-red-500">
        NB: You should complete your company profile inorder to post jobs
      </p>
      <JobForm />
    </div>
  );
}
