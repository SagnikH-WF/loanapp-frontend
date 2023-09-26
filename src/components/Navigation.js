import React from 'react';
import "./Navigation.css";
import { useNavigate } from 'react-router-dom';
import LogoutButton from './Logout';

function Navbar() {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  console.log(isLoggedIn);
  const navigate = useNavigate();

  const handleSwitchingToDashboard = () => {
    navigate(`/${sessionStorage.getItem("role")}/dashboard`);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Loan Management Application</h1>
      </div>
      <div className="user-actions">
      {isLoggedIn && <button className="dashboard-btn" onClick={handleSwitchingToDashboard}>Dashboard</button>}
      <LogoutButton/>
      </div>
    </nav>
  );
}

export default Navbar;
