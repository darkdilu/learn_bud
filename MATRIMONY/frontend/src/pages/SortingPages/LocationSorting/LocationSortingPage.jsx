import React, { useState } from 'react'
import YourMatch from '../../../components/YourMatchs/YourMatch'
import { profileList } from '../../../components/data'
import SortingNavbar from '../../../components/sortingNavbar/SortingNavbar'
import LikesAndConnect from '../../../components/LikesAndConnect/LikesAndConnect'
import BuddyHomeSideBar from '../../../components/BuddyHomeSideBar/BuddyHomeSideBar'
import BuddyHomeFooter from '../../../components/BuddyHomeFooter/BuddyHomeFooter'

const LocationSortingPage = () => {
  const [headingName,setHeadingName] = useState('Location')
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

export default LocationSortingPage