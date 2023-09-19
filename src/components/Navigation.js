import React from 'react';
import "./Navigation.css";
import { useNavigate } from 'react-router-dom';

function Navbar({ isLoggedIn }) {
  const navigate = useNavigate();

  const handleSwitchingToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Loan Management Application</h1>
      </div>
      <div className="user-actions">
      {isLoggedIn && <button className="dashboard-btn" onClick={handleSwitchingToDashboard}>Dashboard</button>}
      </div>
    </nav>
  );
}

export default Navbar;