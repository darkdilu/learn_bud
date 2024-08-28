
import Header from '../../components/NotifyHeader/Header';
import UserCard from '../../components/NotifyUserCard/UserCard';
import './ShortlistedBy.css';
import { TiTick } from 'react-icons/ti';
import { RxCross2 } from 'react-icons/rx';
import { useContext, useEffect, useState } from 'react';
import LeftSideBar from '../../components/ActivityLeftSideBar/LeftSideBar';
import BuddyHomeProfile from '../../components/BuddysHomeProfile/BuddyHomeProfile';
import useAxiosPrivate from '../../CustomApi/UseAxiosPrivate';
import IdContext from '../../context/IdContext';

const ShortlistedBy = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const toggleProfileOptions = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setShowProfileOptions(!showProfileOptions);
  };

  const axiosPrivate = useAxiosPrivate();
  const { matrimonyProfileId } = useContext(IdContext);
  const [shortListedByProfiles, setShortListedByProfiles] = useState([]);

  useEffect(() => {
    const fetchShortedListedByRequests = async () => {
      try {
        const response = await axiosPrivate.get(`/api/matrimony/profile/shortListedBy/${matrimonyProfileId}`);
        const requestList = response.data;

        const profilesPromises = requestList.map(request =>
          axiosPrivate.get(`/api/matrimony/profile/getProfile/${request.fromUID}`)
        );

        const profilesResponses = await Promise.all(profilesPromises);

        const profiles = profilesResponses.map(res => res.data);
        setShortListedByProfiles(profiles);
      } catch (error) {
        console.error("Error fetching sent requests or profiles:", error);
      }
    };
    fetchShortedListedByRequests();
  }, [axiosPrivate, matrimonyProfileId]);

  console.log(shortListedByProfiles);
  


  const groupedUsers = shortListedByProfiles.reduce((acc, user) => {
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
            title="Shorlisted By" 
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
              { className: 'accept-icon', icon: <TiTick />},
              { className: 'remove-icon', icon:<RxCross2 />},
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
  
export default ShortlistedBy;
