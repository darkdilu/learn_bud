import React from "react";
import { FaCircleChevronRight } from "react-icons/fa6";

function ProgressComponent({ colorCode, title }) {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-2 m-1 lg:m-3 p-1 lg:p-3 ${colorCode}`}
    >
      <div className={`text-2xl lg:text-5xl`}>
        <FaCircleChevronRight />
      </div>
      <p className="text-sm lg:text-xl lg:my-2">{title}</p>
    </div>
  );
}

export default ProgressComponent;
