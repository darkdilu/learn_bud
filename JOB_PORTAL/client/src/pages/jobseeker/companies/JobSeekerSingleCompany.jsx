import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetCompanyActiveJobsQuery,
  useGetSingleCompanyQuery,
} from "../../../slices/jobSeekerApiSlice";
import Loading from "../../../components/Loading";
import JSSingleCompanyHeader from "../../../components/jobseeker/company/singleCompany/JSSingleCompanyHeader";
import JSCompanyPageDetail from "../../../components/jobseeker/company/singleCompany/JSCompanyPageDetail";

export default function JobSeekerSingleCompany() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleCompanyQuery(id);
  const { data: data2, isLoading: isLoading2 } =
    useGetCompanyActiveJobsQuery(id);
  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <JSSingleCompanyHeader data={data} openJobs={data2?.length} />
      <JSCompanyPageDetail data={data} isLoading={isLoading2} data2={data2} />
    </div>
  );
}
