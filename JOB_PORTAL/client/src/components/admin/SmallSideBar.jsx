import React from "react";
import NavLinks from "./NavLinks";

export default function SmallSideBar({ setShowSideBar, showSidebar }) {
  return (
    <div
      className={`block lg:hidden p-6 min-h-screen w-full bg-black bg-opacity-70 z-10 fixed ${
        showSidebar ? "invisible" : "visible"
      }`}
    >
      <div className="bg-ascent text-primary min-h-screen m-3 p-3 ">
        <div>
          <button
            className="text-xl"
            onClick={() => setShowSideBar(!showSidebar)}
          >
            X
          </button>
        </div>
        <div className="flex flex-col items-center justify-center rounded-md">
          <h1 className="text-2xl font-semibold my-5 ps-8">Job Portal Admin</h1>
          <NavLinks isSmall toggle={setShowSideBar} show={showSidebar} />
        </div>
      </div>
    </div>
  );
}
