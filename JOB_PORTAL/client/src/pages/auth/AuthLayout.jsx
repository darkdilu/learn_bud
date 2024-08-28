import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div>
      <div className="px-6 py-5 border-b shandow-lg block lg:hidden">
        <Link
          to={"/"}
          className="text-xl md:text-3xl font-semibold  text-ascent"
        >
          Community App
        </Link>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="hidden lg:block lg:px-16 p-6 min-h-screen bg-gradient-to-br from-ascent to-hover saturate-100">
          <div className="flex flex-col justify-between h-full">
            <Link
              to={"/"}
              className="text-xl md:text-3xl font-semibold text-secondary"
            >
              Community App
            </Link>

            <img
              src="/home-img.png"
              className="w-11/12 brightness-75 contrast-125 mix-blend-hard-light"
            ></img>
          </div>
        </div>
        <div className="lg:px-16 p-6 min-h-screen saturate-50 place-content-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
