import React, { useContext, useEffect, useState } from 'react';
import { IoIosNotificationsOutline, IoIosAdd } from "react-icons/io";
import propic from '../../assets/buddysHome/propic1.jpg';
import './home.css';
import BuddysNavbar from '../../components/BuddysNavbar/BuddysNavbar';
import BuddyTitleAndNotificationBar from '../../components/BuddyTitleBar/BuddyTitleAndNotificationBar';
import BuddysStory from '../../components/BuddysStory/BuddysStory';
import ProfileCard from '../../components/SortedProfileCard/SortedProfileCard';
import { profiles } from '../../components/data.js'; 
import BuddyHomeFooter from '../../components/BuddyHomeFooter/BuddyHomeFooter.jsx';
import BuddyHomeSideBar from '../../components/BuddyHomeSideBar/BuddyHomeSideBar.jsx';
import useAxiosPrivate from '../../CustomApi/UseAxiosPrivate.jsx';
import IdContext from '../../context/IdContext.jsx';

const Home = () => {
  const [navPage, setNavPage] = useState('Near by');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileOptions, setShowProfileOPtions] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleProfileOptions = () => {
    setShowProfileOPtions(!showProfileOptions);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  

  const axiosPrivate = useAxiosPrivate();
  const { setMatrimonyProfileId, setUserId } = useContext(IdContext);
  const [nearByProfileList,setNearByProfileList] = useState([])
  
  useEffect(() => {
    const fetchIds = async () => { 
      try {
        const response = await axiosPrivate.get('/api/auth/getIds');
        const { matrimonyId, userId } = response.data;
        // console.log(MatrimonyProfileId, userId );
        setMatrimonyProfileId(matrimonyId);
        setUserId(userId);
        if(response){
          const getNearByProfileList =await axiosPrivate.get(`/api/matrimony/profile/nearbyUser/${matrimonyId}`)
          setNearByProfileList(getNearByProfileList.data)
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchIds();
  }, []); // Ensure the useEffect runs only once on component mount
  console.log("nearByProfileList",nearByProfileList);
  return (
    <div className='DummyPageContainer'>
      <div className="titleAndNotificationBar">
        <BuddyTitleAndNotificationBar
          showNotifications={showNotifications}
          toggleNotifications={toggleNotifications}
          showProfileOptions={showProfileOptions}
          toggleProfileOptions={toggleProfileOptions}
          showMenu={showMenu}
          toggleMenu={toggleMenu}
        />
      </div>

      <div className='DesktopViewContainer'>
        <div className='sideBarContainer'>
          <BuddyHomeSideBar />
        </div>
        <div className="buddyHomecontent">
          <div className='HomeNavbarContainer'>
            <BuddysNavbar
              navPage={navPage}
              setNavPage={setNavPage}
              showNotifications={showNotifications}
              showProfileOptions={showProfileOptions}
            />
          </div>
          <div className={`profileCardContainer2 ${showNotifications || showProfileOptions || showMenu ? 'blur-background' : ''}`}>
            {nearByProfileList.map((nearByProfileList, index) => (
              <ProfileCard key={index} profile={nearByProfileList} />
            ))}
          </div>
        </div>
      </div>
      <div className='DummyPageContainerFooter'>
        <BuddyHomeFooter showProfileOptions={showProfileOptions} />
      </div>
    </div>
  );
};

export default Home;
