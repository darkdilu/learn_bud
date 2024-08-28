import React from "react";
import { companyData } from "../../../utils/data";

export default function CompanyReport() {
  return (
    <section className=" mt-5 rounded-lg">
      <h4 className="form-title mb-8 text-2xl font-semibold">Company Report</h4>

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
              <th className=" tablecolumn">COMPANY</th>
              <th className=" tablecolumn">TOTAL JOBS</th>
              <th className=" tablecolumn">ALL JOBS</th>
              <th className="tablecolumn">RATING</th>
              <th className="tablecolumn">OPEN JOBS</th>
              <th className="tablecolumn">AVAILABLE</th>
            </tr>
          </thead>
          <tbody>
            {companyData.map((x) => (
              <tr key={x.id}>
                <td className=" tablecolumn">{x.company}</td>
                <td className=" tablecolumn">{x.totalJobs}</td>
                <td className=" tablecolumn">
                  <div>
                    <ul>
                      <li>job 1</li>
                      <li>job 2</li>
                      <li>Job 3</li>
                    </ul>
                  </div>
                </td>
                <td className=" tablecolumn">{x.rating}</td>
                <td className=" tablecolumn">{x.available}</td>
                <td className=" tablecolumn">
                  <div>
                    <ul>
                      <li>job 1</li>
                      <li>job 2</li>
                      <li>Job 3</li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
