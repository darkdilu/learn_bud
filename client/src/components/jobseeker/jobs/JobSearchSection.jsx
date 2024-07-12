import React, { useEffect, useState } from "react";
import { BiSolidSortAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toggleJobSeekerJobsFilter } from "../../../slices/responsiveSlice";
import SearchElt from "../../SearchElt";
import SearchSelectElt from "../../SearchSelectElt";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { TbCategory } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { IoSchoolOutline } from "react-icons/io5";
import {
  resetJobSearch,
  setJobsearchCategory,
  setJobsearchCurrentPage,
  setJobsearchExperience,
  setJobsearchGender,
  setJobsearchJobType,
  setJobsearchKeyword,
  setJobsearchLocation,
  setJobSearchOn,
  setJobsearchQualification,
  setJobsearchSort,
} from "../../../slices/JobportalSearches/jobSearchSlice";
const genderlist = ["Male", "Female", "Others"];
const Experiencelist = ["fresher", "0-1", "1-2", "2-4", "4-6", ">6"];
const Qualificationlist = [
  "Certificate",
  "Diploma",
  "Bachelors Degree",
  "Masters Degree",
  "Doctorate",
];

export default function JobSearchSection({ refetch }) {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("ALL");
  const [gender, setGender] = useState("ALL");
  const [jobType, setJobType] = useState("ALL");
  const [experience, setExperience] = useState("ALL");
  const [qualification, setQualification] = useState("ALL");
  const [sort, setSort] = useState("Newest");

  function handleclick() {
    dispatch(setJobsearchKeyword(keyword));
    dispatch(setJobsearchLocation(location));
    dispatch(setJobsearchCategory(category));
    dispatch(setJobsearchGender(gender));
    dispatch(setJobsearchJobType(jobType));
    dispatch(setJobsearchExperience(experience));
    dispatch(setJobsearchQualification(qualification));
    dispatch(setJobsearchSort(sort));
    dispatch(setJobsearchCurrentPage(1));
    dispatch(setJobSearchOn());
    refetch();
  }

  function handleReset() {
    dispatch(resetJobSearch());
    setCategory("ALL");
    setExperience("ALL");
    setQualification("ALL");
    setSort("Newest");
    setKeyword("");
    setLocation("");
    setGender("ALL");
    setJobType("ALL");
    refetch();
  }

  /*useEffect(() => {
    handleReset();
  }, []);*/

  return (
    <div
      className={` flex flex-col justify-start gap-8 h-full sticky left-0 top-0`}
    >
      <div className="flex justify-end xl:hidden">
        <button
          onClick={() => dispatch(toggleJobSeekerJobsFilter())}
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
        placeholder={"Job Title, Skills, Name...."}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <SearchElt
        title={"Location"}
        icon={<SlLocationPin />}
        placeholder={"Enter location"}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <SearchSelectElt
        title={"Category"}
        icon={<TbCategory />}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        list={[
          "Healthcare & Medical",
          "Software Development & IT",
          "Finance & Accounting",
          "Education & Training",
          "Engineering & Technical",
          "Construction & Skilled Trades",
          "Sales, Marketing & Advertising",
          "Customer Service & Support",
          "Human Resources & Recruitment",
          "Management & Executive",
        ]}
      />
      <SearchSelectElt
        title={"Gender"}
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        icon={<MdOutlineWorkOutline />}
        list={genderlist}
      />
      <SearchSelectElt
        title={"Job Type"}
        icon={<FaRegClock />}
        value={jobType}
        onChange={(e) => setJobType(e.target.value)}
        list={["Full-time", "Part-time", "Internship"]}
      />
      <SearchSelectElt
        title={"Experience Level"}
        icon={<GrUserExpert />}
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        list={Experiencelist}
      />
      <SearchSelectElt
        title={"Qualification"}
        value={qualification}
        onChange={(e) => setQualification(e.target.value)}
        icon={<IoSchoolOutline />}
        list={Qualificationlist}
      />
    </div>
  );
}
