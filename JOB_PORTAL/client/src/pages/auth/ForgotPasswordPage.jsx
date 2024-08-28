import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForgotPasswordMutation } from "../../slices/authApiSlice";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";

export default function ForgotPasswordPage() {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await forgotPassword({ phone }).unwrap();
      if (res.msg === "KEY has been sent") {
        navigate("/auth/reset-password");
        toast.success("Key has been send to mobile");
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
            <label className="form-label">Enter Registered Phone</label>
            <input
              type="text"
              className="form-input"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91xxxxxxxxxx"
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
          <Link to="/auth/login" className="text-blue-700 underline">
            Back
          </Link>
        </p>
      </div>
    </div>
  );
}
