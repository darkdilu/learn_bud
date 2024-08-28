import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="lg:px-16 bg-slate-200 flex flex-col lg:flex-row lg:justify-between gap-3 lg:items-center p-5 border-t border-primary shadow-sm">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">Community App</h1>
        <p className="text-xl">Call us</p>
        <p className="text-base">123 456 7890</p>
        <p className="text-xs">145-Mathethara Lane, South Kureepuzha</p>
        <p className="text-xs">Kollam, Kerala, India, 691003</p>
        <p className="text-xs">support@jobportal.com</p>
      </div>
      <div className="text-xs">
        © 2024 JobPortal by shafi. All Right Reserved.
      </div>
      <div className="flex gap-3">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedinIn />
      </div>
    </footer>
  );
}
