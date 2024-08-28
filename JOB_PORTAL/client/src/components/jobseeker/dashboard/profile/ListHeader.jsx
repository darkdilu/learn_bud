import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function ListHeader({name}) {
  return (
    <div className="flex p-3 rounded-md bg-background2 w-full justify-between items-center cursor-pointer shadow-md ml-0 hover:ml-3 nav-link">
      <h1 className="text-base font-semibold">{name}</h1>
      <p className="text-3xl">
        <RiArrowDropDownLine />
      </p>
    </div>
  );
}
