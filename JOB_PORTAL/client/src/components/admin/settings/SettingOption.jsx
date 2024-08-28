import React from "react";
import { Link } from "react-router-dom";

export default function SettingOption({ name, link }) {
  return (
    <div className="flex justify-between items-center bg-secondary rounded-md p-2 my-2 lg:w-1/2">
      <p className="text-lg font-semibold">{name}</p>

      <div className="flex justify-center items-center gap-2">
        <Link
          to={`/admin/settings/${link}`}
          className="p-2 bg-ascent text-primary rounded-md hover:bg-hover"
        >
          Configure
        </Link>
      </div>
    </div>
  );
}
