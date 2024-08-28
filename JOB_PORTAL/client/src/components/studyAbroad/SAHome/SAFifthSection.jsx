import React from "react";
import SAStarHeading from "./SAStarHeading";
import SAFeedback from "./SAFeedback";

export default function SAFifthSection() {
  return (
    <div className="text-center w-full bg-zinc-900 text-zinc-300 rounded-lg my-10">
      <div className="flex flex-col justify-center items-center w-full mt-5">
        <SAStarHeading title={"FEEDBACKS"} />
        <h1 className="text-6xl text-zinc-300 my-10 animate-slideInBottom">
          Happy Student Feedback
        </h1>
      </div>
      <SAFeedback />
    </div>
  );
}
