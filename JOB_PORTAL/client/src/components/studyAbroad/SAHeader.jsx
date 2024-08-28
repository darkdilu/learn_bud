import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "../../slices/authApiSlice";
import { setUserInfo } from "../../slices/allUsersSlice";
import { resetData } from "../../slices/dataCollectionSlice";
import { toast } from "react-toastify";

export default function SAHeader() {
  const location = useLocation();
  const pathname = location.pathname.toString();
  const { userInfo } = useSelector((state) => state.allUsers);
  const [showLogout, setShowLogout] = useState(false);
  const [logoutUser] = useLogoutUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleLogout() {
    try {
      const res = await logoutUser().unwrap();
      if (res.msg === "successfully logged out") {
        dispatch(setUserInfo(null));
        navigate("/");
        dispatch(resetData());
        toast.success("Logged out");
      } else {
        toast.error(res.msg);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  }

  return (
    <header className="lg:px-16 bg-zinc-950 h-20 flex justify-between items-center sticky top-0 p-5 border-b border-zinc-950 z-20 shadow-sm nav-link">
      <div className="flex gap-1 md:gap-3">
        <Link
          to={"/study-abroad"}
          className="text-xl md:text-3xl font-semibold text-red-700"
        >
          Study Abroad
        </Link>
        <div className="lg:ms-5 hidden  lg:flex lg:items-center gap-1 md:gap-3">
          <Link to={"/"} className="text-base md:text-lg p-1 text-zinc-300">
            Home
          </Link>
          <NavLink
            to={"/study-abroad/country"}
            className={`text-base md:text-lg mx-1 md:mx-2 p-1 rounded-md text-zinc-300 hover:bg-red-700 ${
              pathname.includes("country") && "bg-red-700 "
            }`}
            end
          >
            Country
          </NavLink>
          <NavLink
            to={"/study-abroad/contact"}
            className={`text-base md:text-lg mx-1 md:mx-2 p-1 rounded-md text-zinc-300 hover:bg-red-700 ${
              pathname.includes("contact") && "bg-red-700"
            }`}
            end
          >
            Contact
          </NavLink>
        </div>
      </div>
      <div className="flex justify-center items-center gap-1 md:gap-5">
        <button className="text-2xl lg:hidden block text-zinc-300 me-3">
          <RxHamburgerMenu />
        </button>

        {userInfo?.username ? (
          <>
            <div className="relative">
              <button
                className="px-2 py-2 bg-zinc-300 text-red-700 rounded-lg gap-3 flex items-center"
                onClick={() => setShowLogout(!showLogout)}
              >
                <img
                  className="w-7 h-7 rounded-full border border-ascent"
                  src={`${userInfo.image ? userInfo.image : "/nouser.png"}`}
                ></img>
                <span className="md:block hidden">{userInfo.username}</span>
                <span className="text-2xl">
                  <RiArrowDropDownLine />
                </span>
              </button>
              {showLogout && (
                <button
                  className="bg-red-700 text-zinc-300 rounded-md px-2 py-2 w-full absolute top-14"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              )}
            </div>
          </>
        ) : (
          <Link
            to={"/auth/login"}
            className="p-1 px-2 text-xl hidden lg:block bg-red-700 text-primary rounded-md hover:bg-black"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
