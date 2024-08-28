import React from "react";
import SACountryFeatureComponent from "./SACountryFeatureComponent";

export default function SASingleCountryFeatures({ country }) {
  return (
    <div className="bg-zinc-900 text-zinc-300 rounded-lg p-3">
      <h1 className="text-3xl text-center text-zinc-300 mt-5">
        Why Study in {country?.name} ?
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 place-content-center gap-10 mt-5">
        <SACountryFeatureComponent />
        <SACountryFeatureComponent />
        <SACountryFeatureComponent />
        <SACountryFeatureComponent />
        <SACountryFeatureComponent />
        <SACountryFeatureComponent />
        <SACountryFeatureComponent />
        <SACountryFeatureComponent />
        <SACountryFeatureComponent />
      </div>
    </div>
  );
}
