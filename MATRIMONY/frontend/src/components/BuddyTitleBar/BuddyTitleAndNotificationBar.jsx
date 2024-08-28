import React, { useState } from 'react'
import { IoIosNotificationsOutline, IoIosAdd } from "react-icons/io";
import './titleandNotification.css'
import BuddyNotification from '../BuddyNotification/BuddyNotification';
import { FaBars } from "react-icons/fa6";
import profilepic from '../../assets/buddysHome/propic1.jpg'
import BuddyHomeProfile from '../BuddysHomeProfile/BuddyHomeProfile';
import { useNavigate } from 'react-router-dom';

const BuddyTitleAndNotificationBar = ({ showNotifications, toggleNotifications, showProfileOptions, toggleProfileOptions,showMenu,toggleMenu }) => {
const navigate = useNavigate()
const RedirectedHomePage = ()=>{
    navigate('/buddysHomePage')
}
    return (
        <div className='BuddyPairHomeHeaderTitleAndNotificationContainer'>
            <div className="BuddyPairHomeHeaderTitleAndNotification">
                <div className="headingAndBar">
                    <div className={`bar ${showNotifications ||showProfileOptions||showMenu ? 'blur-background' : ''}`} onClick={toggleMenu}>
                        <FaBars />
                    </div>
                    <h1 className={`BuddyPairHomeHeaderTitle ${showNotifications ||showProfileOptions ||showMenu ? 'blur-background' : ''}` } onClick={RedirectedHomePage}>Buddy Pair</h1>
                </div>
                <div className={`profileAndNotification  ${showNotifications ||showProfileOptions ||showMenu ? 'blur-background' : ''}`}>
                    <div className="BuddyPairHomeHeaderNotificationIcon" onClick={toggleNotifications}>
                        <IoIosNotificationsOutline />
                        <span className='BuddyPairHomeHeaderNotificationIconDot'></span>
                    </div>
                    <div className="HeadingprofilePicContainer" onClick={toggleProfileOptions}>
                        <img src={profilepic} alt="" className='HeadingProfilePic' />
                    </div>
                </div>
            </div>
            {showNotifications && <BuddyNotification />} {/* Render the notification component */}
            {showProfileOptions && <BuddyHomeProfile toggleProfileOptions={toggleProfileOptions}/>}
            {showMenu && (
                <div className="menuOverlay">
                    <ul className="menuList">
                    <button className="closeMenu" onClick={toggleMenu}>&times;</button>
                        <li>Dating</li>
                        <li className="selected">Matrimony</li>
                        <li>E-commerce</li>
                        <li>Study Abroad</li>
                        <li>Job Portal</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default BuddyTitleAndNotificationBar