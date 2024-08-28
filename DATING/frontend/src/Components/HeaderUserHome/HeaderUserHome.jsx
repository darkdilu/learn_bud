import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell as faBellRegular } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './headerUserHome.module.css';
import LeftSideMenu from '../LeftSideMenu/LeftSideMenu';
import { ModalContext } from '../../StateManagement/ModalContext';



const Header = ({setNotificationView}) => {
  const{toggleModal}=useContext(ModalContext)
  const [service,setService]=useState(false)
  return (
    <>
    <header className={`d-flex justify-content-between align-items-center p-3 ${styles.header}`}>
      <div className="d-flex align-items-center">
        <FontAwesomeIcon icon={faBars}  className={styles.menuIcon} onClick={()=>setService(prev=>!prev)} />
        <h1 className={styles.title}>BuddyPair</h1>
      </div>
      <div className="d-flex align-items-center">
        <div className={styles.notificationIcon}>
          <div className={styles.iconCircle}>
            <FontAwesomeIcon icon={faBellRegular} onClick={()=>setNotificationView(true)} />
            <div className={styles.notificationDot}></div>
          </div>
        </div>
        <img src="/path/to/user-avatar.jpg" alt="User Avatar" className={styles.avatar} onClick={toggleModal}/>
      </div>
    </header> 
    <LeftSideMenu isService={service}/>
    </>
  );
};

export default Header;
