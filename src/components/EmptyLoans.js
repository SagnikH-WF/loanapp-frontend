import React from 'react';
import './Error500.css';
import { Link } from 'react-router-dom';

function EmptyLoans() {
  return (
    <div className="error-500-container">
      <h1 className='error-500-h1'>No Loans applied as of now</h1>
    </div>
  );
}

export default EmptyLoans;
