import React, { useContext, useEffect, useState } from 'react'
import BuddyTitleAndNotificationBar from '../../components/BuddyTitleBar/BuddyTitleAndNotificationBar'
import BuddysStory from '../../components/BuddysStory/BuddysStory'
import BuddysNavbar from '../../components/BuddysNavbar/BuddysNavbar'
import { profiles } from '../../components/data'
import ProfileCard from '../../components/SortedProfileCard/SortedProfileCard'
import BuddyHomeFooter from '../../components/BuddyHomeFooter/BuddyHomeFooter'
import BuddyHomeSideBar from '../../components/BuddyHomeSideBar/BuddyHomeSideBar'
import useAxiosPrivate from '../../CustomApi/UseAxiosPrivate'
import IdContext from '../../context/IdContext'

const EducationSort = () => {
  const [navPage,setNavPage] = useState('Designation')
  const [showNotifications, setShowNotifications] = useState(false);

  const [showProfileOptions, setShowProfileOPtions] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleProfileOptions = () => {
    setShowProfileOPtions(!showProfileOptions);
  };

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
      setShowMenu(!showMenu);
  };

  const axiosPrivate = useAxiosPrivate()
  const { matrimonyProfileId, userId } = useContext(IdContext);
  const [designationProfileList,setDesignationProfileList] = useState([])

  useEffect(()=>{
   const designationProfiles = async()=>{
    const reponse = await axiosPrivate.get(`/api/matrimony/profile/designationUsers/${matrimonyProfileId}`)
    console.log(reponse.data);
    setDesignationProfileList(reponse.data)
   }
   designationProfiles()
  },[])
  return (
    <div className='DummyPageContainer'>
        <div className="titleAndNotificationBar">
            <BuddyTitleAndNotificationBar
                showNotifications={showNotifications}
                toggleNotifications={toggleNotifications}
                showProfileOptions={showProfileOptions}
                toggleProfileOptions={toggleProfileOptions}
                showMenu={showMenu}
                toggleMenu={toggleMenu} />
        </div>

        <div className='DesktopViewContainer'>
            <div className='sideBarContainer'>
                <BuddyHomeSideBar />
            </div>
            <div className="buddyHomecontent">
                <div className='HomeNavbarContainer'>
                <BuddysNavbar navPage={navPage} setNavPage={setNavPage} showNotifications={showNotifications}  showProfileOptions={showProfileOptions}/>
                </div>
                <div className={`profileCardContainer2 ${showNotifications || showProfileOptions || showMenu ? 'blur-background' : ''}`}>
                    {designationProfileList.map((profile, index) => (
                        <ProfileCard key={index} profile={profile} />
                    ))}
                </div>
            </div>

        </div>
        <div className='DummyPageContainerFooter'>
            <BuddyHomeFooter showProfileOptions={showProfileOptions} />
        </div>
    </div>
)
}

export default EducationSort