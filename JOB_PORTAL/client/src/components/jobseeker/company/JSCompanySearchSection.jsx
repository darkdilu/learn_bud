import React, { useState } from "react";
import SearchElt from "../../SearchElt";
import { CiSearch } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import SearchSelectElt from "../../SearchSelectElt";
import { TbCategory } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { toggleJobSeekerCompanyFilter } from "../../../slices/responsiveSlice";
import { BiSolidSortAlt } from "react-icons/bi";
import {
  resetCompanySearch,
  setCompanySearchCurrentPage,
  setCompanySearchIndustry,
  setCompanySearchKeyword,
  setCompanySearchLocation,
  setCompanySearchOn,
  setCompanySearchSort,
} from "../../../slices/JobportalSearches/companySearchSlice";

export default function JSCompanySearchSection({ refetch }) {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("ALL");
  const [sort, setSort] = useState("Newest");

  function handleclick() {
    dispatch(setCompanySearchKeyword(keyword));
    dispatch(setCompanySearchLocation(location));
    dispatch(setCompanySearchIndustry(industry));
    dispatch(setCompanySearchSort(sort));
    dispatch(setCompanySearchCurrentPage(1));
    dispatch(setCompanySearchOn());
    refetch();
  }

  function handleReset() {
    dispatch(resetCompanySearch());
    setKeyword("");
    setLocation("");
    setIndustry("ALL");
    setSort("Newest");
    refetch();
  }
  return (
    <div className="flex flex-col justify-start gap-8 h-full sticky left-0 top-0">
      <div className="flex justify-end xl:hidden">
        <button
          onClick={() => dispatch(toggleJobSeekerCompanyFilter())}
          className="text-3xl"
        >
          <IoMdCloseCircleOutline />
        </button>
      </div>
      <button
        onClick={handleclick}
        className="p-2 rounded-md bg-ascent hover:bg-hover text-primary"
      >
        Search
      </button>
      <button
        onClick={handleReset}
        className="p-2 rounded-md bg-ascent hover:bg-hover text-primary"
      >
        Reset
      </button>
      <SearchSelectElt
        title={"sort"}
        isSort
        icon={<BiSolidSortAlt />}
        list={["Oldest"]}
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      />
      <SearchElt
        title={"Search by Keywords"}
        icon={<CiSearch />}
        placeholder={"Title, Skills, Name...."}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <SearchElt
        title={"Location"}
        icon={<SlLocationPin />}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder={"Enter location"}
      />
      <SearchSelectElt
        title={"Industry"}
        icon={<TbCategory />}
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
        list={[
          "Information Technology & Telecommunications",
          "Finance & Insurance",
          "Healthcare & Pharmaceuticals",
          "Education & Training",
          "Engineering & Manufacturing",
          "Construction & Real Estate",
          "Retail, Wholesale & E-commerce",
          "Hospitality, Travel & Tourism",
          "Media, Entertainment & Arts",
          "Government, Non-Profit & Public Services",
        ]}
      />
    </div>
  );
}
