import React from "react";
import { Link } from "react-router-dom";

export default function CompanyCard({ name, location, image, position, id }) {
  return (
    <div className="flex gap-2 justify-between items-center border my-2 border-background1 rounded-md shadow-md nav-link p-8 hover:m-0">
      <div className="flex gap-3 items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img src={image}></img>
        </div>
        <div>
          <h1 className="text-lg">{name}</h1>
          <p className="text-base">{`${position} open position`}</p>
          <p className="flex gap-2 items-center text-xs font-thin">
            {location}
          </p>
        </div>
      </div>

      <Link
        to={`/employer/companies/${id}`}
        className="px-3 py-3 bg-primary hover:bg-ascent hover:text-secondary rounded-lg"
      >
        View Company
      </Link>
    </div>
  );
}
