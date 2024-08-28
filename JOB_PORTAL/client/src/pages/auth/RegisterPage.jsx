import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../slices/authApiSlice";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== rePassword) {
      toast.error("Password does not match");
      return;
    } else {
      try {
        const res = await registerUser({
          username,
          password,
          email,
        }).unwrap();
        if (res.msg === "registered successfully") {
          navigate("/auth/send-otp");
          toast.success("successfully registered");
        } else {
          toast.error(res.msg);
        }
      } catch (err) {
        toast.error(err?.data?.msg || err?.error);
      }
    }
  }
  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-auto w-11/12 lg:w-4/5 p-4 lg:border-0 border border-ascent rounded-md">
        <div className="w-full text-center mb-10">
          <h1 className="text-2xl lg:text-4xl font-semibold">Community App</h1>
        </div>

        <h2 className="text-xl lg:text-xl my-3 font-medium">Register</h2>
        <form className="flex flex-col w-full">
          <div className="form-row">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-input"
              name="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          <div className="form-row">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="form-row">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
          </div>
          <div className="form-row">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-input"
              name="re-password"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              placeholder="Re-Enter Password"
              required
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
            className="my-3 py-3 bg-ascent text-center text-primary rounded-md hover:bg-hover"
          >
            Register
          </button>
          {isLoading && <Loading />}
        </form>
        <p className="my-3">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-700 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
