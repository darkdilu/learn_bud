import React from "react";

export default function StatComponent({ count, text }) {
  return (
    <div className="flex flex-col gap-3 justify-center items-center my-3">
      <div className=" text-ascent w-full border-b-2 border-ascent text-center ">
        <p className="text-2xl font-bold">{count}</p>
      </div>
      <h1 className="text-2xl font-semibold">{text}</h1>
    </div>
  );
}
