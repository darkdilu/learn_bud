import React from "react";
import SAStarHeading from "./SAStarHeading";
import SAUniversity from "./SAUniversity";

export default function SASixthSection() {
  return (
    <div className="my-10">
      <div className="flex flex-col justify-center items-center w-full mt-5">
        <SAStarHeading title={"UNIVERSITIES"} />
        <h1 className="text-6xl text-zinc-950 my-10 animate-slideInBottom">
          Best Universities to Keep in mind
        </h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 my-5 md:mt-10 p-5">
        <SAUniversity image={"/university/university1.png"} />
        <SAUniversity image={"/university/university2.png"} />
        <SAUniversity image={"/university/university3.png"} />
        <SAUniversity image={"/university/university4.png"} />
        <SAUniversity image={"/university/university5.png"} />
        <SAUniversity image={"/university/university6.png"} />
        <SAUniversity image={"/university/university7.png"} />
        <SAUniversity image={"/university/university8.png"} />
      </div>
    </div>
  );
}
