import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./AddLoan.css";

function AddLoan() {

  const [loan, setLoan] = useState({});
  const baseURL = "http://localhost:8090/loan";
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

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
    setLoan({ ...loan, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loan);
    try {
      const response = await axios.post(baseURL, loan);
      console.log(response);
      alert("loan saved");
      navigate("/admin/loanList");
    } catch (e) {
      let errmessage=e.response.data.message;
      if(errmessage.localeCompare(" already existed.")==0){
        console.log(errmessage);
        errmessage=loan.loanType+errmessage;
      }
      alert(errmessage);
    }
  };

  return (
    <div>
      <h2>Loan Application Form</h2>
      <div className='admin-add-loan-container'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor="loanId">Loan ID:</label>
            <input
              type="text"
              id="loanId"
              name="loanId"
              value={loan.loanId}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor="loanType">Loan Type:</label>
            <input
              type="text"
              id="loanType"
              name="loanType"
              value={loan.loanType}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor="duration">Duration (in years):</label>
            <input
              type="number"
              id="duration"
              name="durationInYears"
              value={loan.durationInYears}
              onChange={handleInputChange}
              required
            />
          </div>
          
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="form-group">
            <button type="submit" className="submit-button" disabled={!!errorMessage}>
              Add Loan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddLoan;
