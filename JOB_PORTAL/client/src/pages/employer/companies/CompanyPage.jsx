import React from "react";
import SearchSectionCompany from "../../../components/employer/companies/SearchSectionCompany";
import CompanyList from "../../../components/employer/companies/CompanyList";
import { useSelector } from "react-redux";
import { useGetAllEmployerCompaniesQuery } from "../../../slices/employerApiSlice";

export default function CompanyPage() {
  const { showEmployerCompanyFilter } = useSelector(
    (state) => state.responsive
  );
  const {
    companySearchKeyword,
    companySearchLocation,
    companySearchIndustry,
    companySearchCurrentPage,
    companySearchSort,
  } = useSelector((state) => state.companySearch);
  const { data, isLoading, refetch } = useGetAllEmployerCompaniesQuery({
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
            showEmployerCompanyFilter
              ? "w-full"
              : "hidden sticky left-0 top-20 min-h-screen max-w-96 w-96"
          } bg-background2  rounded-xl py-10 px-3`}
        >
          <SearchSectionCompany refetch={refetch} />
        </div>
        <div className="w-full bg-background1 rounded-xl py-10 lg:px-10 md:px-5 px-3">
          <CompanyList data={data} isLoading={isLoading} refetch={refetch} />
        </div>
      </div>
    </div>
  );
}
