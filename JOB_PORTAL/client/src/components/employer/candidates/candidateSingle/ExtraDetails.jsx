import React from "react";
import {
  PiNotepad,
  PiHourglassSimpleLow,
  PiCoins,
  PiMoney,
  PiUser,
  PiGraduationCap,
} from "react-icons/pi";
import { HiOutlineLanguage } from "react-icons/hi2";
import ExtraDetailElt from "./ExtraDetailElt";

export default function ExtraDetails({ data }) {
  return (
    <div className="flex flex-col gap-8 my-5">
      <ExtraDetailElt
        title={"Experience"}
        icon={<PiNotepad />}
        content={data.totalExperience}
      />
      <ExtraDetailElt
        title={"Age"}
        icon={<PiHourglassSimpleLow />}
        content={data.owner.age}
      />
      <ExtraDetailElt
        title={"Current Salary"}
        icon={<PiCoins />}
        content={`${data.currentSalary} CTC`}
      />
      <ExtraDetailElt
        title={"Expected Salary"}
        icon={<PiMoney />}
        content={`${data.expectedSalary} CTC`}
      />
      <ExtraDetailElt
        title={"Gender"}
        icon={<PiUser />}
        content={data.owner.gender}
      />
      <ExtraDetailElt
        title={"Languages"}
        icon={<HiOutlineLanguage />}
        content={data.languages.toString()}
      />
      <ExtraDetailElt
        title={"Qualification"}
        icon={<PiGraduationCap />}
        content={data.qualification}
      />
    </div>
  );
}
