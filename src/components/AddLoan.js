import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function AddLoan() {
  const [loanId, setLoanId] = useState('');
  const [loanType, setLoanType] = useState('');
  const [duration, setDuration] = useState('');
  const baseURL = "http://localhost:9090/loan";
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
        .post(baseURL,{
            loanId : loanId,
            loanType : loanType,
            durationInYears: duration
        })
        .then((response)=>{
            alert('Loan added successfully');
            navigate('/adminViewLoan');
        })
        .catch((error)=>{
            alert("error=="+error);
        });
    

    // You can handle form submission logic here
    // For now, let's just log the form values
    console.log('Loan ID:', loanId);
    console.log('Loan Type:', loanType);
    console.log('Duration:', duration);
  };

  return (
    <div className='container'>
      <h1>Loan Application Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="LoanId">Loan ID:</label>
        <input
          type="text"
          id="LoanId"
          name="LoanId"
          value={loanId}
          onChange={(e) => setLoanId(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="LoanType">Loan Type:</label>
        <input
          type="text"
          id="LoanType"
          name="LoanType"
          value={loanType}
          onChange={(e) => setLoanType(e.target.value)}
          required
        /><br /><br />
        <label htmlFor="Duration">Duration (in years):</label>
        <input
          type="number"
          id="Duration"
          name="Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        /><br /><br />

        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default AddLoan;
