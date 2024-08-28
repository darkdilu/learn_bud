import React from "react";

export default function MessageSearch({ value, onChange }) {
  return (
    <div className="flex gap-3 items-center">
      <input
        type="text"
        placeholder="Search"
        className="p-2 bg-background2 rounded-xl"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
