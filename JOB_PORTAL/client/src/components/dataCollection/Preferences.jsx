import React from "react";
import PreferenceElt from "./PreferenceElt";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setPreferences,
  setProfessionalDetails,
} from "../../slices/dataCollectionSlice";
import { useSaveJobSeekerDetailsMutation } from "../../slices/jobSeekerApiSlice";
import { toast } from "react-toastify";
import Loading from "../Loading";

export default function Preferences() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [saveJobSeekerDetails, { isLoading }] =
    useSaveJobSeekerDetailsMutation();
  const states = useSelector((state) => state.dataCollection);
  function handleBack() {
    dispatch(setPreferences("pending"));
    dispatch(setProfessionalDetails("current"));
    window.scrollTo(0, 0);
  }

  async function handleNext() {
    try {
      const res = await saveJobSeekerDetails({
        work: states.work,
        education: states.education,
        projects: states.projects,
        certificates: states.certificates,
        fullName: states.fullName,
        currentSalary: states.currentSalary,
        expectedSalary: states.expectedSalary,
        totalExperience: states.totalExperience,
        preferredLocation: states.preferredLocation,
        skills: states.skills,
        languages: states.languages,
        about: states.about,
        oneWord: states.oneWord,
      }).unwrap();
      if (res.msg === "details added successfully") {
        dispatch(setPreferences("completed"));
        navigate("/jobseeker");
        toast.success("details added successfully");
      } else {
        toast.error(res.msg);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  }
  return (
    <div className="p-4 bg-secondary min-h-96 w-11/12 lg:w-1/2 rounded-lg mt-3">
      <PreferenceElt />

      <div>
        <div className="flex justify-end">
          <button
            className="p-2 bg-ascent text-primary rounded-md hover:bg-hover me-1"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            className="p-2 bg-ascent text-primary rounded-md hover:bg-hover"
            onClick={handleNext}
            disabled={isLoading}
          >
            Submit
          </button>
          {isLoading && <Loading />}
        </div>
      </div>
    </div>
  );
}
