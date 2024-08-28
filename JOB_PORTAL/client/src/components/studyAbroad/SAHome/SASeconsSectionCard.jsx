import React from "react";

export default function SASeconsSectionCard({
  logo,
  title,
  desc,
  thirdSection,
}) {
  return (
    <div
      className={`${
        thirdSection
          ? "bg-zinc-800 hover:bg-zinc-700 shadow-lg hover:shadow-red-700"
          : "bg-white hover:bg-zinc-900"
      }  p-3 rounded-md min-h-[450px] hover:text-red-700 hover:mx-2 nav-link`}
    >
      <div className="flex flex-col justify-around items-center h-full">
        <div className="p-4 text-6xl text-red-700 rounded-full hover:bg-red-700 hover:text-zinc-300">
          {logo}
        </div>
        <h1
          className={`text-4xl ${
            thirdSection ? "text-zinc-300" : "text-zinc-700"
          } `}
        >
          {title}
        </h1>
        <p
          className={`leading-5 ${
            thirdSection ? "text-zinc-300" : "text-zinc-700"
          }`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}
