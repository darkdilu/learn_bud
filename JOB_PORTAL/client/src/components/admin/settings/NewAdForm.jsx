import React from "react";

export default function NewAdForm() {
  return (
    <div className="p-2 bg-secondary lg:w-1/2 rounded-lg mt-3">
      <div className="form-row">
        <label htmlFor="file" className="form-label">
          Upload File
        </label>
        <input type="file" id="file" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="location" className="form-label">
          Location
        </label>
        <select id="location" className="form-select">
          <option value={"splash-screen"}>Splash Screen</option>
          <option value={"about-page"}>About Page</option>
          <option value={"footer"}>Footer</option>
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
