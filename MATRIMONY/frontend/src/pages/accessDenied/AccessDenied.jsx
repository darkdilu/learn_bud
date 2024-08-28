import React from 'react';
import './accessDenied.css'
const AccessDeniedPage = () => {
  return (
    <div className="access-denied-page">
      <h1 className="error-code">403</h1>
      <p className="error-message">Access Denied</p>
      <p className="error-description">Sorry, You don't have access to this page</p>
      <button className="go-back-button">
        Go back to the Previous page <span>&#10145;</span>
      </button>
    </div>
  );
};

export default AccessDeniedPage;
