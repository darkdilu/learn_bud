import React from "react";
import { adminLinks } from "../../utils/links";
import { NavLink, useLocation } from "react-router-dom";

export default function NavLinks({ isSmall, toggle, show }) {
  const location = useLocation();
  const pathname = location.pathname.toString();
  function handleClick() {
    toggle(!show);
  }
  return (
    <div className="pt-8 flex flex-col">
      {adminLinks.map((item) => (
        <NavLink
          className={`nav-link flex items-center gap-2 py-4 lg:ps-8 px-0 capitalize hover:text-blue-700 hover:ms-5 ${
            pathname.includes(item.url) ? "text-blue-700" : ""
          }`}
          key={item.text}
          to={item.path}
          onClick={isSmall && handleClick}
        >
          <span className="lg:text-2xl lg:me-4">{item.icon}</span>
          {item.text}
        </NavLink>
      ))}
    </div>
  );
}
