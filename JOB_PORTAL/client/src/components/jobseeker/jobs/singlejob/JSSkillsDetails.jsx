import React from "react";
import { VscTools } from "react-icons/vsc";

export default function JSSkillsDetails({ data }) {
  return (
    <>
      <div className="py-5 flex items-center gap-3">
        <h1 className="text-xl ">Skills</h1>
        <p>
          <VscTools />
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {data.skills?.map((item) => (
          <div
            className="px-2 py-2 text-xs bg-background1 text-center text-gray-500 rounded-lg"
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
}
