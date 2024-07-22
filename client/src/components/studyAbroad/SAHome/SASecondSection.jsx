import React from "react";
import SAStarHeading from "./SAStarHeading";
import SASeconsSectionCard from "./SASeconsSectionCard";
import { secondSectionCardDetails } from "../../../utils/studyabroad/homepagedata";

export default function SASecondSection() {
  return (
    <div className="text-center w-full my-10">
      <div className="flex flex-col justify-center items-center w-full mt-5">
        <SAStarHeading title={"HOW WE HELP CLIENT"} />
        <h1 className="text-6xl text-zinc-950 my-10 animate-slideInBottom">
          Expertise from Seasoned Professionals
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-5 md:mt-10">
        {secondSectionCardDetails.map((x) => (
          <SASeconsSectionCard
            key={x.id}
            logo={x.logo}
            title={x.title}
            desc={x.desc}
          />
        ))}
      </div>
    </div>
  );
}
