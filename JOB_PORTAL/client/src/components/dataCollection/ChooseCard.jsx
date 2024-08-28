import React from "react";
import { Link } from "react-router-dom";

export default function ChooseCard({
  background,
  text,
  title,
  icon,
  hover,
  to,
}) {
  return (
    <Link
      to={to}
      className={`flex justify-between items-center w-64 h-32 px-3 ${background} hover:${hover} rounded-xl cursor-pointer shadow-md hover:w-72 nav-link`}
    >
      <h1 className={`text-xl lg:text-3xl ${text}`}>{title}</h1>
      <div className={`text-xl lg:text-3xl`}>{icon}</div>
    </Link>
  );
}
