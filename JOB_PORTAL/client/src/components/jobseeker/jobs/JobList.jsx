import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleJobSeekerJobsFilter } from "../../../slices/responsiveSlice";
import { FiFilter } from "react-icons/fi";
import JobCard from "./JobCard";
import Pagination from "../../Pagination";
import Loading from "../../Loading";
import { setJobsearchTotalPage } from "../../../slices/JobportalSearches/jobSearchSlice";

export default function JobList({ isLoading, data, refetch }) {
  const { jobSearchOn, jobSearchTotalPage, jobSearchCurrentPage } = useSelector(
    (state) => state.jobSearch
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setJobsearchTotalPage(data?.numOfPages));
  }, [data, jobSearchOn]);
  return isLoading ? (
    <Loading />
  ) : (
    <div className="flex flex-col gap-5">
      <button
        onClick={() => dispatch(toggleJobSeekerJobsFilter())}
        className="xl:hidden block text-xl p-3 bg-gray-50 border border-gray-300 text-gray-400 rounded-lg w-fit"
      >
        <FiFilter />
      </button>
      <h1>{data?.totalJobs} jobs found</h1>
      {data?.jobs?.length > 0 &&
        data.jobs.map((x) => (
          <JobCard
            key={x._id}
            name={x.jobTitle}
            company={x.owner.companyName}
            location={x.jobLocation}
            category={x.category}
            created={x.createdAt}
            currentCTC={x.salary}
            skills={x.skills}
            id={x._id}
            jobPlace={x.jobPlace || ""}
            image={x.owner.logo ? x.owner.logo : "/nocompany.png"}
          />
        ))}
      {data?.jobs?.length < 1 && <h1> No jobs found</h1>}
      {jobSearchTotalPage > 1 && (
        <Pagination
          currentPage={jobSearchCurrentPage}
          totalPage={jobSearchTotalPage}
          refetch={refetch}
          jobsearch
        />
      )}
    </div>
  );
}
