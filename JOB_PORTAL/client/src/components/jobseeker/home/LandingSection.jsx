import React from "react";
import { CiSearch } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import LandingPageSmallSearch from "./LandingPageSmallSearch";
import { Link } from "react-router-dom";

export default function LandingSection() {
  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 minusheight rounded-lg shadow-md ">
      <div className="flex flex-col justify-center items-start gap-3 px-6">
        <h1 className="lg:text-5xl text-2xl my-2">
          Join us & Explore Thousands of Jobs
        </h1>
        <p className="my-2 opacity-40">
          Find Jobs, Employment and career opportunities.
        </p>
        <div className="flex flex-col xl:flex-row justify-between items-center w-full gap-5 mt-3 border border-ascent border-opacity-10 shadow-md p-2 xl:p-3 rounded-lg">
          <LandingPageSmallSearch
            title={"What"}
            placeholder={"Job Title or Company"}
            icon={<CiSearch />}
            seeker
          />
          <LandingPageSmallSearch
            title={"Where"}
            placeholder={"City or Postal code"}
            icon={<SlLocationPin />}
            seeker
          />

          <Link
            to={"/jobseeker/jobs"}
            className="bg-ascent text-sm px-1 py-2 lg:text-lg w-full text-center xl:w-auto lg:py-5 lg:px-2 text-secondary hover:bg-hover rounded-lg"
          >
            Find Jobs
          </Link>
        </div>
        <p className="mt-3">
          Popular Searches:{" "}
          <span className="opacity-40 ">Designer, developer, Devops....</span>
        </p>
      </div>
      <div className="hidden lg:block overflow-hidden place-content-center">
        <img src="/home-img.png" className=" saturate-100 w-4/5"></img>
      </div>
    </section>
  );
}
