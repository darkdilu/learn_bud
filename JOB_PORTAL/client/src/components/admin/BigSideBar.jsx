import React from "react";
import NavLinks from "./NavLinks";

export default function BigSideBar() {
  return (
    <div
      className={`lg:block hidden p-6 bg-ascent text-primary h-screen w-60 m-3 rounded-lg sticky top-0`}
    >
      <div className="sticky bottom-0 ">
        <h1 className="text-2xl font-semibold mb-5 ps-8">Job Portal Admin</h1>
        <NavLinks />
      </div>
    </div>
  );
}
