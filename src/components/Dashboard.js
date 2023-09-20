import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
	const navigate = useNavigate();

	const navigateToViewLoan = () => {
		navigate("/user/viewLoans");
	};
	const navigateToApplyLoan = () => {
		navigate("/user/applyLoan");
	};
	const navigateToPurchasedItem = () => {
		navigate("/user/viewItems");
	};

	return (
		<div className="dashboard-container">
			<div className="container">
				<div className="dashboard">
					<h3>Loan Management Applicaton</h3>
					<h3>User Dashboard</h3>
					<div className="dashboard-button-container">
						<button onClick={navigateToViewLoan}>View Loans</button>
						<button onClick={navigateToApplyLoan}>Apply for Loan</button>
						<button onClick={navigateToPurchasedItem}>
							View Item Purchased
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Dashboard;
