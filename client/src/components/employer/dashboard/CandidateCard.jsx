import React from "react";
import { professionalSkills } from "../../../utils/skills";
import { SlLocationPin } from "react-icons/sl";
import { IoCashOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  useRejectUserMutation,
  useShortListUserMutation,
} from "../../../slices/employerApiSlice";
import { toast } from "react-toastify";
import Loading from "../../Loading";

export default function CandidateCard({
  name,
  position,
  image,
  currentCTC,
  role,
  skills,
  location,
  date,
  applicantId,
  jobId,
  action,
  refetch,
}) {
  const [shortListUser, { isLoading }] = useShortListUserMutation();
  const [rejectUser, { isLoading: loading2 }] = useRejectUserMutation();

  async function handleShortList(jobId, applicantId) {
    try {
      const res = await shortListUser({ jobId, applicantId }).unwrap();
      if (res.msg === "success") {
        refetch();
        toast.success("ShortListed");
      } else {
        toast.error(res.msg);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  }

  async function handleReject(jobId, applicantId) {
    try {
      const res = await rejectUser({ jobId, applicantId }).unwrap();
      if (res.msg === "success") {
        refetch();
        toast.success("Rejected");
      } else {
        toast.error(res.msg);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  }

  return (
    <div className="flex md:flex-row flex-col md:justify-between items-center md:px-10 p-3 border border-primary shadow-md rounded-xl">
      <div className="flex md:flex-row flex-col gap-4 items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img src={image}></img>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-medium">{name}</h1>
          <div className="flex gap-5 text-sm">
            <p className="text-hover">{role}</p>
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <SlLocationPin />
              </span>
              {location}
            </p>
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <IoCashOutline />
              </span>
              {currentCTC} CTC
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {skills?.slice(0, 3).map((item) => (
              <div
                className="px-2 py-2 text-xs bg-primary text-center text-gray-500 rounded-lg"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
          <p className="text-hover py-4 border-y-2 border-hover">
            Applied for {position} on {date}
          </p>
          <div className="flex gap-3 justify-between">
            <Link
              to={`/employer/candidates/${applicantId}`}
              className="text-blue-700 bg-blue-100 hover:bg-blue-200 p-2 rounded-xl"
            >
              View
            </Link>
            {action !== "rejected" && (
              <button
                className={`text-green-700 ${
                  action === "shortListed"
                    ? "bg-green-400"
                    : "bg-green-100 hover:bg-green-200"
                }  p-2 rounded-xl`}
                disabled={action === "shortListed"}
                onClick={() => handleShortList(jobId, applicantId)}
              >
                {action === "shortListed" ? "ShortListed" : "ShortList"}
                {isLoading && <Loading />}
              </button>
            )}

            {action !== "shortListed" && (
              <button
                className={`text-yellow-700 ${
                  action === "rejected"
                    ? "bg-yellow-400"
                    : "bg-yellow-100 hover:bg-yellow-200"
                }  p-2 rounded-xl`}
                disabled={action === "rejected"}
                onClick={() => handleReject(jobId, applicantId)}
              >
                {action === "rejected" ? "Rejected" : "Reject"}
                {loading2 && <Loading />}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
