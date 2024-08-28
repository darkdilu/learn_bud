import React, { useState } from 'react';
import styles from './ChooseApp.module.css';
import LandingPage from '../LandingPage/LandingPage';

const ChooseApp = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    console.log("Selected Option:", option);
  };

  return (
    <>
    <LandingPage />
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Interested</h2>
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.optionButton} ${selectedOption === 'Dating' ? styles.selected : ''}`}
            onClick={() => handleOptionClick('Dating')}
          >
            Dating
          </button>
          <button
            className={`${styles.optionButton} ${selectedOption === 'Matrimony' ? styles.selected : ''}`}
            onClick={() => handleOptionClick('Matrimony')}
          >
            Matrimony
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ChooseApp;