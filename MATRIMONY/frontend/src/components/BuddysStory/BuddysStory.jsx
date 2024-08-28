import React from 'react'
import './story.css'
import { IoIosAdd } from "react-icons/io";
import propic from '../../assets/buddysHome/propic1.jpg';
const BuddysStory = ({showNotifications}) => {
    const stories = [
        { id: 1, name: "my Story", isMine: true },
        { id: 2, name: "Julian", isMine: false },
        { id: 3, name: "Rick", isMine: false },
        { id: 5, name: "Marco", isMine: false },
        { id: 6, name: "Stanley", isMine: false },
        { id: 7, name: "Tony", isMine: false },
        { id: 8, name: "Victor", isMine: false },
        { id: 9, name: "Smith", isMine: false },
        { id: 10, name: "White", isMine: false },
        { id: 11, name: "my Story", isMine: true },
        { id: 12, name: "Julian", isMine: false },
        { id: 13, name: "Rick", isMine: false },
        { id: 14, name: "Marco", isMine: false },
        { id: 15, name: "Stanley", isMine: false },
        { id: 16, name: "Tony", isMine: false },
        { id: 17, name: "Victor", isMine: false },
        { id: 18, name: "Smith", isMine: false },
        { id: 19, name: "White", isMine: false },
        { id: 20, name: "my Story", isMine: true },
        { id: 21, name: "Julian", isMine: false },
        { id: 22, name: "Rick", isMine: false },
        { id: 23, name: "Marco", isMine: false },
        { id: 24, name: "Stanley", isMine: false },
        { id: 25, name: "Tony", isMine: false },
        { id: 26, name: "Victor", isMine: false },
        { id: 27, name: "Smith", isMine: false },
        { id: 28, name: "White", isMine: false }
      ];
  return (
    <div>
           <div className={`BuddyPairHomeHeaderStoryContainer ${showNotifications ? 'blur-background' : ''}`}>
          {stories.map(story => (
            <div key={story.id} className='BuddyPairHomeHeaderStory'>
              <div className={story.isMine ? 'BuddyPairHomeHeaderStoryImageMineContainer' : 'BuddyPairHomeHeaderStoryImageborder'}>
                <img
                  src={propic}
                  alt=""
                  className={story.isMine ? "BuddyPairHomeHeaderStoryImageMine" : "BuddyPairHomeHeaderStoryImage"}
                />
                {story.isMine && <span className='BuddyPairHomeHeaderStoryImageMineAddIcon'><IoIosAdd /></span>}
              </div>
              <span className="BuddyPairHomeHeaderStoryUserName">{story.name}</span>
            </div>
          ))}
        </div>
    </div>
  )
}

export default BuddysStory