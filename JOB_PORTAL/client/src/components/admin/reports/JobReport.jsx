import React from "react";
import { jobData } from "../../../utils/data";

export default function JobReport() {
  return (
    <section className=" mt-5 rounded-lg">
      <h4 className="form-title mb-8 text-2xl font-semibold">Job Report</h4>

      <div className="mt-7 mb-5">
        <button
          onClick={() => window.print()}
          className="p-2 my-1 bg-ascent text-primary rounded-md hover:bg-hover"
        >
          Print
        </button>
        <table className="bg-secondary w-full text-center rounded-lg">
          <thead>
            <tr className="border-b-2 border-b-ascent">
              <th className=" tablecolumn">JOB</th>
              <th className=" tablecolumn">COMPANY</th>
              <th className="tablecolumn">STATUS</th>
              <th className="tablecolumn">APPLICANTS</th>
              <th className="tablecolumn">SELECTED</th>
              <th className="tablecolumn">CREATED</th>
            </tr>
          </thead>
          <tbody>
            {jobData.map((x) => (
              <tr key={x.id}>
                <td className=" tablecolumn">{x.job}</td>
                <td className=" tablecolumn">{x.company}</td>
                <td className=" tablecolumn">{x.status}</td>
                <td className=" tablecolumn">{x.applicants}</td>
                <td className=" tablecolumn">{x.selected}</td>
                <td className=" tablecolumn">{x.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
