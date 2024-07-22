import React from "react";
import { Link } from "react-router-dom";

export default function SASingleCountryTop({ country }) {
  return (
    <div className="bg-zinc-900 text-zinc-300 rounded-lg p-3">
      <div className="flex justify-between items-center my-3 ">
        <h1 className="text-4xl ">
          Study in {country?.name}{" "}
          <span>
            <img
              src={country?.flag}
              className="w-10 h-10 overflow-hidden rounded-full inline-block"
            ></img>
          </span>
        </h1>
        <Link
          to={"/study-abroad/country"}
          className="p-2 bg-red-700 rounded-md text-zinc-300 hover:bg-red-800 nav-link"
        >
          Back
        </Link>
      </div>

      <div className="h-[1px] w-full bg-red-700 mb-5"></div>
    </div>
  );
}
