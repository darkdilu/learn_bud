import React from "react";
import { IoTrashBinOutline } from "react-icons/io5";

export default function ProjectElt({
  index,
  projectDetail,
  handleChange,
  handleRemove,
}) {
  return (
    <div className="p-4 bg-secondary w-full rounded-lg my-3 border">
      <div className="form-row">
        <label className="form-label">Project Name</label>
        <input
          type="text"
          value={projectDetail?.project || ""}
          onChange={(e) => handleChange(index, "project", e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-row">
        <label className="form-label">Start Date</label>
        <input
          type="date"
          value={projectDetail?.started?.toString().slice(0, 10) || ""}
          onChange={(e) => handleChange(index, "started", e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-row">
        <label className="form-label">End Date</label>
        <input
          type="date"
          value={projectDetail?.ended?.toString().slice(0, 10) || ""}
          onChange={(e) => handleChange(index, "ended", e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-row">
        <label className=" me-3">Currently working</label>
        <input
          type="checkbox"
          value={projectDetail?.isCurrent || false}
          onChange={(e) => handleChange(index, "isCurrent", e.target.checked)}
          className=""
        />
      </div>
      <div className="form-row">
        <label className="form-label">Description</label>
        <input
          type="text"
          value={projectDetail?.description || ""}
          onChange={(e) => handleChange(index, "description", e.target.value)}
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
