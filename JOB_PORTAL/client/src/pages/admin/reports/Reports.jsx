import React, { useState } from "react";
import ReportOption from "../../../components/admin/reports/ReportOption";
import JobReport from "../../../components/admin/reports/JobReport";
import CompanyReport from "../../../components/admin/reports/CompanyReport";
import UserReports from "../../../components/admin/reports/UserReports";
import RevenueReports from "../../../components/admin/reports/RevenueReports";

export default function Reports() {
  const [report, setReport] = useState("");
  return (
    <div>
      <h1 className="my-5 text-2xl font-semibold">Generate Reports</h1>
      <ReportOption name={"User Reports"} setReport={setReport} />
      <ReportOption name={"Company Reports"} setReport={setReport} />
      <ReportOption name={"Job Reports"} setReport={setReport} />
      <ReportOption name={"Revenue Reports"} setReport={setReport} />
      {report === "User Reports" && <UserReports />}
      {report === "Company Reports" && <CompanyReport />}
      {report === "Job Reports" && <JobReport />}
      {report === "Revenue Reports" && <RevenueReports />}
    </div>
  );
}
