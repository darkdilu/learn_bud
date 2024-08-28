// src/components/Header.js
import './Header.css';
import { CiSearch } from "react-icons/ci";

const Header = ({ title, profilePic, onProfilePicClick }) => {
  return (
    <div className="header">
      <span className='search'><CiSearch /></span>
      <div className="title-wrapper">
        <h1 className="title">{title}</h1>
      </div>
      {profilePic && (
        <div className="profile-pic-container" onClick={onProfilePicClick}>
          <img src={profilePic} alt="Profile" className='profile-pic' />
        </div>
      )}
    </div>
  );
};

export default Header;
