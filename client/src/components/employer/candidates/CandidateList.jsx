import React, { useEffect } from "react";
import CandidateCard from "./CandidateCard";
import Pagination from "../../Pagination";
import { FiFilter } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toggleEmployerCandidatesFilter } from "../../../slices/responsiveSlice";
import Loading from "../../Loading";
import { setCandidateSearchTotalPage } from "../../../slices/JobportalSearches/candidateSearchSlice";

export default function CandidateList({ data, isLoading, refetch }) {
  const {
    candidateSearchCurrentPage,
    candidateSearchTotalPage,
    candidateSearchOn,
  } = useSelector((state) => state.candidateSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCandidateSearchTotalPage(data?.numOfPages));
  }, [data, candidateSearchOn]);
  return isLoading ? (
    <Loading />
  ) : (
    <div className="flex flex-col gap-5">
      <button
        onClick={() => dispatch(toggleEmployerCandidatesFilter())}
        className="xl:hidden block text-xl p-3 bg-gray-50 border border-gray-300 text-gray-400 rounded-lg w-fit"
      >
        <FiFilter />
      </button>
      <h1>{data?.totalCandidates} candidates found</h1>
      {data?.candidates?.length > 0 &&
        data.candidates.map((item) => (
          <CandidateCard
            key={item._id}
            image={item.profilePic || item.owner.image || "/nouser.png"}
            name={item.fullName}
            position={item.oneWord ? item.oneWord : ""}
            location={item.preferredLocation ? item.preferredLocation[0] : ""}
            currentCTC={item.currentSalary ? item.currentSalary : ""}
            id={item._id}
          />
        ))}
      {data?.candidates?.length < 1 && <h1> No candidates found</h1>}
      {candidateSearchTotalPage > 1 && (
        <Pagination
          refetch={refetch}
          currentPage={candidateSearchCurrentPage}
          totalPage={candidateSearchTotalPage}
          candidatesearch
        />
      )}
    </div>
  );
}
