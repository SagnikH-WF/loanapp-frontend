
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Login.css'

function LoginPage(props) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const requestData = { userId, password }; // Data to be sent to the backend

    console.log('Data being sent to the backend:', requestData); // Log the data

    try {      
      const response = await axios.post(`http://localhost:8090/employee/${props.role}/login`, requestData);
      console.log(response);
      sessionStorage.setItem("employeeId", response.data.employeeId);
      sessionStorage.setItem("designation", response.data.designation);
      sessionStorage.setItem("department", response.data.department);
      // Assuming a successful login returns a token
     // const token = response.data.token;
      // Store the token in local storage or a secure cookie
     // localStorage.setItem('token', token);
      // Redirect the user to a protected route
      // Example: history.push('/dashboard');
     alert(response.data.message);

      //added for logged in state management at layout level
      // props.handleLogin(true);
      sessionStorage.setItem("isLoggedIn", true);
      sessionStorage.setItem("role", props.role);
      navigate(`/${props.role}/dashboard`);
    } catch (err) {
      console.log(err);
      console.log(err.response.data.message); //TODO: contains the error message from the backend, display it
      alert(err.response.data.message);
      setError('Login failed. Please check your credentials.');      
    }
  };

  return (
    <div className="login-container">
      <h2>{props.role} Login Page</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div>
          <label>userId:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="input-field"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default LoginPage;