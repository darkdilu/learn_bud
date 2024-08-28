import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import BigSideBar from "../../components/admin/BigSideBar";
import SmallSideBar from "../../components/admin/SmallSideBar";
import axios from "axios";

export default function AdminLayout() {
  const [showSidebar, setShowSidebar] = useState(true);
  const { data } = useGetUserInfoQuery();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.toString();

  const getInfo = async () => {
    try {
      const res = await axios.get("http://localhost:3000/user/info", {
        withCredentials: true,
      });
    } catch (error) {
      navigate("/");
    }
  };
  useEffect(() => {
    getInfo();
  }, [pathname]);

  return (
    <div className="flex">
      <div className={`${showSidebar ? "block" : "hidden"}`}>
        <BigSideBar />
      </div>
      <SmallSideBar setShowSideBar={setShowSidebar} showSidebar={showSidebar} />
      <div className=" flex-grow">
        <Navbar
          toggle={setShowSidebar}
          show={showSidebar}
          user={data?.username}
        />
        <div className="p-2 m-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
