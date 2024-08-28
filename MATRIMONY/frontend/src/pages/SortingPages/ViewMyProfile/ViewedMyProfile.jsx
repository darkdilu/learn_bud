import React, { useState } from 'react'
import LikesAndConnect from '../../../components/LikesAndConnect/LikesAndConnect'
import SortingNavbar from '../../../components/sortingNavbar/SortingNavbar'
import YourMatch from '../../../components/YourMatchs/YourMatch'
import BuddyHomeFooter from '../../../components/BuddyHomeFooter/BuddyHomeFooter'
import BuddyHomeSideBar from '../../../components/BuddyHomeSideBar/BuddyHomeSideBar'
import { profileList } from '../../../components/data'

const ViewedMyProfile = () => {
    const [headingName,setHeadingName] = useState('Viewed My Profile')
    const [profileData, setProfileData] = useState(profileList)
  return (
    <div className='DummyPageContainer'>
    <div className="titleAndNotificationBar">
    <SortingNavbar headingName={headingName}/> 
    <LikesAndConnect/>
    </div>

    <div className='DesktopViewContainer'>
        <div className='sideBarContainer'>
            <BuddyHomeSideBar />
        </div>
        <div className="buddyHomecontent">
        <YourMatch profileData={profileData}/>
        </div>

    </div>
    <div className='DummyPageContainerFooter'>
        <BuddyHomeFooter />
    </div>
</div>
  )
}

export default ViewedMyProfile