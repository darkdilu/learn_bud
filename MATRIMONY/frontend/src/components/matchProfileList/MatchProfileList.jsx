import React from 'react'
import './matchProfileList.css'
import img1 from '../../assets/buddysHome/img8.jpg'
const MatchProfileList = ({profile}) => {
    console.log("profileDataList",profile);

    return (
        <>
            <div className="MatchProfileListSubContainer">
                <div className='MatchProfileListImageConatiner'>
                    <img src={profile.image} alt="" className="MatchProfileListImage" />
                    <div className="MatchPercentage"><label>100% Match</label></div>
                    <div className="matchProfileNameAgePlaceContainer">
                        <div className="MatchProfileAgeNameOnlineTagContainer">
                            <div className='MatchProfileAgeNameOnlineTag'>
                                <div className='MatchProfileName'>{profile.name},</div>
                                <div className='MatchProfileAge'> {profile.age}</div>
                                <div className='MatchProfileAgeOnlineTag'></div>
                            </div>
                            <div className='MatchProfilePlace'>
                                <span>{profile.place}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MatchProfileList