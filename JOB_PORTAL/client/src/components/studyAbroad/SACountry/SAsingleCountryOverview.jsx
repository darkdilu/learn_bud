import React from "react";

export default function SAsingleCountryOverview({ country }) {
  return (
    <div className="flex flex-col md:flex-row gap-5 my-10 p-4 w-full md:w-3/4 mx-auto">
      <div>
        <img src={country?.bg} className="rounded-lg"></img>
      </div>
      <div className="flex flex-col justify-start gap-5">
        <div>
          <h1 className="text-3xl mb-3">Overview</h1>
          <p className="text-sm leading-5">
            lorem ipsom lorem ipsom lorem ipsomlorem ipsomlorem ipsomlorem ipsom
            lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem
            ipsom lorem ipsom lorem ipsom
          </p>
        </div>
        <div>
          <h1 className="text-3xl mb-3">Quick facts</h1>
          <p className="text-sm leading-5">
            lorem ipsom lorem ipsom lorem ipsomlorem ipsomlorem ipsomlorem ipsom
            lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem
            ipsom lorem ipsom lorem ipsom
          </p>
        </div>
      </div>
    </div>
  );
}
