import React from "react";

export default function PortalTypeCard({
  background,
  title,
  desc,
  src,
  click,
  hover,
}) {
  return (
    <button
      onClick={click}
      className={`flex items-center justify-around gap-4 p-3 mx-1 rounded-lg ${background} ${hover} hover:gap-5 hover:shadow-xl nav-link shadow-md`}
    >
      <div className="flex flex-col gap-3 w-1/2 items-start">
        <h1 className="text-xl lg:text-3xl">{title}</h1>
        <p className="text-sm lg:text-md leading-7">{desc}</p>
      </div>
      <div>
        <img src={src} className=""></img>
      </div>
    </button>
  );
}
