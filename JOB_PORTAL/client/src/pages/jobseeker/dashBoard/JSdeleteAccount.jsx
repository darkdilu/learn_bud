import React from "react";
import { useDeleteMyJSAccountMutation } from "../../../slices/jobSeekerApiSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function JSdeleteAccount() {
  const [deleteMyAccount] = useDeleteMyJSAccountMutation();
  const navigate = useNavigate();
  async function handledelete() {
    try {
      const res = await deleteMyAccount().unwrap();
      if (res.msg === "account has been deleted") {
        toast.success("Account Deleted");
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
      <h1 className="text-xl">Delete Employer Account</h1>
      <p className="text-sm leading-6 text-gray-500 my-5">
        Deleting your account will delete all your data including the jobs
        applied, company applied, messages, applications
      </p>
      <button
        onClick={handledelete}
        className="p-2 rounded-lg bg-red-900 text-primary hover:bg-red-800 w-44 my-10"
      >
        Delete Account
      </button>
    </div>
  );
}
