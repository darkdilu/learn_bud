import React from "react";

export default function FormSelect({ title, list, value, onchange }) {
  return (
    <div className="form-row">
      <label htmlFor="status" className="form-label">
        {title}
      </label>
      <div className="flex items-center">
        <select
          id="status"
          value={value}
          onChange={onchange}
          className="w-full py-1 px-3 rounded-lg bg-background2 border border-gray-300 text-gray-900 h-11"
        >
          {list?.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
