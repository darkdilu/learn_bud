import React, { useEffect, useState } from 'react';
import styles from './ProfileView.module.css';
import backgroundImage from '../../assets/ladyImage1.jpg';
import upgradeView from '../UpgradeView/UpgradeView'
import { useParams } from 'react-router-dom';
import { useNetworkRequest } from '../../CustomHooks/useNetworkRequest';
import NotFound404 from '../../Pages/NotFound404/NotFound404';
import { FaUserFriends } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";

const ProfileView = () => {
    const [userProfile,setUserProfile] = useState(null)
    const {userId} = useParams()
    const {data,sendRequest,error,loading}=useNetworkRequest()
    const {data:requestData,sendRequest:sendUserRequest}=useNetworkRequest()
    const {data:getRequestData,sendRequest:getRequest}=useNetworkRequest()
    const {data:updatedRequestData,sendRequest:updateRequest} = useNetworkRequest()
    const {data:savedProfile,sendRequest:savedProfileRequest} = useNetworkRequest();

    useEffect(()=>{
        if(userId){
            sendRequest(`/user/individualprofile/${userId}`,"GET",undefined,true)
            getRequest(`/request/getrequest/${userId}`,"GET",undefined,true)
            savedProfileRequest(`/saved/getsavedprofile/${userId}`,"GET",undefined,true).then(()=>console.log(savedProfile))
        }
        if(data){
            setUserProfile(data.user.Files.find(each=>each.Name==="ProfilePic").URL)
        }
        if(getRequestData){
            console.log("Request data ",getRequestData)
        }
    },[userId])

    if (loading) {
        return <div>Loading...</div>;
    }

    function sendingRequest(){
        if(userId){
            sendUserRequest(`/request/send/${userId}`,"POST",undefined,true).then(()=>getRequest(`/request/getrequest/${userId}`,"GET",undefined,true))
        }
    }

    function requestUpdationHandler(type){
        if(getRequestData){
            switch(type){
                case "accept":
                    updateRequest(`/request/${getRequestData.requestObj._id}/params?Accepted=${true}`,"PUT",undefined,true).then(()=>getRequest(`/request/getrequest/${userId}`,"GET",undefined,true));
                    break;
                case "reject":
                    updateRequest(`/request/${getRequestData.requestObj._id}/params?Rejected=${true}`,"PUT",undefined,true).then(()=>getRequest(`/request/getrequest/${userId}`,"GET",undefined,true));
                    break;
                case "delete":
                    updateRequest(`/request/delete/${getRequestData.requestObj._id}`,"DELETE",undefined,true).then(()=>getRequest(`/request/getrequest/${userId}`,"GET",undefined,true));
                    break;

            }
        }
    }

    function saveProfile(){
        console.log("receiver id : ",userId)
        if(userId){
            savedProfileRequest(`/saved/saveprofile/${userId}`,"POST",undefined,true).then(()=>console.log(savedProfile))
        }
    }

    // useEffect(()=>console.log("saved:",savedProfile),[savedProfile])

    return (
        (data?(<div
            className={styles.profileViewContainer}
            style={{
                background: `url(${userProfile}) no-repeat cover cover`,
                backgroundSize: 'cover'
            }}
        >
            <div className={`${styles.topContainer} ${styles.torchEffect}`}>
                <div className={styles.topLeftArrow}>
                    <i className="fas fa-less-than"></i>
                </div>

                <div className={styles.topRightLocation}>
                    <i className="fa-solid fa-location-arrow"></i>
                    <p>2.5 km</p>
                </div>

                <div className={styles.userDetails}>
                    <p className={styles.username}>{data.user.UserId.Name}<span>20</span></p>
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
                    <p className={styles.matchText}>Match</p>
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
                        <span className={styles.interestTag}>🌿 Nature</span>
                        <span className={styles.interestTag}>🏝️ Travel</span>
                        <span className={styles.interestTag}>✍️ Writing</span>
                    </div>
                </div>

                <div className={styles.footerContainer}>
                    <button className={`${styles.footerButton} ${styles.dislikeButton}`}>X</button>
                    <button className={`${styles.footerButton} ${styles.starButton}`} disabled={savedProfile} onClick={()=>saveProfile()}>★</button>
                    {getRequestData?
                            (!getRequestData.requestObj.sender?
                            (getRequestData.requestObj.status==="Pending"?
                                (
                                    <div>
                                        <button onClick={()=>requestUpdationHandler("accept")}>Accept</button>
                                        <button onClick={()=>requestUpdationHandler("reject")}>Reject</button>
                                    </div>
                                ):
                                (getRequestData.requestObj.status==="Accepted"?
                                    <div className={`${styles.footerButton} ${styles.likeButton}`}  ><FaUserFriends/></div>:
                                    <div className={`${styles.footerButton} ${styles.likeButton}`}  >Rejected</div>
                                )
                            ):
                            (getRequestData.requestObj.status==="Pending"?
                                <button className={`${styles.footerButton} ${styles.likeButton}`} onClick={()=>requestUpdationHandler("delete")}><ImCancelCircle/></button>:
                                (getRequestData.requestObj.status==="Accepted"?
                                    <div className={`${styles.footerButton} ${styles.likeButton}`}  ><FaUserFriends/></div>:
                                    <div className={`${styles.footerButton} ${styles.likeButton}`}  >Rejected</div>
                                ))
                            )
                        :

                        <button className={`${styles.footerButton} ${styles.likeButton}`} onClick={()=>sendingRequest()} >
                        <i className="fas fa-heart"></i>
                        </button>
                    }
                    <button className={`${styles.footerButton} ${styles.chatButton}`}>💬</button>
                </div>
            </div>
        </div>):<NotFound404/>)
    );
};

export default ProfileView;