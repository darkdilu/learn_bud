import React from "react";
import SearchSection from "../../../components/employer/candidates/SearchSection";
import CandidateList from "../../../components/employer/candidates/CandidateList";
import { useSelector } from "react-redux";
import { useGetAllCandidatesQuery } from "../../../slices/employerApiSlice";

export default function CandidatesPage() {
  const { showEmployerCandidatesFilter } = useSelector(
    (state) => state.responsive
  );
  const {
    candidateSearchKeyword,
    candidateSearchLocation,
    candidateSearchGender,
    candidateSearchExperience,
    candidateSearchQualification,
    candidateSearchSort,
    candidateSearchCurrentPage,
  } = useSelector((state) => state.candidateSearch);
  const { data, isLoading, refetch } = useGetAllCandidatesQuery({
    candidateSearchKeyword,
    candidateSearchLocation,
    candidateSearchGender,
    candidateSearchExperience,
    candidateSearchQualification,
    candidateSearchSort,
    candidateSearchCurrentPage,
  });
  return (
    <div>
      <h1 className="form-title mb-8 text-2xl font-semibold text-center">
        Candidates
      </h1>
      <div className="flex xl:flex-row flex-col justify-start items-start gap-5">
        <div
          className={`xl:block ${
            showEmployerCandidatesFilter
              ? "w-full"
              : "hidden sticky left-0 top-20 min-h-screen max-w-96 w-96"
          } bg-background1  rounded-xl py-10 px-3`}
        >
          <SearchSection refetch={refetch} />
        </div>
        <div className="w-full bg-background2 rounded-xl py-10 lg:px-10 md:px-5 px-3">
          <CandidateList data={data} isLoading={isLoading} refetch={refetch} />
        </div>
      </div>
    </div>
  );
}
