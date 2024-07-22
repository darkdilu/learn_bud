import React from "react";
import SAHeader from "../../components/studyAbroad/SAHeader";
import SAFooter from "../../components/studyAbroad/SAFooter";
import { Outlet } from "react-router-dom";

export default function SAHomeLayout() {
  return (
    <div>
      <SAHeader />
      <div className="p-6 lg:px-10 min-h-96">
        <Outlet />
      </div>
      <SAFooter />
    </div>
  );
}
