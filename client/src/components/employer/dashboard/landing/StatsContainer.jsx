import React from "react";
import InfoCards from "./InfoCards";
import { BsSuitcaseLg } from "react-icons/bs";
import { IoList } from "react-icons/io5";
import { BiMessageDetail } from "react-icons/bi";
import { TbBadge } from "react-icons/tb";
import { useSelector } from "react-redux";

export default function StatsContainer() {
  const { EInfo } = useSelector((state) => state.allUsers);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      <InfoCards
        icon={<BsSuitcaseLg />}
        no={EInfo?.totalJobs?.length}
        content={"Posted Jobs"}
        bg={"bg-blue-100"}
        text={"text-blue-700"}
      />
      <InfoCards
        icon={<IoList />}
        no={EInfo?.allApplicants?.length}
        content={"Applications"}
        bg={"bg-red-100"}
        text={"text-red-700"}
      />
      <InfoCards
        icon={<BiMessageDetail />}
        no={EInfo?.messageNotification?.length}
        content={"Messages"}
        bg={"bg-yellow-100"}
        text={"text-yellow-700"}
      />
      <InfoCards
        icon={<TbBadge />}
        no={EInfo?.shortlisted?.length}
        content={"Shorlist"}
        bg={"bg-green-100"}
        text={"text-green-700"}
      />
    </div>
  );
}
