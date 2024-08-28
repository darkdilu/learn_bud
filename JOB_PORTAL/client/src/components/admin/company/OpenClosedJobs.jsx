import React from "react";

export default function OpenClosedJobs({ name, data }) {
  return (
    <section className=" mt-5 rounded-lg">
      <h4 className="form-title mb-8 text-2xl font-semibold">{name}</h4>

      <div className="mt-7 mb-5">
        <table className="bg-secondary w-full text-center rounded-lg">
          <thead>
            <tr className="border-b-2 border-b-ascent">
              <th className=" tablecolumn">POSITION</th>
              <th className=" tablecolumn">CREATED</th>
              <th className=" tablecolumn">DESCRIPTION</th>
              <th className="tablecolumn">SKILLS</th>
              <th className="tablecolumn">APPLIED</th>
              <th className="tablecolumn">SELECTED</th>
            </tr>
          </thead>
          <tbody>
            {data.map((x) => (
              <tr key={x.id}>
                <td className=" tablecolumn">{x.position}</td>
                <td className=" tablecolumn">{x.createdAt}</td>
                <td className=" tablecolumn">{x.description}</td>
                <td className=" tablecolumn">{x.skills}</td>
                <td className=" tablecolumn">{x.applied}</td>
                <td className=" tablecolumn">{x.selected}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
