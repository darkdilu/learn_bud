import Header from '../../components/NotifyHeader/Header';
import UserCard from '../../components/NotifyUserCard/UserCard';
import './ReceivedPage.css';
import { TiTick } from 'react-icons/ti';
import { RxCross2 } from 'react-icons/rx';
import { useContext, useEffect, useState } from 'react';
import LeftSideBar from '../../components/ActivityLeftSideBar/LeftSideBar';
import BuddyHomeProfile from '../../components/BuddysHomeProfile/BuddyHomeProfile';
import useAxiosPrivate from '../../CustomApi/UseAxiosPrivate';
import IdContext from '../../context/IdContext';

const ReceivedPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const toggleProfileOptions = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setShowProfileOptions(!showProfileOptions);
  };

  const axiosPrivate = useAxiosPrivate();
  const { matrimonyProfileId } = useContext(IdContext);
  const [receivedProfiles, setReceivedProfiles] = useState([]);

  useEffect(() => {
    const fetchReceivedRequests = async () => {
      try {
        const response = await axiosPrivate.get(`/api/matrimony/profile/listOfRequests/${matrimonyProfileId}`);
        const requestList = response.data;

        const profilesPromises = requestList.map(request =>
          axiosPrivate.get(`/api/matrimony/profile/getProfile/${request.fromUID}`)
        );

        const profilesResponses = await Promise.all(profilesPromises);

        const profiles = profilesResponses.map(res => res.data);
        setReceivedProfiles(profiles);
      } catch (error) {
        console.error("Error fetching sent requests or profiles:", error);
      }
    };
    fetchReceivedRequests();
  }, [axiosPrivate, matrimonyProfileId]);

  // Sort users alphabetically and group by the first letter
  const groupedUsers = receivedProfiles.reduce((acc, user) => {
    const firstLetter = user.firstName[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(user);
    return acc;
  }, {});

  const acceptTheRequest = async (fromUID) => {
    console.log(`Attempting to accept request from user with ID: ${fromUID}`);  
    try {
      const response = await axiosPrivate.post(`/api/matrimony/profile/acceptRequest/${matrimonyProfileId}`, {
        requestFromId: fromUID
      });
      console.log('API response:', response);
      if (response.status === 200) {
        console.log('Request accepted successfully');
        
        setReceivedProfiles(prevProfiles => prevProfiles.filter(profile => profile._id !== fromUID));
      } else {
        console.error('Failed to accept the request. Status:', response.status);
      }
    } catch (error) {
      console.error("Error accepting the request:", error);
    }
  };

  const rejectTheRequest = async (fromUID) => {
    console.log(`Attempting to accept request from user with ID: ${fromUID}`);  
    try {
      const response = await axiosPrivate.post(`/api/matrimony/profile/rejectTheRequest/${matrimonyProfileId}`, {
        requestFromId: fromUID
      });
      console.log('API response:', response);
      if (response.status === 200) {
        console.log('Request accepted successfully');
        
        setReceivedProfiles(prevProfiles => prevProfiles.filter(profile => profile._id !== fromUID));
      } else {
        console.error('Failed to accept the request. Status:', response.status);
      }
    } catch (error) {
      console.error("Error accepting the request:", error);
    }
  };

  

  return (
    <div className="activitycontainer">
      <div className={`leftsidebar ${isSidebarOpen ? 'blur' : ''}`}>
        <LeftSideBar />
      </div>

      <div className={`main ${isSidebarOpen ? 'blur' : ''}`}>
        <div className="activity-header">
          <Header
            title="Received"
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
          key={user._id}  // Ensure you use _id if that's the correct key
          user={user}
          actions={[
            { 
              className: 'accept-icon', 
              icon: <TiTick />, 
              onClick: () => acceptTheRequest(user._id)// Just log a message on click
            },
            { 
              className: 'remove-icon', 
              icon: <RxCross2 /> ,
              onClick: () => rejectTheRequest(user._id)
            },
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

export default ReceivedPage;
