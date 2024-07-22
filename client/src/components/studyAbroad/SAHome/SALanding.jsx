import React from "react";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import SAStarHeading from "./SAStarHeading";

export default function SALanding() {
  return (
    <div className="bg-gradient-to-t from-zinc-950 to-zinc-700 text-zinc-300 p-3 rounded-lg flex justify-center relative lg:min-h-[600px]">
      <div className="flex flex-col items-center justify-around">
        <SAStarHeading title={"WELCOME TO STUDY ABROAD"} />
        <div className="text-2xl md:text-6xl text-center">
          <h1 className="mb-5 animate-slideInLeft">EXPERT STUDENT</h1>
          <h1 className="animate-slideInRight">VISA HELP</h1>
        </div>

        <button className=" btn btn-outline btn-error btn-xs sm:btn-sm md:btn-md lg:btn-lg z-10 nav-link animate-slideInLeft">
          Book an Appointment
          <span>
            <TbArrowBigRightLinesFilled />
          </span>
        </button>
      </div>
      <div className="absolute w-60 h-60 md:w-[500px] md:h-[500px] bottom-10 opacity-30">
        <img src="/SAmain.png" className="object-fill"></img>
      </div>
    </div>
  );
}
