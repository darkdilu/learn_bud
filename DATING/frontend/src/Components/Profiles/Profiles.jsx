import React, { useEffect, useState } from 'react';
import { Row, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import styles from './profiles.module.css';
import profile1 from '../../assets/profile1.jpg';
import profile2 from '../../assets/profile2.jpg';
import profile3 from '../../assets/profile3.jpg';
import { useNetworkRequest } from '../../CustomHooks/useNetworkRequest';
import { Link } from 'react-router-dom';

const Profiles = ({setActiveFilter,activeFilter,genderInterest}) => {
  // const profiles = [
  //   { name: 'Sithara Nair', role: 'Developer, Hyderabad', sex: 'F', age: 26, img: profile1 },
  //   { name: 'Sithara Nair', role: 'Designer, Mumbai', sex: 'F', age: 26, img: profile2 },
  //   { name: 'Sithara Nair', role: 'Manager, Delhi', sex: 'F', age: 26, img: profile3 },
  //   { name: 'Sithara Nair', role: 'Developer, Hyderabad', sex: 'F', age: 26, img: profile1 },
  //   { name: 'Sithara Nair', role: 'Designer, Mumbai', sex: 'F', age: 26, img: profile2 },
  //   { name: 'Sithara Nair', role: 'Manager, Delhi', sex: 'F', age: 26, img: profile3 },
  // ];
  const {data,sendRequest,error} = useNetworkRequest()
  useEffect(()=>{
    if(activeFilter==="nearby"){
      sendRequest(`/user/matched?qualifications=${true}`,"GET",undefined,true)
    }
    if(activeFilter==="qualification"){
      sendRequest(`/user/matched?qualifications=${true}${genderInterest?`&&gender=${genderInterest}`:""}`,"GET",undefined,true)
    }
    if(activeFilter==="education"){
      sendRequest(`/user/matched`,"GET",undefined,true)
    }
    console.log("data",data)
    console.log(activeFilter)
  },[activeFilter])

  return (
    <section className={styles.profiles}>
      <Row>
        {data?data.users.map((profile, index) => (
          <div key={index} className={`${styles.col} ${styles['col-xs-6']} ${styles['col-md-4']} ${styles['col-lg-2']} ${styles.marginBottom4}`}>
            <div className={styles.profileCard}>
              <Image src={profile?.Files[0].URL} rounded />
              <div className={styles.status}>Online</div>
              <div className={styles.profileInfo}>
                <p className={styles.name}>{profile.UserId.Name}   <span className={styles.ageRole}>{profile?.DOB}YRS</span></p>
                <p className={styles.role}>{profile.role}</p>
              </div>
              <div className={styles.actionButtons}>
                <button className={styles.iconButton}><FontAwesomeIcon icon={faHeart} /></button>
                <button className={styles.iconButton}><FontAwesomeIcon icon={faComment} /></button>
                <Link to={`/profileview/${profile.UserId._id}`}>
                  <button className={styles.iconButton}><FontAwesomeIcon icon={faEllipsisH} /></button>
                </Link>
              </div>
            </div>
          </div>
        )): <span>No matching profile</span>}
      </Row>
    </section>
  );
};

export default Profiles;
