import React from "react";
import FormInput from "../../../FormInput";
import FormSelect from "../../../FormSelect";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddress,
  setAge,
  setData,
  setDateOfBirth,
  setEmail,
  setFullName,
  setProfilePic,
  setQualification,
  setResume,
} from "../../../../slices/dataCollectionSlice";
import {
  useUpdateBasicDetailsMutation,
  useUpdateProfilePictureMutation,
  useUpdateResumeMutation,
} from "../../../../slices/jobSeekerApiSlice";
import { toast } from "react-toastify";
import Loading from "../../../Loading";

export default function JSBasicDetails({ toggle, togglestate }) {
  const state = useSelector((state) => state.dataCollection);
  const [updateBasicDetails, { isLoading }] = useUpdateBasicDetailsMutation();
  const [updateProfilePicture, { isLoading: loadingUpload }] =
    useUpdateProfilePictureMutation();
  const [updateResume, { isLoading: loadingResume }] =
    useUpdateResumeMutation();
  const dispatch = useDispatch();

  async function handleSave() {
    try {
      const res = await updateBasicDetails({
        age: state.age,
        address: state.address,
        dateOfBirth: state.dateOfBirth,
        email: state.email,
        fullName: state.fullName,
        qualification: state.qualification,
        profilePic: state.profilePic,
      }).unwrap();
      if (res.msg === "success") {
        toggle(!togglestate);
        dispatch(setData(res.updated));
        toast.success("saved");
        window.scrollTo(0, 0);
      } else {
        toast.error(res.msg);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  }

  async function handleProfilepic(e) {
    const formdata = new FormData();
    formdata.append("profilePic", e.target.files[0]);
    const file = formdata.get("profilePic");
    if (file.size > 500000) {
      toast.error("Image is too large. should be below 500kb");
      return null;
    }
    try {
      const res = await updateProfilePicture(formdata).unwrap();
      if (res.msg === "success") {
        dispatch(setProfilePic(res.url));
      } else {
        toast.error(res.msg);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  }

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
      <FormInput
        title={"Full Name"}
        type={"text"}
        value={state.fullName}
        onchange={(e) => dispatch(setFullName(e.target.value))}
      />
      <div className="form-row">
        <label className="form-label">Profile Picture</label>
        <div className="flex items-center">
          <input
            type={"file"}
            className="w-full py-1 px-3 rounded-lg bg-background2 border border-gray-300 text-gray-900 h-11"
            onChange={handleProfilepic}
            accept="image/*"
          />
        </div>
        {loadingUpload && <Loading />}
        {state.profilePic && (
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src={state.profilePic} className="object-contain"></img>
          </div>
        )}
      </div>
      <FormInput
        title={"Email"}
        type={"email"}
        value={state.email}
        onchange={(e) => dispatch(setEmail(e.target.value))}
      />
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
        {state.resume && <p className="text-xs">{state.resume}</p>}
      </div>
      <FormInput
        title={"Age"}
        type={"number"}
        value={state.age}
        onchange={(e) => dispatch(setAge(e.target.value))}
      />
      <FormInput
        title={"Date of Birth"}
        type={"date"}
        value={state.dateOfBirth.toString().slice(0, 10)}
        onchange={(e) => dispatch(setDateOfBirth(e.target.value))}
      />
      <FormInput
        title={"Address"}
        type={"text"}
        value={state.address}
        onchange={(e) => dispatch(setAddress(e.target.value))}
      />
      <FormSelect
        title={"Qualification"}
        list={[
          "Certificate",
          "Diploma",
          "Bachelors Degree",
          "Masters Degree",
          "Doctorate",
        ]}
        value={state.qualification}
        onchange={(e) => dispatch(setQualification(e.target.value))}
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
