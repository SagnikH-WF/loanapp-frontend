import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminViewLoan.css";
export default function AdminViewLoan() {

    const [loan,setLoan] = useState([]);
    const baseURL = "http://localhost:9090/loan";
    const navigate = useNavigate();

    const setLoanData = ()=>{
        axios.get(baseURL)
            .then((response)=>{
                setLoan(response.data);
            })
            .catch((error)=>{
                alert("Error occured while loading data "+error);
            });
    };

	useEffect(() => {
		setLoanData();
	}, []);

    const handleDelete = async (loanId) => {
        try {
           
           await axios.delete(`http://localhost:9090/loan/${loanId}`);

           setLoan((prevData) => prevData.filter((row) => row.loanId !== loanId));
           alert(`${loanId} deleted successfully`);
        } catch (error) {
          // Handle any errors (e.g., display an error message)
          console.error('Error deleting loan:', error);
        }
      };

  return (
    <div className='loan-list-container'>
        <h1 className="heading">Loan Card Details</h1>
            <table className='loan-table'>
                <thead>
                    <tr>
                        <th>LoanId</th>
                        <th>Loan Type</th>
                        <th>Duration</th>
                        <th colSpan={2} className="align-middle">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loan.map((x,i)=>(
                            <tr>
                                <td>{x.loanId}</td>
                                <td>{x.loanType}</td>
                                <td>{x.durationInYears}</td>
                                <td><button type="button" class="btn btn-primary"><Link className="text-reset"
                                      to={
                                        "/adminViewLoan/Edit/"+x.loanId
                                      }>
                                        Edit
                                    </Link>
                                    </button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-danger" 
                                    onClick={()=>handleDelete(x.loanId)}><Link className="text-reset">Delete</Link></button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
  )
}
