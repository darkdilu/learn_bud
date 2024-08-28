import React, { useState } from 'react';
import styles from './LandingPage.module.css'; // Import the CSS module
import avatar1 from '../../assets/WomanWearingPinkCollaredHalfSleevedTop1036623.jpeg';
import avatar2 from '../../assets/Ellipse13.png';
import avatar3 from '../../assets/PexelsDzianaHasanbekava5480696.jpeg';
import avatar4 from '../../assets/PexelsJonaorle4626207.jpeg';
import avatar5 from '../../assets/Rectangle.jpeg';
import avatar6 from '../../assets/User2.png';
import avatar7 from '../../assets/User21.png';
import avatar8 from '../../assets/WomanWearingPinkCollaredHalfSleevedTop1036623.jpeg';
import locationIcon from '../../assets/Vector48_x2.svg'
import messageIcon from '../../assets/message.svg'
import { ReactComponent as GoogleLogo } from '../../assets/FlatColorIconsgoogle18_x2.svg'; // Import SVG as React component
import { ReactComponent as PhoneIcon } from '../../assets/Group6_x2.svg'; // Import SVG as React component
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../store';


const avatars = [
  { src: avatar1, top: '20%', left: '-2%' },
  { src: avatar2, top: '1%', left: '70%' },
  { src: avatar3, top: '65%', left: '-2%' },
  { src: avatar4, top: '50%', left: '92%' },
  { src: avatar5, top: '43%', left: '43%' },
  { src: avatar6, top: '72%', left: '22%' },
  { src: avatar7, top: '25%', left: '75%' },
  { src: avatar8, top: '85%', left: '70%' },
  {src:locationIcon ,top:"-6%",left:"28%"},
  {src:messageIcon ,top:"91%",left:"30%"}
];

const LandingPage= () => {
  const [firstPageData,setFirstPageData] = useState(null)
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state)=>state.user.isLoggedIn);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [generateOpt,setGenerateOtp]=useState(false);

 
  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
    setIsLoginModalOpen(false)
    setGenerateOtp(false)
  };

  const closeSignUpModal = () => {
    setIsSignUpModalOpen(false);
    setGenerateOtp(false)
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsSignUpModalOpen(false)
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.circleContainer}>
        <div className={`${styles.circle} ${styles.large}`}></div>
        <div className={`${styles.circle} ${styles.medium}`}></div>
        <div className={`${styles.circle} ${styles.small}`}></div>
        {avatars.map((avatar, index) => (
          <img
            key={index}
            src={avatar.src}
            className={styles.avatar}
            style={{ top: avatar.top, left: avatar.left }}
            alt={`avatar ${index + 1}`}
          />
        ))}
      </div>
      <h1 className={styles.title}>Let’s meeting new people around you</h1>
      <button className={`${styles.btn} ${styles.primary}`} onClick={openLoginModal}>
        <PhoneIcon className={styles.iconImage} />
        Login with Phone
      </button>
      <button className={`${styles.btn} ${styles.secondary}`}>
        <span><GoogleLogo className={styles.iconImage} /></span>
        Login with Google
      </button>
      <p className={styles.signupText}>
        Don't have an account? <a href="#signup" onClick={openSignUpModal}>Sign Up</a>
      </p>

      {isSignUpModalOpen && <SignupPage setGenerateOtp={setGenerateOtp} closeSignUpModal={closeSignUpModal} openLoginModal={openLoginModal} styles={styles} generateOpt={generateOpt} setFirstPageData={setFirstPageData}/>}

      {isLoginModalOpen && <LoginPage closeLoginModal={closeLoginModal} openSignUpModal={openSignUpModal} styles={styles}/>}
   
    </div>
  );
};

export default LandingPage;