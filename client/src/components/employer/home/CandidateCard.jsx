import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function CandidateCard({ name, position, location, image, id }) {
  return (
    <div className="flex flex-col gap-2 items-center border my-2 border-background1 rounded-md shadow-md nav-link p-8 hover:my-0">
      <div className="w-20 h-20 rounded-full overflow-hidden">
        <img src={image}></img>
      </div>
      <h1 className="text-xl">{name}</h1>
      <p className="text-lg">{position}</p>
      <p className="flex gap-2 items-center text-sm font-thin">
        <span>
          <SlLocationPin />
        </span>
        {location}
      </p>
      <Link
        to={`/employer/candidates/${id}`}
        className="px-3 py-3 bg-primary hover:bg-ascent hover:text-secondary rounded-lg"
      >
        View Profile
      </Link>
    </div>
  );
}
