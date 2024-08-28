import React from "react";
import { IoTrashBinOutline } from "react-icons/io5";

export default function Certificate({
  index,
  certificateDetail,
  handleChange,
  handleRemove,
}) {
  return (
    <div className="p-4 bg-secondary w-full rounded-lg my-3 border">
      <div className="form-row">
        <label className="form-label">Certificate Name</label>
        <input
          type="text"
          value={certificateDetail?.certificate || ""}
          onChange={(e) => handleChange(index, "certificate", e.target.value)}
          className="form-input"
        />
      </div>

      <div className="form-row">
        <label className="form-label">Start Date</label>
        <input
          type="date"
          value={certificateDetail?.started?.toString().slice(0, 10) || ""}
          onChange={(e) => handleChange(index, "started", e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-row">
        <label className="form-label">End Date</label>
        <input
          type="date"
          value={certificateDetail?.ended?.toString().slice(0, 10) || ""}
          onChange={(e) => handleChange(index, "ended", e.target.value)}
          className="form-input"
        />
      </div>

      <div className="form-row">
        <label className="form-label">Description</label>
        <input
          type="text"
          value={certificateDetail?.description || ""}
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
