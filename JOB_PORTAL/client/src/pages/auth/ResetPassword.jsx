import React, { useState } from "react";
import Loading from "../../components/Loading";
import { Link, useNavigate } from "react-router-dom";
import { useResetPasswordMutation } from "../../slices/authApiSlice";
import { toast } from "react-toastify";

export default function ResetPassword() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await resetPassword({ id, password }).unwrap();
      if (res.msg === "password reset") {
        navigate("/auth/login");
        toast.success("password has been changed");
      } else {
        toast.error(res.msg);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-auto w-11/12 lg:w-4/5 p-4 lg:border-0 border border-ascent rounded-md">
        <div className="w-full text-center mb-10">
          <h1 className="text-2xl lg:text-4xl font-semibold">Community App</h1>
        </div>

        <h2 className="text-xl lg:text-2xl my-3 font-medium">Password reset</h2>

        <form className="flex flex-col w-full">
          <div className="form-row">
            <label className="form-label">Enter Key</label>
            <input
              type="text"
              className="form-input"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter key"
              required
            />
          </div>
          <div className="form-row">
            <label className="form-label">Enter new Password</label>
            <input
              type="password"
              className="form-input"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*****"
              required
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="my-3 py-3 bg-ascent text-primary rounded-md hover:bg-hover"
          >
            Submit
          </button>
          {isLoading && <Loading />}
        </form>
        <p className="my-3">
          Didnt get Key?
          <Link to="/auth/forgot-password" className="text-blue-700 underline">
            Back
          </Link>
        </p>
      </div>
    </div>
  );
}
