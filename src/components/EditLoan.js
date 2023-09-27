import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./EditLoan.css";

export default function EditLoan() {

  const [editedLoan, setEditedLoan] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const params = useParams();
  const navigate = useNavigate();
  const baseURL = `http://localhost:8090/loan/${params.id}`;

  const getLoan = async () => {
    try {
      let response = await axios.get(baseURL);
      response = response.data;
      console.log(response);

      const loanDetails = {
        loanId: response.loanId,
        durationInYears: response.durationInYears,
        loanType: response.loanType
      }

      setEditedLoan(loanDetails);
    } catch (e) {
      console.log(e);
      navigate("/error500");
    }
  }
  useEffect(() => {
    console.log(baseURL);
    getLoan(params.id);
  }, [])

  const checkIfValueisNegative = (value) => {
    console.log(value);
    if (parseFloat(value) <= 0) {
      setErrorMessage('Input cannot be negative and zero');
      return true;
    }
    setErrorMessage('');
    return false;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if(name === "durationInYears")
      checkIfValueisNegative(value);

    setEditedLoan({ ...editedLoan, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(editedLoan);

    try {
      const response = await axios.put(baseURL, editedLoan);
      console.log(response);
      alert("Employee loan edited successfully");
      navigate("/admin/loanList");
    } catch (e) {
      console.log(e);
      navigate("/error500");
    }
  };

  return (
    <div>
      <h2>Edit Loan</h2>
      <div className='admin-edit-loan-container'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="LoanId">Loan ID:</label>
          <input
            type="text"
            id="LoanId"
            name="LoanId"
            value={editedLoan.loanId}
            readOnly
          />

          <label htmlFor="LoanType">Loan Type:</label>
          <input
            type="text"
            id="LoanType"
            name="LoanType"
            value={editedLoan.loanType}
            //   onChange={(e) => setLoanType(e.target.value)}
            readOnly
            required
          />

          <label htmlFor="Duration">Duration (in years):</label>
          <input
            type="number"
            id="Duration"
            name="durationInYears"
            value={editedLoan.durationInYears}
            onChange={handleInputChange}
            required
          />

          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="form-group">
            <button type="submit" className="submit-button" disabled={!!errorMessage}>
              Save Loan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
