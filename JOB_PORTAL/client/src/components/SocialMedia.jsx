import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { TbLetterP } from "react-icons/tb";

export default function SocialMedia({ candidate, fb, ins, tw, ln, data }) {
  return (
    <div className="flex flex-col gap-5 my-5 w-full">
      <h1 className="text-xl">Social Media</h1>
      <div className="flex gap-6 items-center justify-start">
        <a href={fb || "#"} className="text-ascent text-lg">
          <FaFacebookF />
        </a>
        <a href={ins || "#"} className="text-ascent text-lg">
          <FaInstagram />
        </a>
        <a href={tw || "#"} className="text-ascent text-lg">
          <FaTwitter />
        </a>
        <a href={ln || "#"} className="text-ascent text-lg">
          <FaLinkedinIn />
        </a>
      </div>
      {candidate && (
        <>
          <h1 className="text-xl mt-5">Portfolio</h1>
          <div className="flex gap-6 items-center justify-start">
            <div className="text-ascent text-lg">
              <TbLetterP />
            </div>
            <p className="text-gray-500 text-md">{data.portfolio}</p>
          </div>
        </>
      )}
    </div>
  );
}
