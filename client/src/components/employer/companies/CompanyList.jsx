import React, { useEffect } from "react";
import CompanyCard from "./CompanyCard";
import Pagination from "../../Pagination";
import { useDispatch, useSelector } from "react-redux";
import { toggleEmployerCompanyFilter } from "../../../slices/responsiveSlice";
import { FiFilter } from "react-icons/fi";
import Loading from "../../Loading";
import { setCompanySearchTotalPage } from "../../../slices/JobportalSearches/companySearchSlice";

export default function CompanyList({ data, isLoading, refetch }) {
  const { companySearchCurrentPage, companySearchTotalPage, companySearchOn } =
    useSelector((state) => state.companySearch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCompanySearchTotalPage(data?.numOfPages));
  }, [companySearchOn, data]);
  return isLoading ? (
    <Loading />
  ) : (
    <div className="flex flex-col gap-5">
      <button
        onClick={() => dispatch(toggleEmployerCompanyFilter())}
        className="xl:hidden block text-xl p-3 bg-gray-50 border border-gray-300 text-gray-400 rounded-lg w-fit"
      >
        <FiFilter />
      </button>
      <h1>{data?.totalCompanies} companies found</h1>
      {data?.companies?.length > 0 &&
        data.companies.map((item) => (
          <CompanyCard
            key={item._id}
            image={item.logo || "/nocompany.png"}
            name={item.companyName}
            category={item.industry}
            location={item.state}
            no={item.openJobs || ""}
            id={item._id}
          />
        ))}
      {data?.companies?.length < 1 && <h1> No companies found</h1>}
      {companySearchTotalPage > 1 && (
        <Pagination
          refetch={refetch}
          currentPage={companySearchCurrentPage}
          totalPage={companySearchTotalPage}
          companysearch
        />
      )}
    </div>
  );
}
