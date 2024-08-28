import React, { useEffect, useState } from "react";
import CandidateCard from "../CandidateCard";
import Pagination from "../../../Pagination";
import FormSelect from "../../../FormSelect";
import { useGetAllApplicantsQuery } from "../../../../slices/employerApiSlice";
import Loading from "../../../Loading";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

export default function ApplicantList() {
  const { data, isLoading, refetch } = useGetAllApplicantsQuery();
  const [sort, setSort] = useState("Newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [dataArray, setDataArray] = useState([]);
  const limit = 10;

  useEffect(() => {
    if (data) {
      const newArr = [...data.allApplicants];
      if (sort === "Newest") {
        const reversed = newArr.slice().reverse();
        setDataArray(reversed);
      }
      if (sort === "Oldest") {
        setDataArray(newArr);
      }
      const numOfPages = Math.ceil(newArr.length / limit);
      setTotalPage(numOfPages);
    }
  }, [isLoading, sort, refetch, data]);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <div className="flex justify-end">
        <div className="xl:w-1/6 lg:w-1/4 w-1/2 ">
          <FormSelect
            title={"Sort"}
            list={["Newest", "Oldest"]}
            value={sort}
            onchange={(e) => setSort(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2  gap-4 my-4">
        {dataArray.length > 0 ? (
          dataArray
            .slice(currentPage * limit - limit, currentPage * limit)
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
            ))
        ) : (
          <h1 className="text-xl">No Recent Applicants</h1>
        )}
      </div>
      {totalPage > 1 && (
        <>
          <div className="flex items-center gap-4">
            <button
              className="text-3xl text-ascent rounded-full cursor-pointer hover:bg-hover hover:text-secondary"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FiArrowLeftCircle />
            </button>
            <h1>
              Page {currentPage} of {totalPage}
            </h1>
            <button
              className="text-3xl text-ascent rounded-full cursor-pointer hover:bg-hover hover:text-secondary"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPage}
            >
              <FiArrowRightCircle />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
