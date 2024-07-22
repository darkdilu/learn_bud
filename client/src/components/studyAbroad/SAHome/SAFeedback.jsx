import React, { useState } from "react";

export default function SAFeedback() {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  return (
    <div>
      <div className="carousel w-full">
        {one && (
          <div
            id="item1"
            className="carousel-item mx-auto w-full animate-slideInLeft"
          >
            <div class="bg-fb1 bg-contain relative h-[320px] lg:h-[500px] w-3/4 lg:w-1/2 mx-auto flex items-center justify-center hover:shadow-2xl hover:shadow-red-700">
              <div class="absolute inset-0 bg-black opacity-70"></div>
              <div class="relative z-10 text-center p-8">
                <p class="text-red-500 text-sm font-semibold">
                  AMERICA-BOUND STUDENT
                </p>
                <p class="text-white text-xl font-bold mt-4 ">
                  "Unparalleled Student Visa Service: Delivering Expertise,
                  Personalized Guidance, and Reliable, Timely Updates for a
                  Seamless and Process"
                </p>
                <p class="text-white text-lg font-medium mt-4">
                  Gladriao Gomeza
                </p>
              </div>
            </div>
          </div>
        )}
        {two && (
          <div id="item2" className="carousel-item w-full animate-slideInLeft">
            <div class="bg-fb2 bg-contain relative h-[320px] lg:h-[500px] w-3/4 lg:w-1/2 mx-auto flex items-center justify-center hover:shadow-2xl hover:shadow-red-700">
              <div class="absolute inset-0 bg-black opacity-70"></div>
              <div class="relative z-10 text-center p-8">
                <p class="text-red-500 text-sm font-semibold">
                  AMERICA-BOUND STUDENT
                </p>
                <p class="text-white text-xl font-bold mt-4">
                  "Unparalleled Student Visa Service: Delivering Expertise,
                  Personalized Guidance, and Reliable, Timely Updates for a
                  Seamless and Process"
                </p>
                <p class="text-white text-lg font-medium mt-4">
                  Gladriao Gomeza
                </p>
              </div>
            </div>
          </div>
        )}
        {three && (
          <div id="item3" className="carousel-item w-full animate-slideInLeft">
            <div class="bg-fb3 bg-contain relative h-[320px] lg:h-[500px] w-3/4 lg:w-1/2 mx-auto flex items-center justify-center hover:shadow-2xl hover:shadow-red-700">
              <div class="absolute inset-0 bg-black opacity-70"></div>
              <div class="relative z-10 text-center p-8">
                <p class="text-red-500 text-sm font-semibold">
                  AMERICA-BOUND STUDENT
                </p>
                <p class="text-white text-xl font-bold mt-4">
                  "Unparalleled Student Visa Service: Delivering Expertise,
                  Personalized Guidance, and Reliable, Timely Updates for a
                  Seamless and Process"
                </p>
                <p class="text-white text-lg font-medium mt-4">
                  Gladriao Gomeza
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <p
          className="btn btn-xs"
          onClick={() => {
            setOne(true);
            setTwo(false);
            setThree(false);
          }}
        >
          1
        </p>
        <p
          className="btn btn-xs"
          onClick={() => {
            setOne(false);
            setTwo(true);
            setThree(false);
          }}
        >
          2
        </p>
        <p
          className="btn btn-xs"
          onClick={() => {
            setOne(false);
            setTwo(false);
            setThree(true);
          }}
        >
          3
        </p>
      </div>
    </div>
  );
}
/** */
