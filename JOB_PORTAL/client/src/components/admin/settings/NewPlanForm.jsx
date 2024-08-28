import React from "react";

export default function NewPlanForm() {
  return (
    <div className="p-2 bg-secondary lg:w-1/2 rounded-lg mt-3">
      <div className="form-row">
        <label htmlFor="Name" className="form-label">
          Name
        </label>
        <input type="text" id="Name" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="Price" className="form-label">
          Price
        </label>
        <input type="number" id="Price" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="Features" className="form-label">
          Features
        </label>
        <textarea id="Features" rows={5} className="form-textarea" />
      </div>
      <div className="flex justify-end">
        <button className="p-2 bg-ascent text-primary rounded-md hover:bg-hover">
          Submit
        </button>
      </div>
    </div>
  );
}
