import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { employerHomeList } from "../../utils/links";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoNotificationsOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RiArrowDropDownLine } from "react-icons/ri";
import { toggleEmployerSmallBar } from "../../slices/responsiveSlice";
import { useLogoutUserMutation } from "../../slices/authApiSlice";
import { toast } from "react-toastify";
import { setType, setUserInfo } from "../../slices/allUsersSlice";
import { useGetCompanyProfileQuery } from "../../slices/employerApiSlice";
import { resetData } from "../../slices/dataCollectionSlice";
import { useCheckjobSeekerMutation } from "../../slices/userApiSlice";
import useListenSocketMessages from "../../hooks/JPmessages/useListenSocketMessages";
import MessageNotification from "../MessageNotification";
import { useSocketContext } from "../../context/SocketContext";
import Notification from "../Notification";
import useListenSocketNotifications from "../../hooks/JPNotifications/useListenSocketNotifications";

export default function EmployerHeader() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { showEmployerSmallBar } = useSelector((state) => state.responsive);
  const { userInfo, type, EInfo, JSInfo } = useSelector(
    (state) => state.allUsers
  );
  const { data } = useGetCompanyProfileQuery();
  const { setNotification, setJobNotification } = useSocketContext();
  const [showLogout, setShowLogout] = useState(false);
  const [logoutUser] = useLogoutUserMutation();
  const [checkjobSeeker] = useCheckjobSeekerMutation();
  const navigate = useNavigate();
  useListenSocketMessages();
  useListenSocketNotifications();

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

  async function handleSeeker() {
    try {
      const res = await checkjobSeeker().unwrap();
      if (res.msg === "success" || res.msg === "already created") {
        dispatch(setType("jobseeker"));
        return;
      } else {
        toast.error(res.msg);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  }

  useEffect(() => {
    if (type === "employer") {
      setNotification(EInfo?.messageNotification || []);
      setJobNotification(EInfo?.notification || []);
    }

    if (type === "jobseeker") {
      setNotification(JSInfo?.messageNotification || []);
      setJobNotification(JSInfo?.notification || []);
    }
  }, [userInfo, JSInfo, EInfo, type]);

  const pathname = location.pathname.toString();
  return (
    <header
      className={`${
        showEmployerSmallBar ? "hidden" : ""
      } lg:px-16 bg-primary h-20 flex justify-between items-center sticky top-0 p-5 border-b border-primary z-10 shadow-sm nav-link`}
    >
      <div className="flex gap-1 md:gap-3">
        <Link to={"/employer"} className="text-xl md:text-3xl font-semibold">
          Job Portal
        </Link>

        <div className="lg:ms-5 hidden  lg:flex lg:items-center gap-1 md:gap-3">
          <Link to={"/"} className="text-base md:text-lg">
            Home
          </Link>
          {employerHomeList.map((item) => (
            <NavLink
              to={`/employer${item.path}`}
              key={item.text}
              className={`text-base md:text-lg mx-1 md:mx-2 p-1 rounded-md hover:bg-hover hover:text-primary ${
                pathname.includes(item.path) && "bg-ascent text-primary"
              }`}
              end
            >
              {item.text}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-3 md:gap-5">
        <Notification />
        <MessageNotification />
        <button
          className="text-2xl lg:hidden block "
          onClick={() => {
            dispatch(toggleEmployerSmallBar());
            window.scrollTo(0, 0);
          }}
        >
          <RxHamburgerMenu />
        </button>
        <Link
          to={"/jobseeker"}
          className="p-1 px-2 border hidden lg:block border-ascent rounded-md hover:bg-hover text-xl"
          onClick={handleSeeker}
        >
          JobSeeker
        </Link>
        {userInfo?.username && (
          <>
            <Link
              className="hidden text-xl lg:block"
              to={"/employer/dashboard"}
            >
              Dashboard
            </Link>
            <div className="relative">
              <button
                className="px-2 py-2 bg-gray-400 rounded-lg gap-3 flex items-center"
                onClick={() => setShowLogout(!showLogout)}
              >
                <img
                  className="w-7 h-7 rounded-full border border-ascent"
                  src={`${data?.logo ? data.logo : "/nocompany.png"}`}
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
          </>
        )}
        {!userInfo?.username && (
          <Link
            to={"/auth/login"}
            className="p-1 px-2 text-xl hidden lg:block bg-ascent text-primary rounded-md hover:bg-hover"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
