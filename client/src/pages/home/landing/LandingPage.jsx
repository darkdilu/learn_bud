import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <div className="p-3 rounded-lg bg-homeback  min-h-screen flex flex-col justify-center">
        <div className="flex flex-col gap-5 items-center w-11/12 lg:w-3/5 mx-auto">
          <h1 className="text-xl font-semibold lg:text-3xl">
            Welcome to Community App!
          </h1>
          <p className="lg:text-xl text-md">
            Explore your social life all in one place
          </p>
          <p className="text-sm leading-7">
            we give you a platform to personalise your social life. we have a
            Dating App for persons who are looking for date. A matrimony App for
            making your personal life a success. A job portal for your
            professional career. An ecommerce shop to enrich your need. And if
            you are interested in studying abroad a Study Abroad APP
          </p>
          <button className="bg-red-500 p-2 rounded-lg hover:bg-red-400 w-48">
            Dating App
          </button>
          <button className="bg-pink-500 p-2 rounded-lg hover:bg-pink-400 w-48">
            Matrimony App
          </button>
          <Link
            to={"/portal-type"}
            className="bg-blue-500 p-2 text-center rounded-lg hover:bg-blue-400 w-48"
          >
            Job Portal
          </Link>
          <button className="bg-green-500 p-2 rounded-lg hover:bg-green-400 w-48">
            E-commerce
          </button>
          <Link
            to={"/study-abroad"}
            className="bg-violet-500 p-2 text-center rounded-lg hover:bg-violet-400 w-48"
          >
            Study Abroad
          </Link>
        </div>
      </div>
    </div>
  );
}
