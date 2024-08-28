import React from "react";

export default function DetailElement({ title, content }) {
  return (
    <div className="flex gap-3 justify-start items-center my-3">
      <p className="min-w-20">{title}</p>
      <p>:</p>
      <p>{content}</p>
    </div>
  );
}
