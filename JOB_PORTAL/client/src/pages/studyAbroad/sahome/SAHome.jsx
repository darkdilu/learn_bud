import React from "react";
import SALanding from "../../../components/studyAbroad/SAHome/SALanding";
import SASecondSection from "../../../components/studyAbroad/SAHome/SASecondSection";
import SAThirdSection from "../../../components/studyAbroad/SAHome/SAThirdSection";
import SAFourthSection from "../../../components/studyAbroad/SAHome/SAFourthSection";
import SAFifthSection from "../../../components/studyAbroad/SAHome/SAFifthSection";
import SASixthSection from "../../../components/studyAbroad/SAHome/SASixthSection";

export default function SAHome() {
  return (
    <div className="w-full">
      <SALanding />
      <SASecondSection />
      <SAThirdSection />
      <SAFourthSection />
      <SAFifthSection />
      <SASixthSection />
    </div>
  );
}
