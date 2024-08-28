import React from "react";

export default function JobApplies({ job, data }) {
  return (
    <section className=" mt-5 rounded-lg">
      <h4 className="form-title mb-8 text-2xl font-semibold">Applies</h4>
      <h4 className="form-title mb-3 text-lg font-semibold">{`Total Applies: ${job?.applicants}`}</h4>
      <h4 className="form-title mb-3 text-lg font-semibold">{`Selected: ${job?.selected}`}</h4>
      <div className="mt-7 mb-5">
        <table className="bg-secondary w-full text-center rounded-lg">
          <thead>
            <tr className="border-b-2 border-b-ascent">
              <th className=" tablecolumn">NAME</th>
              <th className=" tablecolumn">APPLIED ON</th>
              <th className=" tablecolumn">SKILLS</th>
              <th className="tablecolumn">RESUME</th>
              <th className="tablecolumn">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((x) => (
              <tr key={x.id}>
                <td className=" tablecolumn flex justify-center items-center gap-2">
                  <span>
                    <img src={x.photo} alt={x.photo}></img>
                  </span>
                  <div>{x.name}</div>
                </td>
                <td className=" tablecolumn">{x.createdAt}</td>
                <td className=" tablecolumn">
                  {x.skill ? x.skill : "HTML, CSS"}
                </td>
                <td className=" tablecolumn"></td>
                <td className=" tablecolumn">{x.status || "PENDING"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
