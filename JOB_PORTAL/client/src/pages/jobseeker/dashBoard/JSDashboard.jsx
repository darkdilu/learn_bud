import React from "react";
import JSStatsContainer from "../../../components/jobseeker/dashboard/landing/JSStatsContainer";
import JSGraphContainer from "../../../components/jobseeker/dashboard/landing/JSGraphContainer";
import JSNotificationContainer from "../../../components/jobseeker/dashboard/landing/JSNotificationContainer";
import JSRecentApplies from "../../../components/jobseeker/dashboard/landing/JSRecentApplies";

export default function JSDashboard() {
  return (
    <div>
      <JSStatsContainer />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 mt-5">
        <JSGraphContainer />
        <JSNotificationContainer />
      </div>
      <JSRecentApplies />
    </div>
  );
}
