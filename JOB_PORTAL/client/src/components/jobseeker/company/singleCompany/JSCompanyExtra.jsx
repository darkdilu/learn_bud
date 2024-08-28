import React from "react";
import ExtraDetailElt from "../../../employer/candidates/candidateSingle/ExtraDetailElt";
import { LiaHourglassStartSolid, LiaIndustrySolid } from "react-icons/lia";
import { PiUsersFourLight } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";

export default function JSCompanyExtra({ data }) {
  return (
    <div className="flex flex-col gap-8 my-5">
      <ExtraDetailElt
        title={"Industry"}
        icon={<LiaIndustrySolid />}
        content={data.industry}
      />
      <ExtraDetailElt
        title={"Size"}
        icon={<PiUsersFourLight />}
        content={data.size}
      />
      <ExtraDetailElt
        title={"Founded"}
        icon={<LiaHourglassStartSolid />}
        content={data.founded.toString().slice(0, 10)}
      />
      <ExtraDetailElt
        title={"Website"}
        icon={<CgWebsite />}
        content={data.website}
      />
      <ExtraDetailElt
        title={"Contact"}
        icon={<MdOutlinePhoneEnabled />}
        content={data.companyContact}
      />
      <ExtraDetailElt
        title={"Mail"}
        icon={<IoMailOutline />}
        content={data.companyEmail}
      />
    </div>
  );
}
