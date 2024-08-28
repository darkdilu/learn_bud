import React from 'react'
import './BuddyHomeFooter.css'
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { IoChatbubbleSharp } from "react-icons/io5";

const BuddyHomeFooter = ({ showProfileOptions }) => {
  return (
    <div className='BuddyHomeFooterContainer'>
      <div className='icons'>
        <span className="Icon"><CiSearch /></span>
        <span className="Icon"><FaHeart /></span>
        <span className="HomeIcon"><AiFillHome /></span>
        <span className="Icon"><FaRegStar /></span>
        <span className="Icon"><IoChatbubbleSharp /></span>
      </div>
    </div>
  )
}

export default BuddyHomeFooter
