import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import "./Dashboard.css";


function Dashboard() {
    const navigate = useNavigate();

    const navigateToViewLoan = () => {
        navigate('/viewLoans');
    }
    const navigateToApplyLoan = () => {
        navigate('/applyLoan');
    }
    const navigateToPurchasedItem = () => {
        navigate('/viewItems');
    }


    return (
      <div className='container'>
        <div class="dashboard">
            <h3>Loan Management Applicaton</h3>
            <h3>User Dashboard</h3>
            <div class="dashboard-button-container">                
                <button onClick={navigateToViewLoan}>View Loans</button>                                
                <button onClick={navigateToApplyLoan} >Apply for Loan</button>                
                <button onClick={navigateToPurchasedItem}>View Item Purchased</button>
            </div>
        </div>
      </div>
    )
}
export default Dashboard;