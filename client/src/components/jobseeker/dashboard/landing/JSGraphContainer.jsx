import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function JSGraphContainer() {
  return (
    <div className="p-5 bg-background2 my-4 rounded-lg hidden">
      <h1 className="text-xl">Your recent views</h1>
      <LineChart
        xAxis={[
          {
            scaleType: "point",
            data: ["Jan", "Feb", "March", "April", "May", "June"],
          },
        ]}
        series={[
          {
            data: [10, 20, 40, 80, 65, 25],
          },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
}
