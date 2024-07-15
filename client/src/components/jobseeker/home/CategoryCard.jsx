import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCard({ icon, category, open }) {
  return (
    <Link
      to={"/jobseeker/jobs"}
      className="categorycard nav-link"
      onClick={() => window.scrollTo(0, 0)}
    >
      <div className="text-4xl">{icon}</div>
      <h1 className="text-2xl">{category}</h1>
      <p className=" opacity-40">{`(${open} open positions)`}</p>
    </Link>
  );
}
