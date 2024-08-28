import  { useContext, useEffect, useState } from 'react';
import Header from '../../components/NotifyHeader/Header';
import UserCard from '../../components/NotifyUserCard/UserCard';
import './RejectPage.css';
import LeftSideBar from '../../components/ActivityLeftSideBar/LeftSideBar';
import BuddyHomeProfile from '../../components/BuddysHomeProfile/BuddyHomeProfile';
import useAxiosPrivate from '../../CustomApi/UseAxiosPrivate';
import IdContext from '../../context/IdContext';

const RejectPage = () => {
 

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const toggleProfileOptions = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setShowProfileOptions(!showProfileOptions);
  };

  const axiosPrivate = useAxiosPrivate();
  const { matrimonyProfileId } = useContext(IdContext);
  const [rejectedProfiles, setRejectedProfiles] = useState([]);
  
  

  useEffect(() => {
    const fetchRejectedRequests = async () => {
      try {
        const response = await axiosPrivate.get(`/api/matrimony/profile/listOfRejection/${matrimonyProfileId}`);
        console.log(response.data);
        
        const rejecetedList = response.data;

        const profilesPromises = rejecetedList.map(reject =>
          axiosPrivate.get(`/api/matrimony/profile/getProfile/${reject.toUID}`)
        );

        const profilesResponses = await Promise.all(profilesPromises);

        const profiles = profilesResponses.map(res => res.data);
        setRejectedProfiles(profiles);
      } catch (error) {
        console.error("Error fetching sent requests or profiles:", error);
      }
    };
    fetchRejectedRequests();
  }, [axiosPrivate, matrimonyProfileId]);
  console.log(rejectedProfiles);
  
  const groupedUsers = rejectedProfiles.reduce((acc, user) => {
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
            title="Reject" 
            profilePic="assets/Images/propic1.jpg" 
            onProfilePicClick={toggleProfileOptions} 
          />
        </div>
        <div className="user-list">
        {Object.keys(groupedUsers).sort().map(letter => (
            <div key={letter}>
              <h2 className="letter-heading">{letter}</h2>
              {groupedUsers[letter].map(user => (
            <UserCard key={user._id} user={user} actions={[]} />
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

export default RejectPage;
