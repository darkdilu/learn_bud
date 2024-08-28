import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

function Pagination() {
  return (
    <div className="flex items-center gap-3 md:gap-8">
      <button className="text-xs md:text-xl bg-ascent text-primary p-2 rounded hover:bg-hover">
        <GoArrowLeft />
      </button>
      <p className="text-xs md:text-lg">
        Page <span className=" font-semibold">1</span> of{" "}
        <span className="font-semibold">10</span>
      </p>
      <button className="text-xs md:text-xl bg-ascent text-primary p-2 rounded hover:bg-hover">
        <GoArrowRight />
      </button>
    </div>
  );
}

export default Pagination;
