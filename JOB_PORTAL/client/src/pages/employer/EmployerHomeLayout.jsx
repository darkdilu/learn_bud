import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import EmployerHeader from "../../components/employer/EmployerHeader";
import Footer from "../../components/Footer";
import EmployerSmallBar from "../../components/employer/EmployerSmallBar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { setEInfo, setType, setUserInfo } from "../../slices/allUsersSlice";
import { useGetCompanyProfileQuery } from "../../slices/employerApiSlice";
import { useGetUserInfoQuery } from "../../slices/authApiSlice";
import Loading from "../../components/Loading";
import { SocketContextProvider } from "../../context/SocketContext";

export default function EmployerHomeLayout() {
  const dispatch = useDispatch();

  const { data, isLoading } = useGetCompanyProfileQuery();
  const { data: data2, isLoading: loading2 } = useGetUserInfoQuery();

  useEffect(() => {
    if (data2) {
      dispatch(setUserInfo(data2));
    }
  }, [loading2]);

  useEffect(() => {
    if (data) {
      dispatch(setEInfo(data));
      dispatch(setType("employer"));
    }
  }, [isLoading]);

  return loading2 || isLoading ? (
    <div className="w-full min-h-screen">
      <Loading />
    </div>
  ) : (
    <div>
      <SocketContextProvider>
        <EmployerHeader />
        <EmployerSmallBar />
        <div className="p-6 lg:px-16">
          <Outlet />
        </div>
        <Footer />
      </SocketContextProvider>
    </div>
  );
}
