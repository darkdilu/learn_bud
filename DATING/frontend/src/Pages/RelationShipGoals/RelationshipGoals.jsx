import React, { useState } from 'react';
import styles from './RelationshipGoals.module.css';
import LandingPage from '../LandingPage/LandingPage';

const RelationshipGoals = () => {
  const [selectedGoal, setSelectedGoal] = useState('shortTerm');

  const handleNext = () => {
    console.log("Selected Goal:", selectedGoal);
  };

  return (
    <>
    <LandingPage />
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Relationship Goals</h2>
        <div className={styles.radioContainer}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="relationshipGoal"
              value="shortTerm"
              checked={selectedGoal === 'shortTerm'}
              onChange={() => setSelectedGoal('shortTerm')}
            />
            Short Term Relationship
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="relationshipGoal"
              value="longTerm"
              checked={selectedGoal === 'longTerm'}
              onChange={() => setSelectedGoal('longTerm')}
            />
            Long Term Relationship
          </label>
        </div>
        <button className={styles.nextButton} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
    </>
  );
};

export default RelationshipGoals;