import React, { useEffect } from "react";
import PortalTypeCard from "../../components/dataCollection/PortalTypeCard";
import { useNavigate } from "react-router-dom";
import {
  useSaveEmployerMutation,
  useSaveJobSeekerMutation,
} from "../../slices/userApiSlice";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setType } from "../../slices/allUsersSlice";

export default function JobPortalType() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [saveEmployer] = useSaveEmployerMutation();
  const [saveJobSeeker] = useSaveJobSeekerMutation();

  const handleEmployer = async () => {
    try {
      const res = await saveEmployer().unwrap();
      if (res.msg === "success") {
        if (res.employer?.companyName || res.newEmployer?.companyName) {
          dispatch(setType("employer"));
          navigate("/employer");
        } else {
          dispatch(setType("employer"));
          navigate("/employer/dashboard/company-profile");
        }
      } else {
        toast.error(res.msg);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  };
  const handleJobSeeker = async () => {
    try {
      const res = await saveJobSeeker().unwrap();
      if (res.msg === "success") {
        if (res.newSeeker?.dataCollected || res.jobseeker?.dataCollected) {
          dispatch(setType("jobseeker"));
          navigate("/jobseeker");
        } else {
          dispatch(setType("jobseeker"));
          navigate("/jobseeker/details");
        }
      } else {
        toast.error(res.msg);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  };
  const { userInfo } = useSelector((state) => state.allUsers);

  useEffect(() => {
    if (!userInfo?.username) {
      navigate("/auth/login");
    }
  }, [userInfo]);
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-5 p-3 bg-background1 rounded-lg">
      <h1 className="text-xl lg:text-3xl my-5">Select what you prefer.</h1>
      <div className="flex gap-3 flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <PortalTypeCard
            click={handleEmployer}
            title={"Employer"}
            src={"/employer.png"}
            desc={
              "Access a diverse pool of qualified candidates, utilize advanced search tools, and streamline your hiring with our user-friendly platform. Post jobs, manage applications, and connect with top talent effortlessly. Enhance your workforce with our comprehensive recruitment solutions today."
            }
            background={"bg-slate-500"}
            hover={"hover:bg-slate-400"}
          />
        </div>
        <div className="w-full lg:w-1/2">
          <PortalTypeCard
            click={handleJobSeeker}
            title={"Job Seeker"}
            src={"/candidate.png"}
            desc={
              "Browse thousands of job listings, create a standout profile, and connect with top employers. Our platform offers personalized job recommendations, resume building tools, and career advice to help you find your perfect job. Start your journey to success today."
            }
            background={"bg-stone-500"}
            hover={"hover:bg-stone-400"}
          />
        </div>
      </div>
    </div>
  );
}
