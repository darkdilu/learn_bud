import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAbout,
  setCurrentSalary,
  setExpectedSalary,
  setFullName,
  setLanguages,
  setOneWord,
  setPrefferedLocation,
  setResume,
  setTotalExperience,
  setskills,
} from "../../slices/dataCollectionSlice";
import Loading from "../Loading";
import { useUpdateResumeMutation } from "../../slices/jobSeekerApiSlice";
import FormSelect from "../FormSelect";

export default function PreferenceElt() {
  const {
    fullName,
    resume,
    currentSalary,
    expectedSalary,
    totalExperience,
    preferredLocation,
    skills,
    languages,
    about,
    oneWord,
  } = useSelector((state) => state.dataCollection);
  const [updateResume, { isLoading: loadingResume }] =
    useUpdateResumeMutation();
  const dispatch = useDispatch();

  async function handlepdf(e) {
    const formdata = new FormData();
    formdata.append("resume", e.target.files[0]);
    const file = formdata.get("resume");
    if (file.size > 500000) {
      toast.error("Pdf file too large. should be below 500 kb");
      return null;
    }
    try {
      const res = await updateResume(formdata).unwrap();
      if (res.msg === "success") {
        dispatch(setResume(res.url));
      } else {
        toast.error(res.msg);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  }
  return (
    <div className="p-4 bg-secondary w-full rounded-lg mt-3">
      <div className="form-row">
        <label className="form-label">Full Name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => dispatch(setFullName(e.target.value))}
          className="form-input"
        />
      </div>
      <div className="form-row">
        <label className="form-label">Resume </label>
        <div className="flex items-center">
          <input
            type={"file"}
            className="w-full py-1 px-3 rounded-lg bg-background2 border border-gray-300 text-gray-900 h-11"
            onChange={handlepdf}
            accept="application/pdf"
          />
        </div>
        {loadingResume && <Loading />}
        {resume && <p className="text-xs">{resume}</p>}
      </div>
      <div className="form-row">
        <label className="form-label">Current CTC</label>
        <input
          type="number"
          value={currentSalary}
          onChange={(e) => dispatch(setCurrentSalary(e.target.value))}
          className="form-input"
        />
      </div>
      <div className="form-row">
        <label className="form-label">Expected CTC</label>
        <input
          type="number"
          value={expectedSalary}
          onChange={(e) => dispatch(setExpectedSalary(e.target.value))}
          className="form-input"
        />
      </div>
      <FormSelect
        title={"Total Experience"}
        list={["fresher", "0-1", "1-2", "2-4", "4-6", ">6"]}
        value={totalExperience}
        onchange={(e) => dispatch(setTotalExperience(e.target.value))}
      />
      <div className="form-row">
        <label className="form-label">Preffered Locations</label>
        <input
          type="text"
          value={preferredLocation}
          onChange={(e) => dispatch(setPrefferedLocation(e.target.value))}
          className="form-input"
        />
      </div>
      <div className="form-row">
        <label className="form-label">Skills</label>
        <input
          type="text"
          className="form-input"
          value={skills}
          onChange={(e) => dispatch(setskills(e.target.value))}
        />
      </div>
      <div className="form-row">
        <label className="form-label">Languages</label>
        <input
          type="text"
          className="form-input"
          value={languages}
          onChange={(e) => dispatch(setLanguages(e.target.value))}
        />
      </div>
      <div className="form-row">
        <label className="form-label">Describe yorself in 1 word</label>
        <input
          type="text"
          className="form-input"
          placeholder="eg: Web Developer"
          value={oneWord}
          onChange={(e) => dispatch(setOneWord(e.target.value))}
        />
      </div>
      <div className="form-row">
        <label className="form-label">Describe Yourself</label>
        <textarea
          rows={2}
          value={about}
          onChange={(e) => dispatch(setAbout(e.target.value))}
          className="form-textarea"
        />
      </div>
    </div>
  );
}
