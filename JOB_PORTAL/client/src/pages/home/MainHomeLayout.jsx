import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import HomeHeader from "../../components/home/HomeHeader";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { setUserInfo } from "../../slices/allUsersSlice";

export default function MainHomeLayout() {
  const dispatch = useDispatch();

  const getInfo = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/auth/userInfo`, {
        withCredentials: true,
      });
      dispatch(setUserInfo(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);
  return (
    <>
      <HomeHeader />
      <div className="p-6 lg:px-16">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
