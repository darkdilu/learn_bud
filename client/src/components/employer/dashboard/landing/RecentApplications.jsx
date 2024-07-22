import React, { useEffect, useState } from "react";
import { candidatesList } from "../../../../utils/candidateListingdata";
import CandidateCard from "../CandidateCard";
import { useGetAllApplicantsQuery } from "../../../../slices/employerApiSlice";
import Loading from "../../../Loading";

export default function RecentApplications() {
  const { data, isLoading, refetch } = useGetAllApplicantsQuery();
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    if (data) {
      const toReverse = [...data.allApplicants];
      const reversed = toReverse.slice().reverse();
      setDataArray(reversed);
    }
  }, [data, isLoading, refetch]);
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
              <CandidateCard
                key={item._id}
                name={item.applicant.fullName}
                role={item.applicant.oneWord || ""}
                skills={item.applicant.skills}
                image={item.applicant.profilePic || "/nouser.png"}
                location={item.applicant.preferredLocation[0] || ""}
                currentCTC={item.applicant.currentSalary}
                position={item.jobApplied.jobTitle}
                date={item.createdAt.toString().slice(0, 10)}
                applicantId={item.applicant._id}
                action={item.action || ""}
                jobId={item.jobApplied._id}
                refetch={refetch}
              />
            ))}
      </div>
    </div>
  );
}
