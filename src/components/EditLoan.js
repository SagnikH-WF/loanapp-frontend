import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function EditLoan() {
    const param = useParams();
    const [loanId, setLoanId] = useState('');
    const [loanType, setLoanType] = useState('');
    const [duration, setDuration] = useState('');
    const navigate = useNavigate();
    const [id,setId]=useState(param.id)
    const baseURL = "http://localhost:9090/loan/";
   

    useEffect(()=>{
        axios.get(baseURL+id)
            .then((response)=>{
                const loanData = response.data;
                setLoanId(loanData.loanId);
                setLoanType(loanData.loanType);
                setDuration(loanData.duration);
                console.log(loanData.loanType);
            }).catch((error)=>{
                alert("error=="+error);
            });
    },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
        .put(baseURL+id,{
            loanId:loanId,
            loanType:loanType,
            durationInYears: duration
        })
        .then((response)=>{
            alert('Updated Successfully');
            navigate('/adminViewLoan');
        })
        .catch((error)=>{
            alert("error=="+error);
        });
    
     };

    return (
    <div className='container'>
      <h1>Updating Loan</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="LoanId">Loan ID:</label>
        <input
          type="text"
          id="LoanId"
          name="LoanId"
          value={loanId}
          readOnly
        /><br /><br />

        <label htmlFor="LoanType">Loan Type:</label>
        <input
          type="text"
          id="LoanType"
          name="LoanType"
          value={loanType}
        //   onChange={(e) => setLoanType(e.target.value)}
        readOnly
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

        <input type="submit" value="Update" />
      </form>
    </div>
  );
}
