import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "../../slices/authApiSlice";
import { setUserInfo } from "../../slices/allUsersSlice";
import { toast } from "react-toastify";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function HomeHeader() {
  const { userInfo } = useSelector((state) => state.allUsers);
  const [showLogout, setShowLogout] = useState(false);
  const [logoutUser] = useLogoutUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleLogout() {
    try {
      const res = await logoutUser().unwrap();
      if (res.msg === "successfully logged out") {
        navigate("/");
        dispatch(setUserInfo(null));
        toast.success("Logged out");
      } else {
        toast.error(res.msg);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  }
  return (
    <header className="lg:px-16 bg-primary h-20 flex justify-between items-center sticky top-0 p-5 border-b border-primary shadow-sm z-10">
      <div className="flex gap-1 md:gap-3">
        <Link to={"/"} className="text-xl md:text-3xl font-semibold">
          Community App
        </Link>
      </div>

      <div className="flex justify-center items-center gap-1 md:gap-5">
        {userInfo?.username ? (
          <div className="relative">
            <button
              className="px-2 py-2 bg-gray-400 rounded-lg gap-3 flex items-center"
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
                className="bg-background1 px-2 py-2 w-full absolute top-14"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </div>
        ) : (
          <Link
            to={"/auth/login"}
            className="p-1 px-2 text-xl bg-ascent text-primary rounded-md hover:bg-hover"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
