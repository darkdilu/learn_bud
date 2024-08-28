import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../Components/HeaderUserHome/HeaderUserHome';
import Stories from '../../Components/Stories/Stories';
import Filters from '../../Components/Filters/Filters';
import Profiles from '../../Components/Profiles/Profiles';
import Footer from '../../Components/Footer/Footer';
import InterestModal from '../../Components/InterestModal/InterestModal';
import LeftSideMenu from '../../Components/LeftSideMenu/LeftSideMenu'
import styles from './userHomePage.module.css';
import Notifications from '../Notifaction/Notifications';

function UserHomePage() {
  const [activeFilter, setActiveFilter] = useState('nearby');
  const [genderInterest,setGenderInterest] = useState(null)
  const [modalShow, setModalShow] = useState(true);
  const [notificationView,setNotificationView]=useState(false)
  const handleModalClose = (interest) => {
    if (interest) {
      setGenderInterest(interest)
      localStorage.setItem('userInterest', interest);
      console.log('User is interested in:', interest);
    }
    setModalShow(false);
  };

  useEffect(() => {
    
    const userInterest = localStorage.getItem('userInterest');
    if (!userInterest) {
      setModalShow(true);
    } else {
      setModalShow(false);
    }
  }, []);
  const [leftSideNavBar,setLeftSideNavBar]=useState(false)
  const handleLeftsideMenu=()=>{
     leftSideNavBar&&setLeftSideNavBar(false)
  }
  return (
    <Container fluid className={`${styles.appContainer} ${modalShow ? styles.blurBackground : ''}`} onClick={handleLeftsideMenu}>
      <Header setLeftSideNavBar={setLeftSideNavBar} setNotificationView={setNotificationView}/>
      {leftSideNavBar&&<LeftSideMenu />}
      {notificationView&&<Notifications setNotificationView={setNotificationView} />}
      <Stories />
      <Filters activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
      <Profiles activeFilter={activeFilter} setActiveFilter={setActiveFilter} genderInterest={genderInterest}/>
      <Footer />
      <InterestModal show={modalShow} handleClose={handleModalClose} />
    </Container>
  );
}

export default UserHomePage;
