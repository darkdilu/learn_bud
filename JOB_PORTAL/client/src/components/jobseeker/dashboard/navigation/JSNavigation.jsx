import React from "react";
import { useDispatch } from "react-redux";
import { toggleJobSeekerSmallDashboard } from "../../../../slices/responsiveSlice";
import { IoMdCloseCircleOutline } from "react-icons/io";
import NavigationLinks from "../../../employer/dashboard/navigation/NavigationLinks";
import { jobSeekerDashboardLinks } from "../../../../utils/links";

export default function JSNavigation() {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-start gap-8 h-full sticky left-0 top-0 overflow-x-auto">
      <div className="flex justify-end xl:hidden">
        <button
          onClick={() => dispatch(toggleJobSeekerSmallDashboard())}
          className="text-3xl"
        >
          <IoMdCloseCircleOutline />
        </button>
      </div>
      <NavigationLinks links={jobSeekerDashboardLinks} js />
    </div>
  );
}
