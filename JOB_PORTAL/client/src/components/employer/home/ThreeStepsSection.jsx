import React from "react";
import {
  PiNumberCircleOneFill,
  PiNumberCircleTwoFill,
  PiNumberCircleThreeFill,
} from "react-icons/pi";
import ThreeStepElt from "./ThreeStepElt";
export default function ThreeStepsSection() {
  return (
    <section className="grid lg:grid-flow-row grid-flow-col lg:grid-cols-2 threesteppic minusheight bg-background2 rounded-lg mt-2">
      <div className=" overflow-hidden place-content-center place-self-center mt-3">
        <img src="/employers-3.png" className="w-4/5 lg:w-full mx-auto"></img>
      </div>
      <div className="flex flex-col justify-center items-start gap-3 px-6">
        <h1 className="lg:text-3xl text-xl my-2">
          Find candidates in 3 easy steps.
        </h1>
        <p className=" my-2">Find the ideal candidates for your company</p>
        <div className="flex flex-col gap-5 mt-3">
          <ThreeStepElt
            text={"Register an account to start."}
            icon={<PiNumberCircleOneFill className="fill-ascent" />}
          />
          <ThreeStepElt
            text={"Explore over thousands of resumes."}
            icon={<PiNumberCircleTwoFill className="fill-ascent" />}
          />
          <ThreeStepElt
            text={"Find the suitable candidate"}
            icon={<PiNumberCircleThreeFill className="fill-ascent" />}
          />
        </div>
      </div>
    </section>
  );
}
