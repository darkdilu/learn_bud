import React from "react";
import { FaUser } from "react-icons/fa6";

export default function SACountryFeatureComponent() {
  return (
    <div className=" flex flex-col justify-center items-center gap-4">
      <div className="text-zinc-300 bg-red-700 p-5 text-4xl rounded-full w-fit ">
        <FaUser />
      </div>
      <p>Lorem ipsom</p>
    </div>
  );
}
