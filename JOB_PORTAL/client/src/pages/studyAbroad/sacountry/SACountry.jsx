import React from "react";
import SACountryPageCard from "../../../components/studyAbroad/SACountry/SACountryPageCard";
import { countryData } from "../../../utils/studyabroad/countryData";

export default function SACountry() {
  return (
    <div className="bg-zinc-900 text-zinc-300 rounded-lg p-3">
      <h1 className="text-4xl my-3">Where Do you Want to go</h1>
      <div className="h-[1px] w-full bg-red-700 mb-10"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-3">
        {countryData.map((x) => (
          <SACountryPageCard
            key={x.id}
            id={x.id}
            name={x.name}
            flag={x.flag}
            bg={x.bg}
          />
        ))}
      </div>
    </div>
  );
}
