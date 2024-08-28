import React from 'react';
import './YourMatchs.css';
import MatchProfileList from '../matchProfileList/MatchProfileList';

const YourMatch = ({ profileData, headingName }) => {
  console.log("profileList", profileData);
  console.log("headingName", headingName);

  const headingClassName = headingName === "Viewed My Profile" ? 'ViewedMyProfileHeading' : 'YourMatchHeading';

  return (
    <div className='YourMatchConatiner'>
      {headingName === "Viewed My Profile" ? (
        <div className={headingClassName}>
          <span>47 new profile views</span>
        </div>
      ) : (
        <div className={headingClassName}>
          <span>Your Matches </span><label> 47</label>
        </div>
      )}
      <div className='MatchProfileListContainer'>
        {profileData && profileData.map((profiles, index) => (
          <MatchProfileList key={index} profile={profiles} />
        ))}
      </div>
    </div>
  );
}

export default YourMatch;
