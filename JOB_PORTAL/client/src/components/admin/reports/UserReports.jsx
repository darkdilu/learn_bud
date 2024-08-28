import React from "react";
import { userData } from "../../../utils/data";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

export default function UserReports() {
  return (
    <section className=" mt-5 rounded-lg">
      <h4 className="form-title mb-8 text-2xl font-semibold">User Reports</h4>

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
              <th className=" tablecolumn">NAME</th>
              <th className=" tablecolumn">PHONE</th>
              <th className=" tablecolumn">EMAIL</th>
              <th className=" tablecolumn">LOCATION</th>
              <th className="tablecolumn">PREMIUM</th>
              <th className="tablecolumn">CREATED</th>
              <th className="tablecolumn">APPLIED</th>
              <th className="tablecolumn">JOBS</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((x) => (
              <tr key={x.id}>
                <td className=" tablecolumn flex justify-center items-center gap-2">
                  <span>
                    <img src={x.photo} alt={x.photo}></img>
                  </span>
                  <div>{x.name}</div>
                </td>
                <td className=" tablecolumn">{x.email}</td>
                <td className=" tablecolumn">{x.phone}</td>
                <td className=" tablecolumn">{x.address}</td>
                <td className=" tablecolumn">{x.createdAt}</td>
                <td className=" tablecolumn">
                  {x.premium ? (
                    <span className="text-green-500 flex justify-center">
                      <TiTick />
                    </span>
                  ) : (
                    <span className="text-red-500 flex justify-center">
                      <RxCross2 />
                    </span>
                  )}
                </td>
                <td className=" tablecolumn">{x.applied}</td>
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
