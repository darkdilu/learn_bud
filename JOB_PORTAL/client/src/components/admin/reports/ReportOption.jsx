import React from "react";

export default function ReportOption({ name, setReport }) {
  return (
    <div className="flex lg:flex-row flex-col justify-between items-center bg-secondary rounded-md p-2 my-2 lg:w-3/4">
      <p className="text-lg lg:mb-0 mb-5 font-semibold">{name}</p>

      <div className="flex lg:flex-row flex-col justify-center items-center gap-2">
        <label htmlFor="fromDate" className="me-2">
          From
        </label>
        <input type="date" className="p-2 mx-1" id="fromDate"></input>
        <p>-</p>
        <label htmlFor="toDate" className="me-2">
          To
        </label>
        <input type="date" className="p-2 mx-1" id="toDate"></input>
        <button
          onClick={() => setReport(name)}
          className="p-2 bg-ascent text-primary rounded-md hover:bg-hover"
        >
          Generate
        </button>
      </div>
    </div>
  );
}
