import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  toggleEmployerSmallDashboard,
  toggleJobSeekerSmallDashboard,
} from "../../../../slices/responsiveSlice";

export default function NavigationLinks({ links, js }) {
  const location = useLocation();
  const pathname = location.pathname.toString();
  const dispatch = useDispatch();

  function handleclick() {
    window.scrollTo(0, 0);
  }
  return (
    <div className="pt-8 flex flex-col">
      {links.map((item) => (
        <NavLink
          className={`nav-link flex items-center gap-2 py-4 lg:ps-8 px-0 capitalize hover:text-blue-700 hover:ms-5 ${
            pathname.includes(item.path) ? "text-blue-700" : ""
          }`}
          key={item.text}
          to={item.path}
          onClick={handleclick}
        >
          <span className="lg:text-2xl lg:me-4">{item.icon}</span>
          {item.text}
        </NavLink>
      ))}
    </div>
  );
}
