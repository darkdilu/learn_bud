import React, { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { useSelector } from "react-redux";
export default function GraphContainer() {
  const { EInfo } = useSelector((state) => state.allUsers);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    if (EInfo) {
      const mappingArray = EInfo?.allApplicants?.map((item) =>
        item.createdAt.toString().slice(0, 10)
      );
      const mappingObject = mappingArray?.reduce((acc, date) => {
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      }, {});
      setData1(Object.keys(mappingObject));
      setData2(Object.values(mappingObject));
    }
  }, [EInfo]);
  return (
    <div className="p-5 bg-background2 my-4 rounded-lg">
      <h1 className="text-xl">Your Monthly Application</h1>
      <LineChart
        xAxis={[
          {
            scaleType: "point",
            data: data1,
          },
        ]}
        series={[
          {
            data: data2,
          },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
}
