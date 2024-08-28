import React from "react";
import CompanyHeaderPart from "../../../components/employer/companies/companySingle/CompanyHeaderPart";
import CompanyDetails from "../../../components/employer/companies/companySingle/CompanyDetails";
import { useGetSingleECompanyQuery } from "../../../slices/employerApiSlice";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Loading";

export default function CompanySinglePage() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleECompanyQuery(id);
  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <CompanyHeaderPart data={data} />
      <CompanyDetails data={data} />
    </div>
  );
}
