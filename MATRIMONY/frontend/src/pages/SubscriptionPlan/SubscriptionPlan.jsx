import  { useState } from 'react';
import './SubscriptionPlan.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/NotifyHeader/Header';
import LeftSideBar from '../../components/ActivityLeftSideBar/LeftSideBar';
import BuddyHomeProfile from '../../components/BuddysHomeProfile/BuddyHomeProfile';

const SubscriptionPlan = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const toggleProfileOptions = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setShowProfileOptions(!showProfileOptions);
  };


  return (
    <div className="subscription-container">
      <div className={`leftsidebar ${isSidebarOpen ? 'blur' : ''}`}>
        <LeftSideBar />
      </div>
      <div className={`subscription-main ${isSidebarOpen ? 'blur' : ''}`}>
      <div className="activity-header">
          <Header 
            title="Subscription" 
            profilePic="assets/Images/propic1.jpg" 
            onProfilePicClick={toggleProfileOptions} 
          />
        </div>
        <div className="subscription-content">
          <div className="plan-card">
            <h2>Prime Member</h2>
            <p className="price">₹49/month</p>
            <div className="limits">
              <h3>
                <FontAwesomeIcon icon={faCheckCircle} className="sub-icon-tick" />
                Daily Limits
              </h3>
              <ul>
                <li>View up to 15 profiles per day</li>
                <li>Send up to 15 requests per day</li>
              </ul>
              <hr />
              <h3>
                <FontAwesomeIcon icon={faCheckCircle} className="sub-icon-tick" />
                Weekly Limits
              </h3>
              <ul>
                <li>View up to 90 profiles per week</li>
                <li>Send up to 90 requests per week</li>
              </ul>
              <hr />
              <h3>
                <FontAwesomeIcon icon={faCheckCircle} className="sub-icon-tick" />
                Monthly Limits
              </h3>
              <ul>
                <li>View up to 300 profiles per month</li>
                <li>Send up to 300 requests per month</li>
              </ul>
            </div>
            <hr />
            <div className="premium-features">
              <h3>
                <FontAwesomeIcon icon={faCheckCircle} className="sub-icon-tick" />
                Premium Features
              </h3>
              <ul>
                <li>Unlock Unlimited Messages</li>
                <li>Unlock Shortlist Page</li>
                <li>View Profiles Who Shortlisted You</li>
                <li>Sort & filter Profiles</li>
              </ul>
            </div>
            <button className="subscribe-button">Subscribe</button>
          </div>
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

export default SubscriptionPlan;
