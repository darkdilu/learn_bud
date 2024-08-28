import React from "react";
import ExtraDetailElt from "../../candidates/candidateSingle/ExtraDetailElt";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { LiaHourglassStartSolid } from "react-icons/lia";
import { PiGraduationCapLight, PiMoneyLight } from "react-icons/pi";
import { GrUserExpert } from "react-icons/gr";
import { BiMaleFemale } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";

export default function SinglePageExtra({ data }) {
  return (
    <div className="flex flex-col gap-8 my-5">
      <ExtraDetailElt
        title={"Date Posted"}
        icon={<CiCalendar />}
        content={data.createdAt.toString().slice(0, 10)}
      />
      <ExtraDetailElt
        title={"Expiry Date"}
        icon={<LiaHourglassStartSolid />}
        content={data.deadline.toString().slice(0, 10)}
      />
      <ExtraDetailElt
        title={"Job Location"}
        icon={<CiLocationOn />}
        content={data.jobLocation}
      />
      <ExtraDetailElt
        title={"Job Type"}
        icon={<MdWorkOutline />}
        content={data.jobType}
      />
      <ExtraDetailElt
        title={"Qualification"}
        icon={<PiGraduationCapLight />}
        content={data.qualification}
      />
      <ExtraDetailElt
        title={"Experience"}
        icon={<GrUserExpert />}
        content={data.experience}
      />
      <ExtraDetailElt
        title={"Salary"}
        icon={<PiMoneyLight />}
        content={data.salary}
      />
      <ExtraDetailElt
        title={"Gender"}
        icon={<BiMaleFemale />}
        content={data.gender}
      />
    </div>
  );
}
