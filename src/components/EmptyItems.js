import React from 'react';
import './Error500.css';
import { Link } from 'react-router-dom';

function EmptyItems() {
  return (
    <div className="error-500-container">
      <h1 className='error-500-h1'>No Items purchased as of now</h1>
    </div>
  );
}

export default EmptyItems;
