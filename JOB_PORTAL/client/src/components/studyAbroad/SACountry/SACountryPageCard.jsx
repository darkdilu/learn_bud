import React from "react";
import { Link } from "react-router-dom";

export default function SACountryPageCard({ name, bg, flag, id }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-zinc-950 mx-1 hover:mx-2 hover:shadow-2xl hover:shadow-red-700 nav-link">
      <img className="w-full max-h-[400px]" src={bg} alt="Bulgaria" />
      <div className="px-6 py-4">
        <div className="flex justify-center -mt-12">
          <img
            className="w-16 h-16 rounded-full border-2 border-white"
            src={flag}
            alt="Flag"
          />
        </div>
        <div className="text-center my-4">
          <div className="font-bold text-xl my-2">{name}</div>
          <Link
            to={`/study-abroad/country/${id}`}
            className="text-zinc-300 p-2 my-3 rounded-md bg-red-700 hover:bg-red-950 nav-link"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
