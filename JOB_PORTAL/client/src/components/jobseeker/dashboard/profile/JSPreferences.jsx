import React from "react";
import FormInput from "../../../FormInput";
import { useDispatch, useSelector } from "react-redux";
import {
  setAbout,
  setCurrentSalary,
  setData,
  setExpectedSalary,
  setGithub,
  setLanguages,
  setOneWord,
  setPortfolio,
  setPrefferedLocation,
  setskills,
  setTotalExperience,
} from "../../../../slices/dataCollectionSlice";
import { useUpdatePreferencesMutation } from "../../../../slices/jobSeekerApiSlice";
import { toast } from "react-toastify";
import Loading from "../../../Loading";
import FormSelect from "../../../FormSelect";

export default function JSPreferences({ toggle, togglestate }) {
  const state = useSelector((state) => state.dataCollection);
  const [updatePreferences, { isLoading }] = useUpdatePreferencesMutation();
  const dispatch = useDispatch();

  async function handleSave() {
    try {
      const res = await updatePreferences({
        expectedSalary: state.expectedSalary,
        currentSalary: state.currentSalary,
        totalExperience: state.totalExperience,
        preferredLocation: state.preferredLocation,
        languages: state.languages,
        skills: state.skills,
        portfolio: state.portfolio,
        github: state.github,
        about: state.about,
        oneWord: state.oneWord,
      }).unwrap();
      if (res.msg === "success") {
        toggle(!togglestate);
        dispatch(setData(res.seeker));
        toast.success("saved");
        window.scrollTo(0, 0);
      } else {
        toast.error(res.msg);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  }
  return (
    <div className="p-4 bg-secondary w-full rounded-lg mt-3">
      <FormInput
        title={"Current Salary"}
        type={"number"}
        value={state.currentSalary}
        onchange={(e) => dispatch(setCurrentSalary(e.target.value))}
      />
      <FormInput
        title={"Expected Salary"}
        type={"number"}
        value={state.expectedSalary}
        onchange={(e) => dispatch(setExpectedSalary(e.target.value))}
      />
      <FormSelect
        title={"Total Experience"}
        list={["fresher", "0-1", "1-2", "2-4", "4-6", ">6"]}
        value={state.totalExperience}
        onchange={(e) => dispatch(setTotalExperience(e.target.value))}
      />
      <FormInput
        title={"Preferred Locations"}
        type={"text"}
        value={state.preferredLocation}
        onchange={(e) => dispatch(setPrefferedLocation(e.target.value))}
      />
      <FormInput
        title={"Languages"}
        type={"text"}
        value={state.languages}
        onchange={(e) => dispatch(setLanguages(e.target.value))}
      />
      <FormInput
        title={"skills"}
        type={"text"}
        value={state.skills}
        onchange={(e) => dispatch(setskills(e.target.value))}
      />
      <FormInput
        title={"Portfolio"}
        type={"text"}
        value={state.portfolio}
        onchange={(e) => dispatch(setPortfolio(e.target.value))}
      />
      <FormInput
        title={"Github"}
        type={"text"}
        value={state.github}
        onchange={(e) => dispatch(setGithub(e.target.value))}
      />
      <FormInput
        title={"Describe in 1 word"}
        type={"text"}
        value={state.oneWord}
        placeholder={"eg: Web Developer"}
        onchange={(e) => dispatch(setOneWord(e.target.value))}
      />
      <FormInput
        title={"about"}
        type={"text"}
        value={state.about}
        onchange={(e) => dispatch(setAbout(e.target.value))}
      />
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="p-2 bg-ascent text-primary rounded-md hover:bg-hover me-1"
        >
          Save
        </button>
        {isLoading && <Loading />}
      </div>
    </div>
  );
}
