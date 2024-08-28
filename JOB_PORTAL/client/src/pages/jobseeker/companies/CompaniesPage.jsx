import React from "react";
import { useSelector } from "react-redux";
import JSCompanySearchSection from "../../../components/jobseeker/company/JSCompanySearchSection";
import JSCompanyList from "../../../components/jobseeker/company/JSCompanyList";
import { useGetAllCompaniesQuery } from "../../../slices/jobSeekerApiSlice";

export default function CompaniesPage() {
  const { showJobSeekerCompanyFilter } = useSelector(
    (state) => state.responsive
  );
  const {
    companySearchKeyword,
    companySearchLocation,
    companySearchIndustry,
    companySearchCurrentPage,
    companySearchSort,
  } = useSelector((state) => state.companySearch);
  const { data, isLoading, refetch } = useGetAllCompaniesQuery({
    companySearchKeyword,
    companySearchLocation,
    companySearchIndustry,
    companySearchCurrentPage,
    companySearchSort,
  });
  return (
    <div>
      <h1 className="form-title mb-8 text-2xl font-semibold text-center">
        Companies
      </h1>
      <div className="flex xl:flex-row flex-col justify-start items-start gap-5">
        <div
          className={`xl:block ${
            showJobSeekerCompanyFilter
              ? "w-full"
              : "hidden sticky left-0 top-20 min-h-screen max-w-96 w-96"
          } bg-background2  rounded-xl py-10 px-3`}
        >
          <JSCompanySearchSection refetch={refetch} />
        </div>
        <div className="w-full bg-background1 rounded-xl py-10 lg:px-10 md:px-5 px-3">
          <JSCompanyList data={data} isLoading={isLoading} refetch={refetch} />
        </div>
      </div>
    </div>
  );
}
