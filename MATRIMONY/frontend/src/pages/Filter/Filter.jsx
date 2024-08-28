import { useState } from 'react';
import Header from '../../components/NotifyHeader/Header';
import { SiTicktick } from 'react-icons/si';
import './Filter.css';
import LeftSideBar from '../../components/ActivityLeftSideBar/LeftSideBar';
import BuddyHomeProfile from '../../components/BuddysHomeProfile/BuddyHomeProfile';

const Filter = () => {
    const [sortSelection, setSortSelection] = useState({
        newestMembers: false,
        lastActive: false,
        location: false,
    });

    const [filterSelection, setFilterSelection] = useState({
        gender: false,
        age: false,
        location: false,
        interestsHobbies: false,
        religion: false,
    });

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showProfileOptions, setShowProfileOptions] = useState(false);

    const toggleProfileOptions = () => {
        setIsSidebarOpen(!isSidebarOpen);
        setShowProfileOptions(!showProfileOptions);
    };


    const handleSortClick = (key) => {
        setSortSelection((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const handleFilterClick = (key) => {
        setFilterSelection((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="activitycontainer">
            <div className={`leftsidebar ${isSidebarOpen ? 'blur' : ''}`}>
                <LeftSideBar />
            </div>
            <div className={`main ${isSidebarOpen ? 'blur' : ''}`}>
            <div className="activity-header">
          <Header 
            title="Filter" 
            profilePic="assets/Images/propic1.jpg" 
            onProfilePicClick={toggleProfileOptions} 
          />
        </div>
                <div className="filter-content">
                    <div className="filter-section">
                        <h3>Sort By</h3>
                        <ul>
                            {Object.keys(sortSelection).map((key) => (
                                <li key={key} onClick={() => handleSortClick(key)}>
                                    <span>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                                    <SiTicktick />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="filter-section">
                        <h3>Filter By</h3>
                        <ul>
                            {Object.keys(filterSelection).map((key) => (
                                <li key={key} onClick={() => handleFilterClick(key)}>
                                    <span>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                                    <SiTicktick />
                                </li>
                            ))}
                        </ul>
                        <div className="filter-footer">
                            <button className="cancel-button">Cancel</button>
                            <button className="apply-button">Apply</button>
                        </div>
                    </div>
                </div>
            </div>

            {showProfileOptions && (
                <div className="profileOptionsContainer">
                    <BuddyHomeProfile toggleProfileOptions={toggleProfileOptions} />
                </div>
            )}
        </div>
    );
};

export default Filter;
