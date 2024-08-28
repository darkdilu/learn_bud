import React from "react";
import { Link } from "react-router-dom";

export default function PostJobSection() {
  return (
    <section className="grid lg:grid-flow-row grid-flow-col lg:grid-cols-2 threesteppic minusheight bg-background1 rounded-lg mt-2">
      <div className="flex flex-col justify-center items-start gap-3 px-6">
        <h1 className="lg:text-3xl text-xl my-2">Iam a Recruiter.</h1>
        <p className=" my-2 leading-7">
          As a new recruiter, post a job for your company and select suitable
          candidates by exploring through thousands of available resumes.
        </p>
        <Link
          to={"/employer/dashboard/post-job"}
          className="bg-ascent py-5 px-2 text-secondary hover:bg-hover rounded-lg"
        >
          Post a Job
        </Link>
      </div>
      <div className=" overflow-hidden place-content-center">
        <img src="/employers-2.png" className="w-4/5 mx-auto"></img>
      </div>
    </section>
  );
}
