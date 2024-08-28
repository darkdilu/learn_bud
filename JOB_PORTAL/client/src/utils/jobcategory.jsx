import { BsCoin } from "react-icons/bs";
import { GrAnnounce } from "react-icons/gr";
import { BsVectorPen } from "react-icons/bs";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { AiOutlineFileSearch } from "react-icons/ai";
import { IoRocketOutline } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa6";
import { MdOutlineMedicalServices } from "react-icons/md";

export const jobCategory = [
  {
    id: 1,
    category: "Finance & Accounting",
    open: 48,
    closed: 26,
    icon: <BsCoin />,
  },
  {
    id: 2,
    category: "Sales, Marketing & Advertising",
    open: 84,
    closed: 97,
    icon: <GrAnnounce />,
  },
  {
    id: 3,
    category: "Construction & Skilled Trades",
    open: 55,
    closed: 32,
    icon: <BsVectorPen />,
  },
  {
    id: 4,
    category: "Software Development & IT",
    open: 46,
    closed: 44,
    icon: <TbDeviceDesktopCode />,
  },
  {
    id: 5,
    category: "Human Resources & Recruitment",
    open: 32,
    closed: 89,
    icon: <AiOutlineFileSearch />,
  },
  {
    id: 6,
    category: "Engineering & Technical",
    open: 5,
    closed: 6,
    icon: <IoRocketOutline />,
  },
  {
    id: 7,
    category: "Customer Service & Support",
    open: 60,
    closed: 35,
    icon: <FaRegHandshake />,
  },
  {
    id: 8,
    category: "Healthcare & Medical",
    open: 88,
    closed: 3,
    icon: <MdOutlineMedicalServices />,
  },
];
