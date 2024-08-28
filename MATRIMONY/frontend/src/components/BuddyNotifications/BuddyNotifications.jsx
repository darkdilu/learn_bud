import React from 'react';
import './buddyNotifications.css';
import { RxCross2 } from "react-icons/rx";
import tick from '../../assets/buddysHome/success icon.svg';
import info from '../../assets/buddysHome/info icon.svg';
import error from '../../assets/buddysHome/error icon.svg';
const BuddyNotifications = () => {
  return (
    <div className='BuddyNotifications'>
      <div className="BuddyNotification1">
        <div className="BuddyNotification1Body">
          <div className="BuddyNotification1BodyContent">
            <div className="headingandCross1">
              <span className='heading1'>News</span>
              <span className='cross1'><RxCross2 /></span>
            </div>
            <div className="contentBody1">
              <span className="contentBody1title">News Title</span>
              <span className="contentBody1content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores nesciunt fugit quas qui architecto, ea atque fugiat consequuntur, temporibus quo omnis? Vero earum, consequatur soluta optio enim perspiciatis delectus nulla.
              </span>
              <span className="contentBody1timeOne">Today 10:30PM</span>
            </div>
          </div>
        </div>
      </div>
      <div className="BuddyNotification2">
        <div className="BuddyNotification2Content">
          <div className='TickAndMessageContainer'>
            <div className="TickAndMessage">
              <img src={tick} alt="Tick" className='tick' />
              <div className="message">Successfully Message</div>
            </div>
            <div className='time2'>Today 10:30PM</div>
          </div>
          <span className="cross2">
            <RxCross2 />
          </span>
        </div>
      </div>
      <div className="BuddyNotification2">
        <div className="BuddyNotification2Content">
          <div className='TickAndMessageContainer'>
            <div className="TickAndMessage">
              <img src={info} alt="Tick" className='tick' />
              <div className="message">Alert Message</div>
            </div>
            <div className='time2'>Today 10:30PM</div>
          </div>
          <span className="cross2">
            <RxCross2 />
          </span>
        </div>
      </div>
      <div className="BuddyNotification2">
        <div className="BuddyNotification2Content">
          <div className='TickAndMessageContainer'>
            <div className="TickAndMessage">
              <img src={error} alt="Tick" className='tick' />
              <div className="message">Error Message</div>
            </div>
            <div className='time2'>Today 10:30PM</div>
          </div>
          <span className="cross2">
            <RxCross2 />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BuddyNotifications;
