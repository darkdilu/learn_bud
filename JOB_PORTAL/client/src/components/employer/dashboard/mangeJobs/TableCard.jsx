import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { FaRegBuilding } from "react-icons/fa";

export default function TableCard({ image, name, category, location }) {
  return (
    <div className="flex md:flex-row flex-col md:justify-between items-center md:px-10 p-3 rounded-xl">
      <div className="flex md:flex-row flex-col gap-4 items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img
            className="border rounded-full border-hover p-1"
            src={image}
          ></img>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-medium">{name}</h1>
          <div className="flex gap-5 text-sm">
            <p className="text-hover flex gap-2 items-center">
              <span>
                <FaRegBuilding />
              </span>
              {category}
            </p>
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <SlLocationPin />
              </span>
              {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
