import React, { useEffect } from "react";
import JPmessageSideBar from "../../../components/JPMessages/sidebar/JPmessageSideBar";
import JPMessageContainer from "../../../components/JPMessages/container/JPMessageContainer";
import { useGetUserInfoQuery } from "../../../slices/authApiSlice";
import Loading from "../../../components/Loading";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../../slices/allUsersSlice";

export default function Messages() {
  const { data, isLoading } = useGetUserInfoQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setUserInfo(data));
    }
  }, [isLoading]);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="">
      <h1 className="text-xl my-3">Messages</h1>
      <div className="flex gap-2 messageHeight">
        <JPmessageSideBar />
        <JPMessageContainer />
      </div>
    </div>
  );
}
