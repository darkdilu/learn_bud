
import Header from '../../components/NotifyHeader/Header';
import UserCard from '../../components/NotifyUserCard/UserCard';
import './ViewedMyProfileActivity.css';
import { TiTick } from 'react-icons/ti';
import { RxCross2 } from 'react-icons/rx';
import { useState } from 'react';
import LeftSideBar from '../../components/ActivityLeftSideBar/LeftSideBar';
import BuddyHomeProfile from '../../components/BuddysHomeProfile/BuddyHomeProfile';

const ViewedMyProfileActivity = () => {
  const users = [
    { id: 1, name: 'Afrin Sabila', age:'27yrs',location:'Kochi',time: 'Today 5:30pm', avatar: 'assets/Images/propic1.jpg' },
    { id: 2, name: 'Adil Adnan',age:'27yrs',location:'Kochi', time:'22 July 8:30pm', avatar: 'assets/Images/propic1.jpg' },
    { id: 3, name: 'Bristy Haque',age:'27yrs',location:'Kochi', time:'20 July 2:30pm', avatar: 'assets/Images/propic1.jpg' },
    { id: 4, name: 'John Borino', age:'27yrs',location:'Kochi',time: '15 July 4:30pm',  avatar: 'assets/Images/propic1.jpg' },
    { id: 5, name: 'Borsha Akther',age:'27yrs',location:'Kochi', time: '12 July 9:30pm',  avatar: 'assets/Images/propic1.jpg' },
    { id: 6, name: 'Sheik Sadi', age:'27yrs',location:'Kochi',time: '7 July 3:30pm', avatar: 'assets/Images/propic1.jpg' },
    // Add more users as needed
  ];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const toggleProfileOptions = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setShowProfileOptions(!showProfileOptions);
  };

  const groupedUsers = users.reduce((acc, user) => {
    const firstLetter = user.name[0].toUpperCase();
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
            title="Viewed My Profile" 
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
  
export default ViewedMyProfileActivity;
