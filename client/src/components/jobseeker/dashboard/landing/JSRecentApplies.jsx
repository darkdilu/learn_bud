import React, { useEffect, useState } from "react";
import { useGetAllAppliedJobsQuery } from "../../../../slices/jobSeekerApiSlice";
import Loading from "../../../Loading";
import JSDashJobCard from "../JSDashJobCard";

export default function JSRecentApplies() {
  const { data, isLoading } = useGetAllAppliedJobsQuery();
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    if (data) {
      const toReverse = [...data.appliedJobs];
      const reversed = toReverse.slice().reverse();
      setDataArray(reversed);
    }
  }, [data, isLoading]);
  return isLoading ? (
    <Loading />
  ) : (
    <div className="bg-background2 p-3 rounded-lg my-4">
      <h1 className="text-xl my-3">Recent Applications</h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {dataArray.length > 0 &&
          dataArray
            .slice(0, 6)
            .map((item) => (
              <JSDashJobCard
                key={item._id}
                owner={item.owner}
                jobTitle={item.jobTitle}
                salary={item.salary}
                skills={item.skills}
                location={item.jobLocation}
                jobId={item._id}
                shortlist={item.shortListed}
                reject={item.rejected}
              />
            ))}
      </div>
    </div>
  );
}
