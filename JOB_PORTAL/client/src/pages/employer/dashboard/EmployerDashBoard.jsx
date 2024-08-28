import React from "react";
import StatsContainer from "../../../components/employer/dashboard/landing/StatsContainer";
import GraphContainer from "../../../components/employer/dashboard/landing/GraphContainer";
import NotificationContainer from "../../../components/employer/dashboard/landing/NotificationContainer";
import RecentApplications from "../../../components/employer/dashboard/landing/RecentApplications";

export default function EmployerDashBoard() {
  return (
    <div>
      <StatsContainer />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 mt-5">
        <GraphContainer />
        <NotificationContainer />
      </div>
      <RecentApplications />
    </div>
  );
}
