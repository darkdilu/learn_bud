import React from "react";
import { useSelector } from "react-redux";
import JobSearchSection from "../../../components/jobseeker/jobs/JobSearchSection";
import JobList from "../../../components/jobseeker/jobs/JobList";
import { useGetAllJobsQuery } from "../../../slices/jobSeekerApiSlice";

export default function JobPage() {
  const { showJobSeekerJobsFilter } = useSelector((state) => state.responsive);
  const {
    jobSearchKeyword,
    jobSearchLocation,
    jobSearchCategory,
    jobSearchGender,
    jobSearchJobType,
    jobSearchExperience,
    jobSearchQualification,
    jobSearchSort,
    jobSearchCurrentPage,
  } = useSelector((state) => state.jobSearch);
  const { data, isLoading, refetch } = useGetAllJobsQuery({
    jobSearchKeyword,
    jobSearchLocation,
    jobSearchCategory,
    jobSearchGender,
    jobSearchJobType,
    jobSearchExperience,
    jobSearchQualification,
    jobSearchSort,
    jobSearchCurrentPage,
  });
  return (
    <div className="">
      <h1 className="form-title mb-8 text-2xl font-semibold text-center">
        Jobs
      </h1>
      <div className="flex xl:flex-row flex-col justify-start items-start gap-5">
        <div
          className={`xl:block ${
            showJobSeekerJobsFilter
              ? "w-full"
              : "hidden sticky left-0 top-20 min-h-screen max-w-96 w-96"
          } bg-background1  rounded-xl py-10 px-3`}
        >
          <JobSearchSection refetch={refetch} />
        </div>
        <div className="w-full bg-background2 rounded-xl py-10 lg:px-10 md:px-5 px-3">
          <JobList data={data} isLoading={isLoading} refetch={refetch} />
        </div>
      </div>
    </div>
  );
}
