import React from "react";
import StatComponent from "../../../components/admin/statistics/StatComponent";
import GraphComponent from "../../../components/admin/statistics/GraphComponent";
import { graphData1, graphData2 } from "../../../utils/data";

export default function Statistics() {
  return (
    <>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 my-10 gap-2">
        <div className="bg-secondary rounded-xl">
          <StatComponent count={"100"} text={"Jobs"} />
        </div>
        <div className="bg-secondary rounded-xl">
          <StatComponent count={"100"} text={"Companies"} />
        </div>
        <div className="bg-secondary rounded-xl">
          <StatComponent count={"100"} text={"Users"} />
        </div>
        <div className="bg-secondary rounded-xl">
          <StatComponent count={"50"} text={"Subscribers"} />
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-2xl font-semibold mt-5">Job stats</h1>
        <div className="bg-secondary mt-3 rounded-lg">
          <GraphComponent data={graphData1} />
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-2xl font-semibold mt-5">Subscribers stats</h1>
        <div className="bg-secondary mt-3 rounded-lg">
          <GraphComponent data={graphData2} />
        </div>
      </div>
    </>
  );
}
