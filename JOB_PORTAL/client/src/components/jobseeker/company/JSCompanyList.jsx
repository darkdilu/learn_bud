import React, { useEffect } from "react";
import Pagination from "../../Pagination";
import { useDispatch, useSelector } from "react-redux";
import { FiFilter } from "react-icons/fi";
import JSCompanyCard from "./JSCompanyCard";
import { toggleJobSeekerCompanyFilter } from "../../../slices/responsiveSlice";
import Loading from "../../Loading";
import { setCompanySearchTotalPage } from "../../../slices/JobportalSearches/companySearchSlice";

export default function JSCompanyList({ data, isLoading, refetch }) {
  const dispatch = useDispatch();
  const { companySearchCurrentPage, companySearchTotalPage, companySearchOn } =
    useSelector((state) => state.companySearch);

  useEffect(() => {
    dispatch(setCompanySearchTotalPage(data?.numOfPages));
  }, [companySearchOn, data]);
  return isLoading ? (
    <Loading />
  ) : (
    <div className="flex flex-col gap-5">
      <button
        onClick={() => dispatch(toggleJobSeekerCompanyFilter())}
        className="xl:hidden block text-xl p-3 bg-gray-50 border border-gray-300 text-gray-400 rounded-lg w-fit"
      >
        <FiFilter />
      </button>
      <h1>{data?.totalCompanies} companies found</h1>
      {data?.companies?.length > 0 &&
        data.companies.map((x) => (
          <JSCompanyCard
            key={x._id}
            name={x.companyName}
            Industry={x.industry}
            image={x.logo ? x.logo : "/nocompany.png"}
            location={x.state}
            created={x.createdAt}
            id={x._id}
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
