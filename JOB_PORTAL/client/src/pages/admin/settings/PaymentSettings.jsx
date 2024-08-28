import React from "react";
import { Link } from "react-router-dom";

export default function PaymentSettings() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="my-5 text-2xl font-semibold">Setup Your Payment</h1>
        <Link
          to={"/admin/settings"}
          className="bg-ascent text-primary rounded-md p-2 hover:bg-hover"
        >
          Back
        </Link>
      </div>

      <div className="bg-secondary p-2 rounded-lg lg:w-1/2 flex justify-between items-center">
        <h1>Add your account Details</h1>
        <button className="bg-ascent text-primary rounded-md p-2 hover:bg-hover">
          ADD
        </button>
      </div>
    </div>
  );
}
