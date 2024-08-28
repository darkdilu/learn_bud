import React, { useContext, useEffect, useState } from 'react';
import styles from '../ProfileView/ProfileView.module.css';
import backgroundImage from '../../assets/ladyImage1.jpg';
import { useNetworkRequest } from '../../CustomHooks/useNetworkRequest';
import { ModalContext } from '../../StateManagement/ModalContext';
import { Link } from 'react-router-dom';

const OwnProfileView = () => {
    const {isModalOpen,toggleModal,handlePageNameChange}=useContext(ModalContext)
    const [profile,setProfile] = useState(null)
    const {data,sendRequest} = useNetworkRequest()
    useEffect(()=>{
        sendRequest("/user/profile","GET",undefined,true)
        console.log(data)
        if(data){
            for(const index in data.user.Files){
                console.log(data.user.Files[index])
                if(data.user.Files[index].Name==="ProfilePic"){
                    setProfile(data.user.Files[index].URL)
                }
            }
        }
    },[])
    return (
        <div
            className={styles.profileViewContainer}
            style={{
                background: `url(${profile||backgroundImage}) no-repeat`,
                backgroundSize: 'cover',
            }}
        >
            <div className={`${styles.topContainer} ${styles.torchEffect}`}>
                <div className={styles.topLeftArrow}>
                    <i className="fas fa-less-than"></i>
                </div>

                <div className={styles.topRightLocation}>
                    <i className="fa-solid fa-location-arrow"></i>
                    <p><Link to={"/editprofile"} onClick={()=>handlePageNameChange("Edit")}>Edit</Link></p>
                </div>

          <div className={styles.userDetails}>
                    <p className={styles.username}>{data?.user?.UserId?.Name}<span>{data?.user?.DOB}</span></p>
                    <p className={styles.userPlace}>HAMBURG, GERMANY</p>
                </div>

                <div className={styles.matchingContainer}>
                    <div className={styles.matchingPercentage}>
                        <div className={styles.circle}>
                            <div className={styles.innerCircle}>
                                <p className={styles.percentageNumber}>80</p>
                                <p className={styles.percentageIcon}>%</p>
                            </div>
                        </div>
                    </div>
                    <p className={styles.matchText}>Profile Complete</p>
                </div>
            </div>

            <div className={styles.bottomContainer}>
                <div className={styles.about}>
                    <p className={styles.aboutHeading}>About</p>
                    <p className={styles.aboutContent}>A good listener. I love having a good talk to know each other's side 😍.</p>
                </div>

                <div className={styles.interests}>
                    <p className={styles.interestHeading}>Interest</p>
                    <div className={styles.interestTags}>
                        <span className={styles.interestTag}>🌿 {data?.user?.Interests}</span>
                        <span className={styles.interestTag}>🏝️ Travel</span>
                        <span className={styles.interestTag}>✍️ Writing</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OwnProfileView;
