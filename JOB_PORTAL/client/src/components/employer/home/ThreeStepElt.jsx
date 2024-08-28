import React from "react";

export default function ThreeStepElt({ text, icon }) {
  return (
    <div className="flex justify-start items-center gap-3">
      <div className="text-4xl">{icon}</div>
      <p>{text}</p>
    </div>
  );
}
