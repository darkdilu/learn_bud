import React from "react";

export default function ExtraDetailElt({ title, icon, content }) {
  return (
    <div className="flex gap-6 items-center justify-start">
      <div className="text-ascent text-2xl">{icon}</div>
      <div className="flex flex-col gap-3">
        <h1 className="text-lg">{title}</h1>
        <p className="text-gray-500 text-md">{content}</p>
      </div>
    </div>
  );
}
