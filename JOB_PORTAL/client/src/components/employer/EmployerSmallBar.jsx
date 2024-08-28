import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleEmployerSmallBar } from "../../slices/responsiveSlice";
import { useLogoutUserMutation } from "../../slices/authApiSlice";
import { setUserInfo } from "../../slices/allUsersSlice";
import { toast } from "react-toastify";
import { resetData } from "../../slices/dataCollectionSlice";

export default function EmployerSmallBar() {
  const { showEmployerSmallBar } = useSelector((state) => state.responsive);
  const { userInfo } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();
  const [logoutUser] = useLogoutUserMutation();
  const navigate = useNavigate();
  async function handleLogout() {
    try {
      const res = await logoutUser().unwrap();
      if (res.msg === "successfully logged out") {
        dispatch(resetData());
        dispatch(setUserInfo(null));
        navigate("/");
        toast.success("Logged out");
      } else {
        toast.error(res.msg);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  }

  return (
    <div
      className={`overflow-auto w-80 h-full bg-primary fixed left-0 z-10 p-5 ${
        showEmployerSmallBar ? "ml-0" : "-ml-80"
      } nav-link`}
    >
      <div className="flex justify-end">
        <button
          className="text-3xl"
          onClick={() => dispatch(toggleEmployerSmallBar())}
        >
          <IoMdCloseCircleOutline />
        </button>
      </div>

      <Link
        to={"/employer"}
        className="text-xl md:text-3xl font-semibold my-7 border-b-2 py-2"
      >
        Job Portal
      </Link>
      {userInfo?.username && (
        <h1 className="my-5 text-sm">Hello, {userInfo?.username}</h1>
      )}

      <div className="flex flex-col items-start gap-10 text-md font-semibold border-b-2 pb-7 mb-3">
        <NavLink
          onClick={() => dispatch(toggleEmployerSmallBar())}
          className={"hover:ms-4 nav-link p-2"}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => dispatch(toggleEmployerSmallBar())}
          className={"hover:ms-4 nav-link p-2"}
          to={"/employer/candidates"}
        >
          Candidates
        </NavLink>
        <NavLink
          onClick={() => dispatch(toggleEmployerSmallBar())}
          className={"hover:ms-4 nav-link p-2"}
          to={"/employer/companies"}
        >
          Companies
        </NavLink>
        <NavLink
          onClick={() => dispatch(toggleEmployerSmallBar())}
          className={"hover:ms-4 nav-link p-2"}
          to={"/jobseeker"}
        >
          Jobseeker
        </NavLink>
        {userInfo?.username && (
          <>
            <NavLink
              onClick={() => dispatch(toggleEmployerSmallBar())}
              className={"hover:ms-4 nav-link p-2"}
              to={"/employer/dashboard"}
            >
              Dashboard
            </NavLink>
            <div className="w-1/2">
              <button
                className="p-1 px-2 text-xl bg-ascent text-primary rounded-md hover:bg-hover"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </>
        )}
      </div>
      {!userInfo?.username && (
        <div className="w-1/2">
          <Link
            onClick={() => dispatch(toggleEmployerSmallBar())}
            to={"/auth/login"}
            className="p-1 px-2 text-xl bg-ascent text-primary rounded-md hover:bg-hover"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
}
