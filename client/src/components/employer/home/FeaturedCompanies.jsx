import React from "react";
import CompanyCard from "./CompanyCard";
import { useSelector } from "react-redux";
import { useGetAllEmployerCompaniesQuery } from "../../../slices/employerApiSlice";
import Loading from "../../Loading";

export default function FeaturedCompanies() {
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
  console.log(data);
  return isLoading ? (
    <Loading />
  ) : (
    <section className="minusheight bg-background1 rounded-lg mt-2 flex flex-col justify-center px-4">
      <div className="text-center my-5 mb-7">
        <h1 className="lg:text-3xl text-xl my-2">Top Companies</h1>
        <p className=" my-2">
          Here are some of the leading companies registered with us
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 place-content-between gap-5">
        {data.companies.length > 0 &&
          data.companies.slice(-4).map((item) => (
            <div key={item._id}>
              <CompanyCard
                name={item.companyName}
                location={`${item.state}, ${item.country}`}
                image={item.logo}
                position={item.totalJobs.length}
                id={item._id}
              />
            </div>
          ))}
      </div>
    </section>
  );
}
