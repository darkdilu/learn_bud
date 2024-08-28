import {
  IoStatsChart,
  IoHomeOutline,
  IoSettingsSharp,
  IoSendOutline,
  IoList,
  IoLockClosedOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { PiBuildingOffice } from "react-icons/pi";
import { MdWork, MdDeleteOutline } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { TbReport, TbBadge } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa6";
import { BsSuitcaseLg } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";

export const homeLinks1 = [
  { path: "/jobseeker/jobs", text: "Find Jobs" },
  { path: "/jobseeker/companies", text: "Companies" },
];

export const employerHomeList = [
  {
    path: "/candidates",
    text: "Candidates",
  },
  {
    path: "/companies",
    text: "Companies",
  },
];

export const employerDashboardLinks = [
  {
    path: "/employer/dashboard",
    text: "Dashboard",
    icon: <IoHomeOutline />,
  },
  {
    path: "/employer/dashboard/company-profile",
    text: "Company Profile",
    icon: <FaRegUser />,
  },
  {
    path: "/employer/dashboard/post-job",
    text: "Post A Job",
    icon: <IoSendOutline />,
  },
  {
    path: "/employer/dashboard/manage-jobs",
    text: "Manage Jobs",
    icon: <BsSuitcaseLg />,
  },
  {
    path: "/employer/dashboard/applicants",
    text: "All Applicants",
    icon: <IoList />,
  },
  {
    path: "/employer/dashboard/shortlisted",
    text: "Shortlisted Resumes",
    icon: <TbBadge />,
  },
  {
    path: "/employer/dashboard/messages",
    text: "Messages",
    icon: <BiMessageDetail />,
  },
  {
    path: "/employer/dashboard/change-password",
    text: "Change Password",
    icon: <IoLockClosedOutline />,
  },
  {
    path: "/employer/dashboard/logout",
    text: "Logout",
    icon: <IoLogOutOutline />,
  },
  {
    path: "/employer/dashboard/delete-account",
    text: "Delete Account",
    icon: <MdDeleteOutline />,
  },
];

export const jobSeekerDashboardLinks = [
  {
    path: "/jobseeker/dashboard",
    text: "Dashboard",
    icon: <IoHomeOutline />,
  },
  {
    path: "/jobseeker/dashboard/profile",
    text: "My Profile",
    icon: <FaRegUser />,
  },

  {
    path: "/jobseeker/dashboard/applied-jobs",
    text: "Applied Jobs",
    icon: <BsSuitcaseLg />,
  },

  {
    path: "/jobseeker/dashboard/shortlisted",
    text: "Shortlisted Jobs",
    icon: <TbBadge />,
  },
  {
    path: "/jobseeker/dashboard/messages",
    text: "Messages",
    icon: <BiMessageDetail />,
  },
  {
    path: "/jobseeker/dashboard/change-password",
    text: "Change Password",
    icon: <IoLockClosedOutline />,
  },
  {
    path: "/jobseeker/dashboard/logout",
    text: "Logout",
    icon: <IoLogOutOutline />,
  },
  {
    path: "/jobseeker/dashboard/delete-account",
    text: "Delete Account",
    icon: <MdDeleteOutline />,
  },
];

export const adminLinks = [
  {
    path: "/admin/statistics",
    text: "Statistics",
    url: "statistics",
    icon: <IoStatsChart />,
  },
  {
    path: "/admin/companies",
    text: "Companies",
    url: "companies",
    icon: <PiBuildingOffice />,
  },
  {
    path: "/admin/jobs",
    text: "Jobs",
    url: "jobs",
    icon: <MdWork />,
  },
  {
    path: "/admin/users",
    text: "Users",
    url: "users",
    icon: <HiUsers />,
  },
  {
    path: "/admin/reports",
    text: "Reports",
    url: "reports",
    icon: <TbReport />,
  },
  {
    path: "/admin/settings",
    text: "Settings",
    url: "settings",
    icon: <IoSettingsSharp />,
  },
];
