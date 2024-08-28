import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faSliders } from '@fortawesome/free-solid-svg-icons';
import styles from './qualification.module.css';
import Footer from '../../Components/Footer/Footer.jsx';
import LikeAndConnect from '../../Components/LikeAndConnect/LikeAndConnect.jsx';
import { Link, useNavigate } from 'react-router-dom';
import ProfileCard from '../../Components/ProfileCard/ProfileCard.jsx';
import matches from '../../SampleData.js';
import { useNetworkRequest } from '../../CustomHooks/useNetworkRequest.js';
 

const Qualification = () => {
  const{data,error,loading,sendRequest} = useNetworkRequest();
  const [showNavigation, setShowNavigation] = useState(false);

  const navigate = useNavigate();

  const handleSliderClick = () => {
    setShowNavigation(!showNavigation);
  };
  const handleLeftArrowClick = () => {
    navigate('/userhome');
  }
  useEffect(()=>{
    sendRequest(`/user/matched?qualifications=${true}`,"GET",undefined,true)
    console.log(data)
  },[])

  return (
    <Container fluid className={styles.userPages}>
      <div className={styles.header}>
        <FontAwesomeIcon icon={faChevronLeft} transform="shrink-8" className={styles.roundButton} onClick={handleLeftArrowClick} />
        <div className={styles.pageTitle}>Qualification</div>
        <FontAwesomeIcon icon={faSliders}  transform="shrink-8" className={styles.roundButton} onClick={handleSliderClick} />
      </div>

      {showNavigation && (
        <div className={styles.navigationList}>
          <div className={styles.navigationItem}><Link to='/location' className={styles.navigationLink}>Location</Link></div>
          <div className={styles.navigationItem}><Link to='/designation' className={styles.navigationLink}>Designation</Link></div>
        </div>
      )}

      <LikeAndConnect />
      <div className={styles.matchCount}>
        Your Matches <span className={styles.matchCountNumber}>47</span>
      </div>

      <Row className={styles.matchContainer}>
        {data&&data.users.map((match, index) => {
          const profileUrl = match.Files.find(file=>file.Name==="ProfilePic").URL
          return (
          <div key={index} className={`${styles.col} ${styles['col-xs-6']} ${styles['col-md-4']} ${styles['col-lg-2']} ${styles.marginBottom4}`}>
            <ProfileCard
              matchPercentage={90}
              imageUrl={profileUrl}
              distance={90}
              name={match.UserId.Name}
              age={match.age}
              location={"Somewhere"}
            />
          </div>
        )})}
      </Row>

      <Footer />
    </Container>
  );
};

export default Qualification;
