import React, { useState } from 'react';
import JobStyles from './jobstatusModal.module.css'; // Import the CSS module
import LandingPage from '../LandingPage/LandingPage';


const JobStatusComponent = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [step, setStep] = useState(0);
  const [expertiseLevel, setExpertiseLevel] = useState('');

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNext = () => {
    if (selectedOption) {
      setStep(1);
    }
  };

  const handleExpertiseChange = (event) => {
    setExpertiseLevel(event.target.value);
  };

  return (
    <>
    <LandingPage />
    <div>
      {step === 0 && (
        <div className={JobStyles.modalOverlay}>
          <div className={JobStyles.modal}>
            <h2>Job Status</h2>
            <form>
              <label>
                <input
                  type="radio"
                  name="jobStatus"
                  value="employer"
                  checked={selectedOption === 'employer'}
                  onChange={handleRadioChange}
                />
                Employer/Employee
              </label>
              <label>
                <input
                  type="radio"
                  name="jobStatus"
                  value="jobSeeker"
                  checked={selectedOption === 'jobSeeker'}
                  onChange={handleRadioChange}
                />
                Job Seeker
              </label>
              <button type="button" className={JobStyles.btnNext} onClick={handleNext}>
                Next
              </button>
            </form>
          </div>
        </div>
      )}

      {step === 1 && selectedOption === 'employer' && (
        <div className={JobStyles.modalOverlay}>
          <div className={JobStyles.modal}>
            <h2>Job Details</h2>
            <form>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
              />
              <input
                type="text"
                name="designation"
                placeholder="Designation"
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
              />
              <button type="button" className={JobStyles.btnNext}>
                Next
              </button>
            </form>
          </div>
        </div>
      )}

      {step === 1 && selectedOption === 'jobSeeker' && (
        <div className={JobStyles.modalOverlay}>
          <div className={JobStyles.modal}>
            <h2>Job Details</h2>
            <form>
              <input type="text" name="title" placeholder="Job Title" />
              <h3 className={JobStyles.expertiseHeading}>Expertise Level</h3>
              <label>
                <input
                  type="radio"
                  name="expertiseLevel"
                  value="beginner"
                  checked={expertiseLevel === 'beginner'}
                  onChange={handleExpertiseChange}
                />
                Beginner
              </label>
              <label>
                <input
                  type="radio"
                  name="expertiseLevel"
                  value="intermediate"
                  checked={expertiseLevel === 'intermediate'}
                  onChange={handleExpertiseChange}
                />
                Intermediate
              </label>
              <label>
                <input
                  type="radio"
                  name="expertiseLevel"
                  value="expert"
                  checked={expertiseLevel === 'expert'}
                  onChange={handleExpertiseChange}
                />
                Expert
              </label>
              <button type="button" className={JobStyles.btnNext}>
                Next
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  </>);
};

export default JobStatusComponent;