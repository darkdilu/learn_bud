import React from "react";

export default function SACountryCard({ flag, name }) {
  return (
    <div className="flex flex-col justify-center gap-3 items-center p-3 border-b-2 border-primary hover:border-red-700 nav-link">
      <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-custom ">
        <img
          src={flag}
          className="brightness-125 w-full h-full object-cover image-glass"
        ></img>
      </div>
      <p className="text-xl text-red-700 font-extrabold">|||||||||||</p>
      <h1 className="text-2xl">{name}</h1>
    </div>
  );
}
