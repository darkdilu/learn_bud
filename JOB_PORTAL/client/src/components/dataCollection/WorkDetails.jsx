import React, { useState } from "react";
import WorkElt from "./WorkElt";
import { useDispatch, useSelector } from "react-redux";
import {
  setData,
  setEducationDetails,
  setProfessionalDetails,
  setWork,
  setWorkDetails,
} from "../../slices/dataCollectionSlice";
import { useUpdateWorkDetailsMutation } from "../../slices/jobSeekerApiSlice";
import { toast } from "react-toastify";
import Loading from "../Loading";

export default function WorkDetails({ inside, toggle, togglestate }) {
  const { work } = useSelector((state) => state.dataCollection);
  const [updateWorkDetails, { isLoading }] = useUpdateWorkDetailsMutation();
  const [workDetail, setWorkDetail] = useState(work || [{}]);
  const dispatch = useDispatch();

  function handleBack() {
    dispatch(setWork(workDetail));
    dispatch(setEducationDetails("current"));
    dispatch(setWorkDetails("pending"));
    window.scrollTo(0, 0);
  }
  function handleNext() {
    dispatch(setWork(workDetail));
    dispatch(setProfessionalDetails("current"));
    dispatch(setWorkDetails("completed"));
    window.scrollTo(0, 0);
  }

  function handleChange(index, field, value) {
    const newWorkDetail = [...workDetail];
    newWorkDetail[index] = { ...newWorkDetail[index], [field]: value };
    setWorkDetail(newWorkDetail);
  }

  function addNewForm() {
    setWorkDetail([...workDetail, {}]);
  }

  function removeForm(index) {
    const updated = workDetail.filter((_, i) => i !== index);
    setWorkDetail(updated);
  }

  async function handleSave() {
    try {
      const res = await updateWorkDetails({
        work: workDetail,
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
    <div
      className={`p-4 bg-secondary min-h-96  ${
        inside ? "w-full" : "w-11/12 lg:w-1/2"
      } rounded-lg mt-3`}
    >
      <h1 className="text-xl my-2">Work Experience</h1>
      {workDetail.map((elt, index) => (
        <WorkElt
          key={index}
          workDetail={elt}
          index={index}
          handleChange={handleChange}
          handleRemove={removeForm}
        />
      ))}

      <div>
        <div className="flex justify-end">
          {!inside && (
            <button
              className="p-2 bg-ascent text-primary rounded-md hover:bg-hover me-1"
              onClick={handleBack}
            >
              Back
            </button>
          )}
          <button
            className="p-2 bg-ascent text-primary rounded-md hover:bg-hover me-1"
            onClick={addNewForm}
          >
            Add New
          </button>
          {inside && (
            <>
              <button
                onClick={handleSave}
                className="p-2 bg-ascent text-primary rounded-md hover:bg-hover"
              >
                Save
              </button>
              {isLoading && <Loading />}
            </>
          )}
          {!inside && (
            <button
              className="p-2 bg-ascent text-primary rounded-md hover:bg-hover"
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
