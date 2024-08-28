import React, { useState } from "react";
import FormInput from "../../../components/FormInput";
import { useChangePasswordMutation } from "../../../slices/authApiSlice";
import { toast } from "react-toastify";
import Loading from "../../../components/Loading";

export default function ChangePassword() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changePassword, { isLoading }] = useChangePasswordMutation();

  async function handleUpdate() {
    if (newPassword !== confirmPassword) {
      toast.error("passwords dont match");
      return;
    }
    try {
      const res = await changePassword({
        password,
        newPassword,
      }).unwrap();
      if (res.msg === "password changed successfully") {
        toast.success("password changed");
        setPassword("");
        setConfirmPassword("");
        setNewPassword("");
        window.scrollTo(0, 0);
      } else {
        toast.error(res.msg);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  }
  return (
    <div>
      <h1 className="text-xl my-3">Change Password</h1>
      <div className="w-full lg:w-1/2">
        <FormInput
          title={"Old Password"}
          type={"password"}
          value={password}
          onchange={(e) => setPassword(e.target.value)}
        />
        <FormInput
          title={"New Password"}
          type={"password"}
          value={newPassword}
          onchange={(e) => setNewPassword(e.target.value)}
        />
        <FormInput
          title={"Confirm Password"}
          type={"password"}
          value={confirmPassword}
          onchange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          onClick={handleUpdate}
          className="p-3 rounded-lg bg-ascent text-secondary hover:bg-hover"
        >
          Update
        </button>
        {isLoading && <Loading />}
      </div>
    </div>
  );
}
