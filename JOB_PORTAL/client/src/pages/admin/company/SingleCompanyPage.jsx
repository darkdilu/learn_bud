import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { companyData } from "../../../utils/data";
import CompanyDetails from "../../../components/admin/company/CompanyDetails";
import OpenClosedJobs from "../../../components/admin/company/OpenClosedJobs";
import { JobDetailsData } from "../../../utils/data2";

export default function SingleCompanyPage() {
  const { id } = useParams();
  const [company, setCompany] = useState();

  useEffect(() => {
    const newId = parseInt(id);
    setCompany(companyData.find((item) => item.id === newId));
  }, [id]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="my-5 lg:text-2xl text-lg font-semibold">
          {company?.company}
        </h1>
        <div className="flex gap-1">
          <Link
            to={"/admin/companies"}
            className="bg-ascent text-primary lg:text-lg text-sm p-2 rounded-md hover:bg-hover"
          >
            BACK
          </Link>
          <button className="bg-ascent text-primary lg:text-lg text-sm p-2 rounded-md hover:bg-hover">
            DISABLE
          </button>
          <button className="bg-red-500 text-primary lg:text-lg text-sm p-2 rounded-md hover:bg-red-400">
            DELETE
          </button>
        </div>
      </div>
      <CompanyDetails company={company} />
      <OpenClosedJobs name={"Open Jobs"} data={JobDetailsData} />
      <OpenClosedJobs name={"Closed Jobs"} data={JobDetailsData} />
    </div>
  );
}
