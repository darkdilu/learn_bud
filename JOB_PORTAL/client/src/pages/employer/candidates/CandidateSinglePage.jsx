import React from "react";
import HeaderPart from "../../../components/employer/candidates/candidateSingle/HeaderPart";
import CandidateDetails from "../../../components/employer/candidates/candidateSingle/CandidateDetails";
import { useGetSingleCandidateQuery } from "../../../slices/employerApiSlice";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Loading";

export default function CandidateSinglePage() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleCandidateQuery(id);
  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <HeaderPart data={data} />
      <CandidateDetails data={data} />
    </div>
  );
}
