import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function GraphComponent({ data }) {
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <AreaChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray={"3 3"} />
        <XAxis dataKey={"date"} />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Area type="monotone" dataKey="total" stroke="#2cb1bc" fill="#112D4E" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default GraphComponent;
