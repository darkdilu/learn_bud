import React from "react";
import { useLogoutUserMutation } from "../../../slices/authApiSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../../slices/allUsersSlice";
import { toast } from "react-toastify";
import { resetData } from "../../../slices/dataCollectionSlice";

export default function JSLogout() {
  const [logoutUser] = useLogoutUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function handleLogout() {
    try {
      const res = await logoutUser().unwrap();
      if (res.msg === "successfully logged out") {
        dispatch(setUserInfo(null));
        dispatch(resetData());
        toast.success("Logged out");
        navigate("/");
      } else {
        toast.error(res.msg);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  }
  return (
    <div>
      <h1 className="text-xl">Logout</h1>
      <button
        onClick={handleLogout}
        className="p-2 rounded-lg bg-ascent text-primary hover:bg-hover w-44 my-10"
      >
        Logout
      </button>
    </div>
  );
}
