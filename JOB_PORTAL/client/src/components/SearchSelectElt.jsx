import React from "react";

export default function SearchSelectElt({
  title,
  list,
  icon,
  value,
  onChange,
  isSort,
}) {
  return (
    <div className="form-row">
      <label htmlFor="status" className="form-label">
        {title}
      </label>
      <div className="flex items-center">
        <div className="text-2xl py-2 px-3 rounded-lg">{icon}</div>

        <select
          id="status"
          className="form-select"
          value={value}
          onChange={onChange}
        >
          <option value={isSort ? "Newest" : "ALL"}>
            {isSort ? "Newest" : "ALL"}
          </option>
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
