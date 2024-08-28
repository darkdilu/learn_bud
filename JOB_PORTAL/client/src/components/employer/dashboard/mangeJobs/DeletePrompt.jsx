import React from "react";

export default function DeletePrompt({ function1, function2 }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full opacity-80 bg-black flex justify-center items-center">
      <div className="bg-background1 p-3 rounded-lg flex flex-col gap-5 justify-center items-stretch max-w-96 h-48 opacity-100">
        <h1 className="leading-6 font-semibold">
          Are you sure want to delete? All data related to the job will be lost.
        </h1>
        <div className="flex gap-5 justify-center">
          <button
            onClick={function1}
            className="p-2 bg-gray-500 rounded-lg hover:bg-gray-400"
          >
            No
          </button>
          <button
            onClick={function2}
            className="p-2 bg-red-500 rounded-lg hover:bg-red-400"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
