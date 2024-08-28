import React from "react";

export default function SAFourthSectionStats({ stat, desc }) {
  return (
    <div className="flex flex-col justify-center items-center gap-5 text-zinc-950 shadow-md p-3 border-b-2 hover:border-red-700 nav-link">
      <h1 className="text-5xl">{stat}</h1>
      <h2 className="text-red-700 text-4xl">..........</h2>
      <p className="text-zinc-700">{desc}</p>
    </div>
  );
}
