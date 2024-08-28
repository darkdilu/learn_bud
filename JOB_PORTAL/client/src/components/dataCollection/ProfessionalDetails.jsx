import React, { useState } from "react";
import ProjectElt from "./ProjectElt";
import { useDispatch, useSelector } from "react-redux";
import {
  setCertificates,
  setData,
  setPreferences,
  setProfessionalDetails,
  setProjects,
  setWorkDetails,
} from "../../slices/dataCollectionSlice";
import Certificate from "./Certificate";
import { useUpdateProfessionalDetailsMutation } from "../../slices/jobSeekerApiSlice";
import { toast } from "react-toastify";
import Loading from "../Loading";

export default function ProfessionalDetails({ inside, toggle, togglestate }) {
  const { projects, certificates } = useSelector(
    (state) => state.dataCollection
  );
  const [updateProfessionalDetails, { isLoading }] =
    useUpdateProfessionalDetailsMutation();
  const [projectDetail, setProjectDetail] = useState(projects || [{}]);
  const [certificateDetail, setCertificateDetail] = useState(
    certificates || [{}]
  );
  const dispatch = useDispatch();
  function handleBack() {
    dispatch(setCertificates(certificateDetail));
    dispatch(setProjects(projectDetail));
    dispatch(setProfessionalDetails("pending"));
    dispatch(setWorkDetails("current"));
    window.scrollTo(0, 0);
  }
  function handleNext() {
    dispatch(setCertificates(certificateDetail));
    dispatch(setProjects(projectDetail));
    dispatch(setProfessionalDetails("completed"));
    dispatch(setPreferences("current"));
    window.scrollTo(0, 0);
  }

  function handleProjectChange(index, field, value) {
    const newProjectDetail = [...projectDetail];
    newProjectDetail[index] = { ...newProjectDetail[index], [field]: value };
    setProjectDetail(newProjectDetail);
  }

  function addNewProjectForm() {
    setProjectDetail([...projectDetail, {}]);
  }

  function removeProjectForm(index) {
    const updatedProject = projectDetail.filter((_, i) => i !== index);
    setProjectDetail(updatedProject);
  }

  function handleCertificateChange(index, field, value) {
    const newCertificateDetail = [...certificateDetail];
    newCertificateDetail[index] = {
      ...newCertificateDetail[index],
      [field]: value,
    };
    setCertificateDetail(newCertificateDetail);
  }

  function addNewCertificateForm() {
    setCertificateDetail([...certificateDetail, {}]);
  }

  function removeCertificateForm(index) {
    const updated = certificateDetail.filter((_, i) => i !== index);
    setCertificateDetail(updated);
  }

  async function handleSave() {
    try {
      const res = await updateProfessionalDetails({
        projects: projectDetail,
        certificates: certificateDetail,
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
      <h1 className="text-xl my-2">Personal Projects</h1>
      {projectDetail.map((elt, index) => (
        <ProjectElt
          key={index}
          index={index}
          projectDetail={elt}
          handleChange={handleProjectChange}
          handleRemove={removeProjectForm}
        />
      ))}

      <div className="flex justify-end">
        <button
          className="p-2 bg-ascent text-primary rounded-md hover:bg-hover"
          onClick={addNewProjectForm}
        >
          Add New
        </button>
      </div>
      <h1 className="text-xl my-2">Certificates</h1>
      {certificateDetail.map((elt, index) => (
        <Certificate
          key={index}
          index={index}
          certificateDetail={elt}
          handleChange={handleCertificateChange}
          handleRemove={removeCertificateForm}
        />
      ))}

      <div className="flex justify-end">
        <button
          className="p-2 mb-3 bg-ascent text-primary rounded-md hover:bg-hover"
          onClick={addNewCertificateForm}
        >
          Add New
        </button>
      </div>
      <div>
        <div className="flex justify-end">
          {!inside && (
            <>
              <button
                className="p-2 bg-ascent text-primary rounded-md hover:bg-hover me-1"
                onClick={handleBack}
              >
                Back
              </button>
              <button
                className="p-2 bg-ascent text-primary rounded-md hover:bg-hover"
                onClick={handleNext}
              >
                Next
              </button>
            </>
          )}
          {inside && (
            <>
              {" "}
              <button
                onClick={handleSave}
                className="p-2 bg-ascent text-primary rounded-md hover:bg-hover me-1"
              >
                Save
              </button>
              {isLoading && <Loading />}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
