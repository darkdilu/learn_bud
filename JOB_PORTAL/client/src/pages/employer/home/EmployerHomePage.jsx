import React from "react";
import EmplandingSection from "../../../components/employer/home/EmplandingSection";
import ThreeStepsSection from "../../../components/employer/home/ThreeStepsSection";
import PostJobSection from "../../../components/employer/home/PostJobSection";
import FeaturedCandidates from "../../../components/employer/home/FeaturedCandidates";
import FeaturedCompanies from "../../../components/employer/home/FeaturedCompanies";

export default function EmployerHomePage() {
  return (
    <div>
      <EmplandingSection />
      <ThreeStepsSection />
      <PostJobSection />
      <FeaturedCandidates />
      <FeaturedCompanies />
    </div>
  );
}
