import { RiGraduationCapFill } from "react-icons/ri";
import { IoBook, IoBagHandleOutline, IoWalletOutline } from "react-icons/io5";
import { FaIdCardClip, FaListCheck } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
import { PiNotepad } from "react-icons/pi";
import { BsBuildings } from "react-icons/bs";
import { FiAward } from "react-icons/fi";
import { MdOutlineTrackChanges } from "react-icons/md";

export const secondSectionCardDetails = [
  {
    id: 1,
    title: "University Information",
    logo: <RiGraduationCapFill />,
    desc: "University information is a crucial component of your study abroad",
  },
  {
    id: 2,
    title: "Student Visa",
    logo: <FaIdCardClip />,
    desc: "A student visa is a legal authorization that allows international..",
  },
  {
    id: 3,
    title: "Our Coaching",
    logo: <IoBook />,
    desc: "Our Coaching offers life coaching that helps clients navigate..",
  },
];

export const thirdSectionCardDetails = [
  {
    id: 1,
    title: "Career Counselling",
    logo: <IoBagHandleOutline />,
    desc: "Assessment of eligibility for different student visa for each country",
  },
  {
    id: 2,
    title: "Visa Guidance",
    logo: <GrCertificate />,
    desc: "Offering information about visa requirements, procedures....",
  },
  {
    id: 3,
    title: "Financial Planning",
    logo: <IoWalletOutline />,
    desc: "Advising on demonstrating sufficient financial information",
  },
  {
    id: 4,
    title: "Application Assistance",
    logo: <PiNotepad />,
    desc: "Assisting with compiling required documents",
  },
  {
    id: 5,
    title: "Document Preparation",
    logo: <FaListCheck />,
    desc: "Assisting in gathering such as organizing necessary documents",
  },
  {
    id: 6,
    title: "Health Insurance Guidance",
    logo: <BsBuildings />,
    desc: "Offering information about housing orientation and other insurance related matters",
  },
  {
    id: 7,
    title: "Language Proficiency Tests",
    logo: <FiAward />,
    desc: "Providing guidance on language proficiency tests required for each country",
  },
  {
    id: 8,
    title: "Visa Submission and Tracking",
    logo: <MdOutlineTrackChanges />,
    desc: "Assisting in submitting the visa application to the respective embassy",
  },
];
