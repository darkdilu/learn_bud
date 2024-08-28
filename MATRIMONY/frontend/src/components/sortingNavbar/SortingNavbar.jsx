import React from 'react'
import './sortingNavbar.css'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
const SortingNavbar = ({headingName}) => {
    console.log(headingName);
    return (
        <div className='SortingNavbarContainer'>
            <div className="sortingNavbarSubContainer">
            <span className='arrowIcon'><MdKeyboardArrowLeft /></span>
            <h4 className='heading'>{headingName}</h4>
            <span className='settingsIcon'><VscSettings /></span>
            </div>
        </div>
    )
}

export default SortingNavbar