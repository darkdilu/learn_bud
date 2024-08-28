// src/pages/AcceptPage/AcceptPage.js
import { useContext, useEffect, useState } from 'react';
import { IoMdCall } from 'react-icons/io';
import { ImVideoCamera } from 'react-icons/im';

import Header from '../../components/NotifyHeader/Header';
import UserCard from '../../components/NotifyUserCard/UserCard';
import './AcceptPage.css';
import LeftSideBar from '../../components/ActivityLeftSideBar/LeftSideBar';
import BuddyHomeProfile from '../../components/BuddysHomeProfile/BuddyHomeProfile';
import useAxiosPrivate from '../../CustomApi/UseAxiosPrivate';
import IdContext from '../../context/IdContext';

const AcceptPage = () => {
 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const toggleProfileOptions = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setShowProfileOptions(!showProfileOptions);
  };

  const axiosPrivate = useAxiosPrivate();
  const { matrimonyProfileId} = useContext(IdContext);
  const [acceptedProfiles, setAcceptedProfiles] = useState([]);

  useEffect(() => {
    const fetchAcceptedRequests = async () => {
      try {
        const response = await axiosPrivate.get(`/api/matrimony/profile/listOfAccepted/${matrimonyProfileId}`);
        const requestList = response.data;
        console.log("acceptedList",requestList);
        

        const profilesPromises = requestList.map(request => {
          const OtherUserprofileId = matrimonyProfileId === request.fromUID ? request.toUID : request.fromUID;
          return axiosPrivate.get(`/api/matrimony/profile/getProfile/${OtherUserprofileId}`);
        });

        const profilesResponses = await Promise.all(profilesPromises);
        
        const profiles = profilesResponses.map(res => res.data);
        setAcceptedProfiles(profiles);
      } catch (error) {
        console.error("Error fetching sent requests or profiles:", error);
      }
    };
    fetchAcceptedRequests();
  }, [axiosPrivate, matrimonyProfileId]);
  console.log('usersList',acceptedProfiles);

  // Sort users alphabetically and group by the first letter
  const groupedUsers = acceptedProfiles.reduce((acc, user) => {
    const firstLetter = user.firstName[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(user);
    return acc;
  }, {});

  return (
    <div className="activitycontainer">
      <div className={`leftsidebar ${isSidebarOpen ? 'blur' : ''}`}>
        <LeftSideBar />
      </div>
      <div className={`main ${isSidebarOpen ? 'blur' : ''}`}>
        <div className="activity-header">
          <Header 
            title="Accept" 
            profilePic="assets/Images/propic1.jpg" 
            onProfilePicClick={toggleProfileOptions} 
          />
        </div>
        <div className="user-list">
          {Object.keys(groupedUsers).sort().map(letter => (
            <div key={letter}>
              <h2 className="letter-heading">{letter}</h2>
              {groupedUsers[letter].map(user => (
                <UserCard
                  key={user.id}
                  user={user}
                  actions={[
                    { className: 'call-icon', icon: <IoMdCall /> },
                    { className: 'video-icon', icon: <ImVideoCamera /> },
                  ]}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {showProfileOptions && (
        <div className="profileOptionsContainer">
          <BuddyHomeProfile toggleProfileOptions={toggleProfileOptions} />
        </div>
      )}
    </div>
  );
};

export default AcceptPage;
