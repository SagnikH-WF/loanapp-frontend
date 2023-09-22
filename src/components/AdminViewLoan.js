import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminViewLoan() {
	const [loanList, setLoanList] = useState([]);
	const baseURL = "http://localhost:8090/loan";
	const navigate = useNavigate();

	const getAllLoans = async () => {
    try {
      const response = await axios.get(baseURL);
      console.log(response);
      setLoanList(response.data);
    } catch(e) {
      console.log(e);
    }
  }

	useEffect(() => {
		getAllLoans();
	}, []);

  const handleAddLoan = () => {
    navigate("/admin/loan/register");
  }

	const handleDeleteLoan = async (loanId) => {
		try {
      const response = await axios.delete(baseURL + "/" + loanId);
      console.log(response);
      alert(response.data);

      const updatedLoans = loanList.filter((loan) => loan.loanId !== loanId);
      setLoanList(updatedLoans);
      } catch(e) {
        console.log(e);
      }
		};

	return (
		<div className="loan-list-container">
			<h2>Loan Card Details</h2>
      <button className="add-button" onClick={handleAddLoan}>
        Add Loan Data
      </button>
			<div className="table">
				<table className="loan-table">
					<thead>
						<tr>
							<th>LoanId</th>
							<th>Loan Type</th>
							<th>Duration</th>
							<th></th>
              <th></th>
						</tr>
					</thead>
					<tbody>
						{loanList.map((x, i) => (
							<tr>
								<td>{x.loanId}</td>
								<td>{x.loanType}</td>
								<td>{x.durationInYears}</td>
								<td><Link to={`/admin/loan/edit/${x.loanId}`}>Edit</Link></td>
                <td><Link onClick={() => handleDeleteLoan(x.loanId)}>Delete</Link></td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
