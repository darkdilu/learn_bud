import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import './Messages.css';
import LeftSideBar from '../../components/ActivityLeftSideBar/LeftSideBar';
import BuddyHomeProfile from '../../components/BuddysHomeProfile/BuddyHomeProfile';

const Messages = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const toggleProfileOptions = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setShowProfileOptions(!showProfileOptions);
  };
  const unreadMessages = 5;

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const messages = [
    { id: 1, name: 'Alfredo Calzoni', age: '27yrs', location: 'Kochi', time: '09:18', imgSrc: 'assets/Images/propic1.jpg', lastMessage: 'Hello there!' },
    { id: 2, name: 'Clara Hazel', age: '27yrs', location: 'Kochi', time: '12:44', imgSrc: 'assets/Images/propic1.jpg', lastMessage: 'How are you?' },
    { id: 3, name: 'Brandon', age: '27yrs', location: 'Kochi', time: '08:06', imgSrc: 'assets/Images/propic1.jpg', lastMessage: 'See you soon!' },
    { id: 4, name: 'Amina Mina', age: '27yrs', location: 'Kochi', time: '09:32', imgSrc: 'assets/Images/propic1.jpg', lastMessage: 'Good morning!' },
    { id: 5, name: 'Raymond Hall', age: '27yrs', location: 'Kochi', time: '10:21', imgSrc: 'assets/Images/propic1.jpg', lastMessage: 'Take care!' },
  ];

  return (
    <div className="activitycontainer">
      <div className={`leftsidebar ${isSidebarOpen ? 'blur' : ''}`}>
        <LeftSideBar />
      </div>
      <div className={`main ${isSidebarOpen ? 'blur' : ''}`}>
        <header className="messages-header">
          <span className="back-arrow" onClick={handleBack}><MdOutlineKeyboardArrowLeft /></span>
          <h1 className="title">Messages</h1>
          <div className="profilePicContainer" onClick={toggleProfileOptions}>
            <img src="assets/Images/propic1.jpg" alt="" className='profilePic' />
          </div>
        </header>
        <h2 className="recent-matches">Recent Matches</h2>
        <div className="matches-wrapper">
        <div className="match-item">
    <img src="assets/Images/propic1.jpg" alt="Match 1" />
    {unreadMessages > 0 && <div className="unread-message-count">{unreadMessages}</div>}
  </div>
  <img src="assets/Images/propic1.jpg" alt="Match 2" />
  <img src="assets/Images/propic1.jpg" alt="Match 3" />
  <img src="assets/Images/propic1.jpg" alt="Match 4" />
  <img src="assets/Images/propic1.jpg" alt="Match 5" />
  <img src="assets/Images/propic1.jpg" alt="Match 6" />
  <img src="assets/Images/propic1.jpg" alt="Match 7" />
  <img src="assets/Images/propic1.jpg" alt="Match 8" />
  <img src="assets/Images/propic1.jpg" alt="Match 2" />
  <img src="assets/Images/propic1.jpg" alt="Match 3" />
  <img src="assets/Images/propic1.jpg" alt="Match 4" />
  <img src="assets/Images/propic1.jpg" alt="Match 5" />
  <img src="assets/Images/propic1.jpg" alt="Match 6" />
  <img src="assets/Images/propic1.jpg" alt="Match 7" />
  <img src="assets/Images/propic1.jpg" alt="Match 8" />
</div>
        <section className="messages-list">
          {messages.map(message => (
            <div key={message.id} className="message-item">
              <img src={message.imgSrc} alt={message.name} className="avatar" />
              <div className="message-content">
                <div className="info">
                  <h2>{message.name}</h2>
                </div>
                <div className="last-message">{message.lastMessage}</div>
              </div>
              <span className="message-time">{message.time}</span>
            </div>
          ))}
        </section>
      </div>
      {showProfileOptions && (
        <div className="profileOptionsContainer">
          <BuddyHomeProfile toggleProfileOptions={toggleProfileOptions} />
        </div>
      )}
    </div>
  );
};

export default Messages;
