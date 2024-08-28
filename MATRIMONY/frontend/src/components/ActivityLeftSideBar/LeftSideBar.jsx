import React from 'react'
import './LeftSideBar.css'
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { IoChatbubbleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const LeftSideBar = ({ showProfileOptions }) => {
  const navigate = useNavigate()
const RedirectedHomePage = ()=>{
    navigate('/buddysHomePage')
}
  return (
    <div className='LeftSideBarContainer'>
      <div className='icons'>
        <span className="Icon"><CiSearch /></span>
        <span className="Icon"><FaHeart /></span>
        <span className="HomeIcon"><AiFillHome onClick={RedirectedHomePage}/></span>
        <span className="Icon"><FaRegStar /></span>
        <span className="Icon"><IoChatbubbleSharp /></span>
      </div>
    </div>
  )
}

export default LeftSideBar
