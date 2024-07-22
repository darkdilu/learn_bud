import React from "react";
import CandidateCard from "./CandidateCard";
import { useSelector } from "react-redux";
import { useGetAllCandidatesQuery } from "../../../slices/employerApiSlice";
import Loading from "../../Loading";

export default function FeaturedCandidates() {
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

  return isLoading ? (
    <Loading />
  ) : (
    <section className="minusheight bg-background2 rounded-lg mt-2 flex flex-col justify-center px-4">
      <div className="text-center my-5 mb-7">
        <h1 className="lg:text-3xl text-xl my-2">Featured Candidates</h1>
        <p className=" my-2">Here are some of our top candidates</p>
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 place-content-between gap-5">
        {data.candidates.length > 0 &&
          data.candidates.slice(-4).map((item) => (
            <div key={item._id}>
              <CandidateCard
                name={item.fullName}
                location={item.owner.address}
                image={item.profilePic}
                position={item.oneWord}
                id={item._id}
              />
            </div>
          ))}
      </div>
    </section>
  );
}
