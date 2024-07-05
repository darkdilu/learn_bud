import React, { useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { toggleJobSeekerSmallDashboard } from "../../../slices/responsiveSlice";
import JSNavigation from "../../../components/jobseeker/dashboard/navigation/JSNavigation";

export default function JSDashboardLayout() {
  const { showJobSeekerSmallDashboard } = useSelector(
    (state) => state.responsive
  );
  const { userInfo } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo?.username) {
      navigate("/auth/login");
    }
  }, [userInfo]);
  return (
    <div>
      <h1 className="form-title mb-8 text-2xl font-semibold text-center">
        Dashboard
      </h1>
      <div className="flex justify-start items-start gap-5">
        <div
          className={`xl:block ${
            showJobSeekerSmallDashboard
              ? "fixed top-0 left-0 z-10 w-72"
              : "hidden sticky left-0 top-20 w-96"
          } max-w-96 w-96 bg-background2 h-screen rounded-xl py-10 px-3`}
        >
          <JSNavigation />
        </div>
        <div className="w-full bg-background1 rounded-xl py-10 lg:px-10 md:px-5 px-3">
          <button
            onClick={() => dispatch(toggleJobSeekerSmallDashboard())}
            className="xl:hidden text-xl flex gap-2 items-center text-secondary bg-ascent p-2 rounded-lg hover:bg-hover my-3 "
          >
            <CiMenuBurger />
            Menu
          </button>
          <Outlet />
        </div>
      </div>
    </div>
  );
}