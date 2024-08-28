import React, { useEffect } from "react";
import Navigation from "../../../components/employer/dashboard/navigation/Navigation";
import { Outlet, useNavigate } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleEmployerSmallDashboard } from "../../../slices/responsiveSlice";

export default function DashboardLayout() {
  const { showEmployerSmallDashboard } = useSelector(
    (state) => state.responsive
  );
  const { userInfo } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      return;
    } else {
      navigate("/");
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
            showEmployerSmallDashboard
              ? "fixed top-0 left-0 z-10 w-72"
              : "hidden sticky left-0 top-20 w-96"
          } max-w-96 w-96 bg-background2 h-screen rounded-xl py-10 px-3`}
        >
          <Navigation />
        </div>
        <div className="w-full bg-background1 rounded-xl py-10 lg:px-10 md:px-5 px-3">
          <button
            onClick={() => dispatch(toggleEmployerSmallDashboard())}
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
