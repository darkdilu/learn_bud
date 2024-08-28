import React from "react";
import SinglePageHeader from "../../../../components/employer/dashboard/mangeJobs/SinglePageHeader";
import { useGetMySingleJobQuery } from "../../../../slices/employerApiSlice";
import { useParams } from "react-router-dom";
import Loading from "../../../../components/Loading";
import SinglePageDetails from "../../../../components/employer/dashboard/mangeJobs/SinglePageDetails";

export default function SingleJob() {
  const { id } = useParams();
  const { data, isLoading } = useGetMySingleJobQuery(id);
  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <SinglePageHeader data={data} />
      <SinglePageDetails data={data} />
    </div>
  );
}
