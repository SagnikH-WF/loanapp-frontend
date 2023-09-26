import React from 'react';
import './LogoutButton.css';

const LogoutButton = () => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');

  const handleLogout = () => {
    // Clear session storage
    sessionStorage.clear();

    // Redirect to the home page
    window.location.href = '/';
  };

  // Display the "Logout" button only when the user is logged in
  return isLoggedIn ? (
    <div className="button-container"> {/* Apply the CSS class */}
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  ) : null;
};

export default LogoutButton;
