import React from "react";
import SAFourthSectionStats from "./SAFourthSectionStats";
import SAStarHeading from "./SAStarHeading";
import SACountryCard from "./SACountryCard";

export default function SAFourthSection() {
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 py-10">
        <SAFourthSectionStats
          stat={"30K"}
          desc={"we have worked with clients"}
        />
        <SAFourthSectionStats
          stat={"100%"}
          desc={"Successfull visa process Rate"}
        />
        <SAFourthSectionStats
          stat={"5 DAYS"}
          desc={"Application Approval Processing Time"}
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full mt-5">
        <SAStarHeading title={"COUNTRIES"} />
        <h1 className="text-6xl text-zinc-950 my-10 animate-slideInBottom">
          Best Countries to study Abroad
        </h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 my-5 md:mt-10 p-5">
        <SACountryCard flag={"/country/canadaflag.jpg"} name={"Canada"} />
        <SACountryCard flag={"/country/flaguk.jpg"} name={"UK"} />
        <SACountryCard flag={"/country/flagaustralia.jpg"} name={"Australia"} />
        <SACountryCard
          flag={"/country/flagnewzealand.jpg"}
          name={"NewZealand"}
        />
      </div>
    </div>
  );
}
