import React from "react";
import JSSingleJobHeader from "../../../components/jobseeker/jobs/singlejob/JSSingleJobHeader";
import { useParams } from "react-router-dom";
import { useGetSingleJobQuery } from "../../../slices/jobSeekerApiSlice";
import Loading from "../../../components/Loading";
import JSSinglePageDetails from "../../../components/jobseeker/jobs/singlejob/JSSinglePageDetails";

export default function JobSeekerSingleJobPage() {
  const { id } = useParams();
  const { data, isLoading, refetch } = useGetSingleJobQuery(id);
  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <JSSingleJobHeader data={data} refetchData={refetch} />
      <JSSinglePageDetails data={data} />
    </div>
  );
}
