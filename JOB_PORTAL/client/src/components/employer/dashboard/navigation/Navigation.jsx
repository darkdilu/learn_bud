import React from "react";
import NavigationLinks from "./NavigationLinks";
import { useDispatch } from "react-redux";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { toggleEmployerSmallDashboard } from "../../../../slices/responsiveSlice";
import { employerDashboardLinks } from "../../../../utils/links";

export default function Navigation() {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-start gap-8 h-full sticky left-0 top-0 overflow-x-auto">
      <div className="flex justify-end xl:hidden">
        <button
          onClick={() => dispatch(toggleEmployerSmallDashboard())}
          className="text-3xl"
        >
          <IoMdCloseCircleOutline />
        </button>
      </div>
      <NavigationLinks links={employerDashboardLinks} />
    </div>
  );
}
