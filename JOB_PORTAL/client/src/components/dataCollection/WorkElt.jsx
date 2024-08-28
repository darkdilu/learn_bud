import React from "react";
import { IoTrashBinOutline } from "react-icons/io5";

export default function WorkElt({
  index,
  workDetail,
  handleChange,
  handleRemove,
}) {
  return (
    <div className="p-4 bg-secondary w-full rounded-lg my-3 border">
      <div className="form-row">
        <label className="form-label">Job Title</label>
        <input
          type="text"
          value={workDetail?.jobTitle || ""}
          onChange={(e) => handleChange(index, "jobTitle", e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-row">
        <label className="form-label">Company</label>
        <input
          type="text"
          value={workDetail?.company || ""}
          onChange={(e) => handleChange(index, "company", e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-row">
        <label className="form-label">Start Date</label>
        <input
          type="date"
          value={workDetail?.started?.toString().slice(0, 10) || ""}
          onChange={(e) => handleChange(index, "started", e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-row">
        <label className="form-label">End Date</label>
        <input
          type="date"
          value={workDetail?.ended?.toString().slice(0, 10) || ""}
          onChange={(e) => handleChange(index, "ended", e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-row">
        <label className=" me-3">Currently working</label>
        <input
          type="checkbox"
          value={workDetail.isWorking ? true : false}
          onChange={(e) => handleChange(index, "isWorking", e.target.checked)}
          className=""
        />
      </div>
      <div className="form-row">
        <label className="form-label">Acheivements</label>
        <input
          type="text"
          value={workDetail?.acheivements || ""}
          onChange={(e) => handleChange(index, "acheivements", e.target.value)}
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
