import React from "react";
import { userData } from "../../../utils/data";

export default function RevenueReports() {
  return (
    <section className=" mt-5 rounded-lg">
      <h4 className="form-title mb-8 text-2xl font-semibold">Revenue Report</h4>

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
              <th className=" tablecolumn">SUBSCRIBER</th>
              <th className=" tablecolumn">PLAN</th>
              <th className=" tablecolumn">VALIDITY</th>
              <th className="tablecolumn">AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((x) => (
              <tr key={x.id}>
                <td className=" tablecolumn">{x.name}</td>
                <td className=" tablecolumn">PREMIUM</td>
                <td className=" tablecolumn">{x.createdAt}</td>
                <td className=" tablecolumn">2000</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-t-ascent">
              <th className=" tablecolumn">GRAND TOTAL - 50000/-</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}
