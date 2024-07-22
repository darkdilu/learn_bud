import React from "react";
import SAStarHeading from "./SAStarHeading";
import { thirdSectionCardDetails } from "../../../utils/studyabroad/homepagedata";
import SASeconsSectionCard from "./SASeconsSectionCard";

export default function SAThirdSection() {
  return (
    <div className="text-center w-full bg-zinc-900 text-zinc-300 rounded-lg my-10">
      <div className="flex flex-col justify-center items-center w-full mt-5">
        <SAStarHeading title={"SERVICES"} />
        <h1 className="text-6xl text-zinc-300 my-10 animate-slideInBottom">
          Easy Study Abroad
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 my-5 md:mt-10 p-5">
        {thirdSectionCardDetails.map((x) => (
          <SASeconsSectionCard
            key={x.id}
            logo={x.logo}
            title={x.title}
            desc={x.desc}
            thirdSection
          />
        ))}
      </div>
    </div>
  );
}
