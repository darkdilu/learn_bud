import React from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setJobsearchCurrentPage } from "../slices/JobportalSearches/jobSearchSlice";
import { setCompanySearchCurrentPage } from "../slices/JobportalSearches/companySearchSlice";
import { setCandidateSearchCurrentPage } from "../slices/JobportalSearches/candidateSearchSlice";

export default function Pagination({
  currentPage,
  totalPage,
  refetch,
  jobsearch,
  companysearch,
  candidatesearch,
  allApplicant,
}) {
  const dispatch = useDispatch();

  function prev() {
    if (currentPage === 1) return;
    if (jobsearch) dispatch(setJobsearchCurrentPage(currentPage - 1));
    if (companysearch) dispatch(setCompanySearchCurrentPage(currentPage - 1));
    if (candidatesearch)
      dispatch(setCandidateSearchCurrentPage(currentPage - 1));
    if (allApplicant) allApplicant(currentPage - 1);
    refetch();
  }

  function next() {
    if (currentPage === totalPage) return;
    if (jobsearch) dispatch(setJobsearchCurrentPage(currentPage + 1));
    if (companysearch) dispatch(setCompanySearchCurrentPage(currentPage + 1));
    if (candidatesearch)
      dispatch(setCandidateSearchCurrentPage(currentPage + 1));
    if (allApplicant) allApplicant(currentPage + 1);
    refetch();
  }

  return (
    <div className="flex items-center gap-4">
      <button
        className="text-3xl text-ascent rounded-full cursor-pointer hover:bg-hover hover:text-secondary"
        onClick={prev}
        disabled={currentPage === 1}
      >
        <FiArrowLeftCircle />
      </button>
      <h1>
        Page {currentPage} of {totalPage}
      </h1>
      <button
        className="text-3xl text-ascent rounded-full cursor-pointer hover:bg-hover hover:text-secondary"
        onClick={next}
        disabled={currentPage === totalPage}
      >
        <FiArrowRightCircle />
      </button>
    </div>
  );
}
