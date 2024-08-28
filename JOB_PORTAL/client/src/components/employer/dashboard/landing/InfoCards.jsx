import React from "react";

export default function InfoCards({ icon, content, no, bg, text }) {
  return (
    <div className="flex justify-between items-center bg-background2 p-3 h-28 rounded-lg">
      <div className={`text-4xl p-2 ${text} ${bg} rounded-xl`}>{icon}</div>
      <div className="flex flex-col gap-3">
        <p className={`text-3xl ${text}`}>{no}</p>
        <p>{content}</p>
      </div>
    </div>
  );
}
