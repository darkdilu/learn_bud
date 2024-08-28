
import Header from '../../components/NotifyHeader/Header';
import UserCard from '../../components/NotifyUserCard/UserCard';
import './Shortlist.css';
import { TiTick } from 'react-icons/ti';
import { RxCross2 } from 'react-icons/rx';
import { useContext, useEffect, useState } from 'react';
import LeftSideBar from '../../components/ActivityLeftSideBar/LeftSideBar';
import BuddyHomeProfile from '../../components/BuddysHomeProfile/BuddyHomeProfile';
import useAxiosPrivate from '../../CustomApi/UseAxiosPrivate';
import IdContext from '../../context/IdContext';

const Shortlist = () => {
 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const toggleProfileOptions = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setShowProfileOptions(!showProfileOptions);
  };

  const axiosPrivate = useAxiosPrivate();
  const { matrimonyProfileId } = useContext(IdContext);
  const [shortListedProfiles, setshortListedProfiles] = useState([]);

  useEffect(() => {
    const fetchShortlistedRequests = async () => {
      try {
        const response = await axiosPrivate.get(`/api/matrimony/profile/shortListedList/${matrimonyProfileId}`);
        const shortListedList = response.data;

        const profilesPromises = shortListedList.map(shortList =>
          axiosPrivate.get(`/api/matrimony/profile/getProfile/${shortList.toUID}`)
        );

        const profilesResponses = await Promise.all(profilesPromises);

        const profiles = profilesResponses.map(res => res.data);
        setshortListedProfiles(profiles);
      } catch (error) {
        console.error("Error fetching sent requests or profiles:", error);
      }
    };
    fetchShortlistedRequests();
  }, [axiosPrivate, matrimonyProfileId]);

  console.log(shortListedProfiles);
  

  const groupedUsers = shortListedProfiles.reduce((acc, user) => {
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
            title="Shortlist" 
            profilePic="assets/Images/propic1.jpg" 
            onProfilePicClick={toggleProfileOptions} 
          />
        </div>
      <div className="user-list">
      {Object.keys(groupedUsers).sort().map(letter => (
           <div key={letter}>
           <h2 className="letter-heading">{letter}</h2>
           {groupedUsers[letter].map(user => {
             console.log('User:', user.id);  // Console log the user here
             return (
               <UserCard
                 key={user.id}  // Ensure you use _id if that's the correct key
                 user={user}
                 actions={[
                   { className: 'accept-icon', icon: <TiTick />},
                   { className: 'remove-icon', icon: <RxCross2 /> },
                 ]}
               />
             );
           })}
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
  
export default Shortlist;
