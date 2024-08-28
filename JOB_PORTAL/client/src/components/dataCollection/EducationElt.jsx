import React from "react";
import { IoTrashBinOutline } from "react-icons/io5";

export default function EducationElt({
  index,
  educationDetail,
  handleChange,
  handleRemove,
}) {
  return (
    <div className="p-4 bg-secondary w-full rounded-lg my-3 border">
      <div className="form-row">
        <label className="form-label">Study Programme</label>
        <input
          type="text"
          value={educationDetail?.programme || ""}
          onChange={(e) => handleChange(index, "programme", e.target.value)}
          required
          className="form-input"
        />
      </div>
      <div className="form-row">
        <label className="form-label">Institution</label>
        <input
          type="text"
          value={educationDetail?.institution || ""}
          onChange={(e) => handleChange(index, "institution", e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-row">
        <label className="form-label">Start Date</label>
        <input
          type="date"
          value={educationDetail?.started?.toString().slice(0, 10) || ""}
          onChange={(e) => handleChange(index, "started", e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-row">
        <label className="form-label">End Date</label>
        <input
          type="date"
          value={educationDetail?.ended?.toString().slice(0, 10) || ""}
          onChange={(e) => handleChange(index, "ended", e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-row">
        <label className=" me-3">Currently doing this</label>
        <input
          type="checkbox"
          value={educationDetail?.isCurrent || false}
          onChange={(e) => handleChange(index, "isCurrent", e.target.checked)}
          className=""
        />
      </div>
      <div className="form-row">
        <label className="form-label">Courses</label>
        <input
          type="text"
          value={educationDetail?.courses || ""}
          onChange={(e) => handleChange(index, "courses", e.target.value)}
          className="form-input"
        />
      </div>
      <button
        className="text-xl text-red-500"
        onClick={() => handleRemove(index)}
      >
        <IoTrashBinOutline />
      </button>
    </div>
  );
}
