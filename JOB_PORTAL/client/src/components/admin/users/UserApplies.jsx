import React from "react";

export default function UserApplies({ data }) {
  return (
    <section className=" mt-5 rounded-lg">
      <h4 className="form-title mb-8 text-2xl font-semibold">Applies</h4>

      <div className="mt-7 mb-5">
        <table className="bg-secondary w-full text-center rounded-lg">
          <thead>
            <tr className="border-b-2 border-b-ascent">
              <th className=" tablecolumn">JOB</th>
              <th className=" tablecolumn">APPLIED ON</th>
              <th className=" tablecolumn">COMPANY</th>

              <th className="tablecolumn">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((x) => (
              <tr key={x.id}>
                <td className=" tablecolumn">{x.position}</td>
                <td className=" tablecolumn">{x.createdAt}</td>
                <td className=" tablecolumn">{x.company}</td>
                <td className=" tablecolumn">{x.status || "PENDING"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
