import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./LoanList.css";

const LoanList = () => {
	const [loanList, setLoanList] = useState([]);

	useEffect(() => {
		fetchAllLoansForEmployee();
	}, []);

	const fetchAllLoansForEmployee = async () => {
		try {
			const response = await axios.get(
				`http://localhost:8090/loanCard?employeeId=${sessionStorage.getItem(
					"employeeId"
				)}`
			);
			console.log(response);
			setLoanList(response.data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="loan-list-container">
			<h1 className="heading">Loan Cards Availed</h1>
			<div className="employee-info">
				<p>
					<strong>Employee ID:</strong> {sessionStorage.getItem("employeeId")}
				</p>
				<p>
					<strong>Designation:</strong> {sessionStorage.getItem("designation")}
				</p>
				<p>
					<strong>Department:</strong> {sessionStorage.getItem("department")}
				</p>
			</div>
			<table className="loan-table">
				<thead>
					<tr>
						<th>Loan Id</th>
						<th>Loan Type</th>
						<th>Duration</th>
						<th>Card Issue Date</th>
					</tr>
				</thead>
				<tbody>					
					{loanList.map((x, i) => (
						<tr>
							<td>{x.loanId}</td>
							<td>{x.loanType}</td>
							<td>{x.duration}</td>
							<td>{x.cardIssueDate}</td>
						</tr>
					))}					
				</tbody>
			</table>
		</div>
	);
};

export default LoanList;
