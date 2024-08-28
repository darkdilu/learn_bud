import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useVerifyOTPtoUserMutation } from "../../slices/authApiSlice";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";

export default function MobileVerify() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [verifyOTPtoUser, { isLoading }] = useVerifyOTPtoUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await verifyOTPtoUser({ otp }).unwrap();
      if (res.msg === "verified") {
        navigate("/details");
        toast.success("Phone number verified");
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

        <h2 className="text-xl lg:text-2xl my-3 font-medium">Enter OTP</h2>
        <form className="flex flex-col w-full">
          <div className="form-row">
            <label className="form-label">OTP</label>
            <input
              type="text"
              className="form-input"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              required
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
            className="my-3 py-3 bg-ascent text-primary rounded-md hover:bg-hover"
          >
            Verify
          </button>
          {isLoading && <Loading />}
        </form>

        <p className="my-3">
          Dont get OTP
          <Link to="/auth/send-otp" className="text-blue-700 underline">
            Resend
          </Link>
        </p>
      </div>
    </div>
  );
}
