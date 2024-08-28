import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSendOTPtoUserMutation } from "../../slices/authApiSlice";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";

export default function MobileOtp() {
  const [phone, setPhone] = useState("");
  const [sendOTPtoUser, { isLoading }] = useSendOTPtoUserMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await sendOTPtoUser({ phone }).unwrap();
      if (res.msg === "success") {
        navigate("/auth/verify");
        toast.success("OTP has been send to mobile");
      } else {
        toast.error(res.msg);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-auto w-11/12 lg:w-4/5p-4 lg:border-0 border border-ascent rounded-md">
        <div className="w-full text-center mb-10">
          <h1 className="text-2xl lg:text-4xl font-semibold">Community App</h1>
        </div>

        <h2 className="text-xl lg:text-2xl my-3 font-medium">
          Verify Your Mobile
        </h2>
        <form className="flex flex-col w-full">
          <div className="form-row">
            <label className="form-label">Enter Phone with code</label>
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
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
            className="my-3 py-3 bg-ascent text-primary rounded-md hover:bg-hover"
          >
            Send OTP
          </button>
          <Link to={"/details"}>Do this Later</Link>
          {isLoading && <Loading />}
        </form>
      </div>
    </div>
  );
}
