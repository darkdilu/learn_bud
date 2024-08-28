import React from "react";
import ExtraDetailElt from "../../../employer/candidates/candidateSingle/ExtraDetailElt";
import { CiCalendar } from "react-icons/ci";
import { LiaHourglassStartSolid, LiaIndustrySolid } from "react-icons/lia";
import { PiUsersFourLight } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";

export default function JSCompanyDetail({ data }) {
  return (
    <div className="flex flex-col gap-8 my-5">
      <h1 className="text-xl">Employer Details</h1>
      <ExtraDetailElt
        title={"Company"}
        icon={<LiaIndustrySolid />}
        content={data.owner.companyName}
      />
      <ExtraDetailElt
        title={"Size"}
        icon={<PiUsersFourLight />}
        content={data.owner.size}
      />
      <ExtraDetailElt
        title={"Founded"}
        icon={<LiaHourglassStartSolid />}
        content={data.owner.founded.toString().slice(0, 10)}
      />
      <ExtraDetailElt
        title={"Website"}
        icon={<CgWebsite />}
        content={data.owner.website}
      />
      <ExtraDetailElt
        title={"Contact"}
        icon={<MdOutlinePhoneEnabled />}
        content={data.owner.companyContact}
      />
      <ExtraDetailElt
        title={"Mail"}
        icon={<IoMailOutline />}
        content={data.owner.companyEmail}
      />
    </div>
  );
}
