import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import SearchElt from "../../SearchElt";
import SearchSelectElt from "../../SearchSelectElt";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { IoSchoolOutline } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { toggleEmployerCandidatesFilter } from "../../../slices/responsiveSlice";
import { BiSolidSortAlt } from "react-icons/bi";
import {
  resetCandidateSearch,
  setCandidateSearchCurrentPage,
  setCandidateSearchExperience,
  setCandidateSearchGender,
  setCandidateSearchKeyword,
  setCandidateSearchLocation,
  setCandidateSearchOn,
  setCandidateSearchQualification,
  setCandidateSearchSort,
} from "../../../slices/JobportalSearches/candidateSearchSlice";

const genderlist = ["Male", "Female", "Others"];
const Experiencelist = ["fresher", "0-1", "1-2", "2-4", "4-6", ">6"];
const Qualificationlist = [
  "Certificate",
  "Diploma",
  "Bachelors Degree",
  "Masters Degree",
  "Doctorate",
];

export default function SearchSection({ refetch }) {
  const dispatch = useDispatch();
  const [sort, setSort] = useState("Newest");
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("ALL");
  const [qualification, setQualification] = useState("ALL");
  const [experience, setExperience] = useState("ALL");

  function handleclick() {
    dispatch(setCandidateSearchSort(sort));
    dispatch(setCandidateSearchKeyword(keyword));
    dispatch(setCandidateSearchLocation(location));
    dispatch(setCandidateSearchGender(gender));
    dispatch(setCandidateSearchQualification(qualification));
    dispatch(setCandidateSearchExperience(experience));
    dispatch(setCandidateSearchCurrentPage(1));
    dispatch(setCandidateSearchOn());
    refetch();
  }

  function handleReset() {
    dispatch(resetCandidateSearch());
    setSort("Newest");
    setKeyword("");
    setLocation("");
    setGender("ALL");
    setQualification("ALL");
    setExperience("ALL");
    refetch();
  }
  return (
    <div
      className={` flex flex-col justify-start gap-8 h-full sticky left-0 top-0`}
    >
      <div className="flex justify-end xl:hidden">
        <button
          onClick={() => dispatch(toggleEmployerCandidatesFilter())}
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
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder={"Enter location"}
      />
      <SearchSelectElt
        title={"Gender"}
        icon={<MdOutlineWorkOutline />}
        list={genderlist}
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <SearchSelectElt
        title={"Experience Level"}
        icon={<GrUserExpert />}
        list={Experiencelist}
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
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
