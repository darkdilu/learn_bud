import { useState } from 'react';
import './PartnerPreference.css';
import { Range, getTrackBackground } from "react-range";
import LeftSideBar from '../../components/ActivityLeftSideBar/LeftSideBar';
import BuddyHomeProfile from '../../components/BuddysHomeProfile/BuddyHomeProfile';

const PartnerPreference = () => {
  const [ageRange, setAgeRange] = useState([18, 35]);
  const [heightRange, setHeightRange] = useState([100, 220]);
  const [weightRange, setWeightRange] = useState([40, 150]);
  const [locations, setLocations] = useState(['Kochi', 'Kollam', 'Aluva']);
  const [hobbies, setHobbies] = useState(['yoga', 'jazz', 'cooking']);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const toggleProfileOptions = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setShowProfileOptions(!showProfileOptions);
  };


  const removeTag = (type, tag) => {
    if (type === 'location') {
      setLocations(locations.filter((location) => location !== tag));
    } else if (type === 'hobby') {
      setHobbies(hobbies.filter((hobby) => hobby !== tag));
    }
  };

  return (
    <div className="activitycontainer">
      <div className={`leftsidebar ${isSidebarOpen ? 'blur' : ''}`}>
        <LeftSideBar />
      </div>
      <div className="preference-header">
          <h2 >Privacy & Settings</h2>
          <div className="profilePicContainer" onClick={toggleProfileOptions}>
            <img src="assets/Images/propic1.jpg" alt="" className='profilePic' />
          </div>
        </div>
      <div className={`preference-container ${isSidebarOpen ? 'blur' : ''}`}>
        
        <div className="preference-section">
          <h2>Partner Preference</h2>
          <div className="preference-form">
            <FormGroup
              label="Age"
              values={ageRange}
              min={18}
              max={35}
              onChange={setAgeRange}
              text=""
            />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Locations</label>
            <div className="tags">
              {locations.map((location) => (
                <span key={location}>
                  {location} <button onClick={() => removeTag('location', location)}>x</button>
                </span>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label>Interests & Hobbies</label>
            <div className="tags">
              {hobbies.map((hobby) => (
                <span key={hobby}>
                  {hobby} <button onClick={() => removeTag('hobby', hobby)}>x</button>
                </span>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label>Education Level</label>
            <select>
              <option value="">Select</option>
              <option value="highschool">High School</option>
              <option value="bachelor">Bachelors</option>
              <option value="master">Masters</option>
              <option value="doctorate">Doctorate</option>
            </select>
          </div>
          <div className="form-group">
            <RangeGroup
              label="Height"
              values={heightRange}
              text="cm"
              min={100}
              max={220}
              onChange={setHeightRange}
            />
            <RangeGroup
              label="Weight"
              values={weightRange}
              text="kg"
              min={40}
              max={150}
              onChange={setWeightRange}
            />
          </div>
          <div className="form-group">
            <label>Religion</label>
            <select>
              <option value="">Select</option>
              <option value="christianity">Christianity</option>
              <option value="islam">Islam</option>
              <option value="hinduism">Hinduism</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Occupation</label>
            <select>
              <option value="">Select</option>
              <option value="student">Student</option>
              <option value="employed">Employed</option>
              <option value="self-employed">Self-Employed</option>
              <option value="unemployed">Unemployed</option>
            </select>
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

const FormGroup = ({ label, text, values, min, max, onChange }) => (
  <div className="form-group">
    <div className="range-label">
      <label>{label}</label>
      <div className="range-values">
        <span>{values[0]} - {values[1]}</span>
      </div>
    </div>
    <div className="range-slider-container">
      <div className="range-slider">
        <Range
          step={1}
          min={min}
          max={max}
          values={values}
          onChange={onChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "6px",
                width: "100%",
                background: getTrackBackground({
                  values,
                  colors: ["#4a90e2", "#ccc", "#4a90e2"],
                  min,
                  max
                }),
                borderRadius: "3px"
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "20px",
                width: "20px",
                borderRadius: "50%",
                backgroundColor: "#ccc",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #aaa"
              }}
            />
          )}
        />
      </div>
    </div>
  </div>
);

const RangeGroup = ({ label, text, values, min, max, onChange }) => (
  <div className="form-group">
    <div className="range-label">
      <label>{label}</label>
      <div className="range-values">
        <span>{text} {values[0]} - {values[1]}</span>
      </div>
    </div>
    <div className="range-slider-container">
      <div className="range-slider">
        <Range
          step={1}
          min={min}
          max={max}
          values={values}
          onChange={onChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "6px",
                width: "100%",
                background: getTrackBackground({
                  values,
                  colors: ["#4a90e2", "#ccc", "#4a90e2"],
                  min,
                  max
                }),
                borderRadius: "3px"
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "20px",
                width: "20px",
                borderRadius: "50%",
                backgroundColor: "#ccc",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #aaa"
              }}
            />
          )}
        />
      </div>
    </div>
  </div>
);

export default PartnerPreference;


