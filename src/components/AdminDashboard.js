import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./Dashboard.css";

function AdminDashboard() {
	const navigate = useNavigate();

	const navigateToAddCustomer = () => {
		navigate("/register");
	};
	const navigateToApplyLoan = () => {
		navigate("/applyLoan");
	};
	const navigateToPurchasedItem = () => {
		navigate("/viewItems");
	};

	return (
		<div className="dashboard-container">
			<div className="container">
				<div className="dashboard">
					<h3>Loan Management Applicaton</h3>
					<h3>User Dashboard</h3>
					<div className="dashboard-button-container">
						<button onClick={navigateToAddCustomer}>Customer Data Management</button>
						<button onClick={navigateToApplyLoan}>Loan Card Management</button>
						<button onClick={navigateToPurchasedItem}>
							Item Master Data
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default AdminDashboard;
