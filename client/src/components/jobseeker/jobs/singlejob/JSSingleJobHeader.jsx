import React from "react";
import { BsClockHistory, BsSuitcase } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { SlLocationPin } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  useApplyJobMutation,
  useGetJobSeekerDetailsQuery,
} from "../../../../slices/jobSeekerApiSlice";
import { toast } from "react-toastify";
import { setJSInfo } from "../../../../slices/allUsersSlice";
import Loading from "../../../Loading";

export default function JSSingleJobHeader({ data, refetchData }) {
  const dispatch = useDispatch();
  const { JSInfo } = useSelector((state) => state.allUsers);
  const [applyJob, { isLoading }] = useApplyJobMutation();
  const { data: userData, refetch: refetch2 } = useGetJobSeekerDetailsQuery();
  async function handleApply() {
    try {
      const res = await applyJob(data._id).unwrap();
      if (res.msg === "success") {
        toast.success("Applied");
        await refetchData();
        await refetch2();
        dispatch(setJSInfo(userData));
      } else {
        toast.error(res.msg);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  }
  return (
    <div className="flex md:flex-row flex-col md:justify-between bg-background2 items-center md:px-10 p-3  rounded-xl">
      <div className="flex md:flex-row flex-col gap-4 items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img src={data.owner.logo ? data.owner.logo : "/nocompany.png"}></img>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-medium">{data.jobTitle}</h1>
          <div className="flex gap-5 md:flex-row flex-col text-sm">
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <SlLocationPin />
              </span>
              {data.jobLocation}
              {", "}
              {data.jobPlace}
            </p>
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <BsSuitcase />
              </span>
              {data.category}
            </p>
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <BsClockHistory />
              </span>
              posted on, {data?.createdAt?.toString().slice(0, 10)}
            </p>
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <GiMoneyStack />
              </span>
              {data.salary} LPA
            </p>
          </div>
          <div className="flex gap-5 md:flex-row flex-col text-sm">
            {data.skills?.slice(0, 3).map((x) => (
              <div
                className="p-2 bg-background1 text-center rounded-md"
                key={x}
              >
                {x}
              </div>
            ))}
          </div>
          <h1 className="text-sm text-gray-500 mb-3">
            Total Applications: {data.applied.length}
          </h1>
        </div>
      </div>
      <div>
        {" "}
        <Link
          to={"/jobseeker/jobs"}
          className="p-3 rounded-lg bg-ascent text-secondary hover:bg-hover"
        >
          Back
        </Link>
        <button
          className="p-3 rounded-lg bg-ascent text-secondary hover:bg-hover ml-3"
          disabled={data.applied.includes(JSInfo._id)}
          onClick={handleApply}
        >
          {data.applied.includes(JSInfo._id) ? "Applied" : "Apply"}
        </button>
        {isLoading && <Loading />}
      </div>
    </div>
  );
}
