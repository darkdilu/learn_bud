import React from 'react'
import './likeAndConnect.css'
import img1 from '../../assets/buddysHome/propic1.jpg'
import img2 from '../../assets/buddysHome/img2.webp'
import { FaHeart, FaComment } from 'react-icons/fa';

const LikesAndConnect = () => {
  return (
    <div className='LikesAndConnectContainer'>
      <div className="LikesAndConnectSubContainer">
        <div className="likeContainer">
          <img src={img2} alt="" className='likeContainerImage' />
          <div className="iconOverlay">
            <FaHeart className="icon" />
          </div>
          <div className="label">Likes <span>32</span></div>
        </div>
        <div className="connectContainer">
          <img src={img1} alt="" className='connectContainerImage' />
          <div className="iconOverlay">
            <FaComment className="icon" />
          </div>
          <div className="label">Connect <span>15</span></div>
        </div>
      </div> 
    </div>
  )
}

export default LikesAndConnect