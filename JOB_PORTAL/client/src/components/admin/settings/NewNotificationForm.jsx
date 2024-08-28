import React from "react";

export default function NewNotificationForm() {
  return (
    <div className="p-2 bg-secondary lg:w-1/2 rounded-lg mt-3">
      <div className="form-row">
        <label htmlFor="Name" className="form-label">
          Name
        </label>
        <input type="text" id="Name" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="content" className="form-label">
          Content
        </label>
        <textarea id="content" rows={2} className="form-textarea" />
      </div>
      <div className="form-row">
        <label htmlFor="type" className="form-label">
          Type
        </label>
        <select id="type" className="form-select">
          <option value={"ALL"}>For All</option>
          <option value={"COMPANY"}>For Company</option>
          <option value={"USERS"}>For Users</option>
        </select>
      </div>
      <div className="flex justify-end">
        <button className="p-2 bg-ascent text-primary rounded-md hover:bg-hover">
          Submit
        </button>
      </div>
    </div>
  );
}
