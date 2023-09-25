import React from 'react';
import './Error500.css';
import { Link } from 'react-router-dom';

function Error500() {
  return (
    <div className="error-500-container">
      <h1 className='error-500-h1'>500 - Internal Server Error</h1>
      <p className='error-500-p'>Sorry, something went wrong on our end.</p>
      <p className='error-500-p'><Link to={"/"}>Go to home</Link></p>
    </div>
  );
}

export default Error500;
