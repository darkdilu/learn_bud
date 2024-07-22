import React, { useEffect } from "react";
import ChooseCard from "../../components/dataCollection/ChooseCard";
import { FaHeart } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Choose5() {
  const { userInfo } = useSelector((state) => state.allUsers);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo?.username) {
      navigate("/");
    }
  }, [userInfo]);
  return (
    <div className="w-full items-center bg-background1 rounded-lg p-3">
      <div className="my-5 flex flex-col gap-5 items-center">
        <h1 className="text-xl lg:text-3xl ">What are you Looking for?</h1>
        <ChooseCard
          title={"Relationship"}
          icon={<FaHeart fill="red" />}
          background={"bg-red-300"}
          text={"text-red-600"}
          hover={"bg-red-400"}
        />
        <ChooseCard
          to={"/portal-type"}
          title={"Job"}
          icon={<MdOutlineWork fill="#2563eb" />}
          background={"bg-blue-300"}
          text={"text-blue-600"}
          hover={"bg-blue-400"}
        />
        <ChooseCard
          title={"Shopping"}
          icon={<FaCartShopping fill="#16a34a" />}
          background={"bg-green-300"}
          text={"text-green-600"}
          hover={"bg-green-400"}
        />
        <ChooseCard
          to={"/study-abroad"}
          title={"Study Abroad"}
          icon={<PiAirplaneTiltFill fill="#7c3aed" />}
          background={"bg-violet-300"}
          text={"text-violet-600"}
          hover={"bg-violet-400"}
        />
      </div>
    </div>
  );
}
