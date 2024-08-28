import React from "react";
import { userData } from "../../../utils/data";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import Pagination from "../Pagination";

export default function UserList() {
  return (
    <section className=" mt-5 rounded-lg">
      <h4 className="form-title mb-8 text-2xl font-semibold">All Users</h4>
      <div className="flex justify-end">
        <Pagination />
      </div>
      <div className="mt-7 mb-5">
        <table className="bg-secondary w-full text-center rounded-lg">
          <thead>
            <tr className="border-b-2 border-b-ascent">
              <th className=" tablecolumn">NAME</th>
              <th className=" tablecolumn">LOCATION</th>
              <th className="tablecolumn">PREMIUM</th>
              <th className="tablecolumn">APPLIED</th>
              <th className="tablecolumn"></th>
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
                <td className=" tablecolumn">{x.address}</td>
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

                <td className=" tablecolumn flex flex-col gap-1 justify-center items-center md:flex-row">
                  <Link
                    to={`/admin/users/${x.id}`}
                    className="bg-ascent text-primary px-1 py-1 w-full md:w-fit mx-1 md:px-2 md:py-2 rounded hover:bg-hover text-xs md:text-md cursor-pointer"
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
