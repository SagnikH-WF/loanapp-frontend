import React, { useState } from 'react';
import './Register.css'; 
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function Register() {

    const baseURL = "http://localhost:8090/employee";
    const navigate = useNavigate();
    const [employeeId, setEmployeeId] = useState('');
    const [password, setPassword] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [dateOfJoining, setDateOfJoining] = useState('');
    const [department, setDepartment] = useState('');
    const [designation, setDesignation] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');

    const handleEmployeeIdChange = (event) => {      
      setEmployeeId(event.target.value);
    };
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleDepartmentChange = (event) => {
      setDepartment(event.target.value);
    };
    const handleDesignationChange = (event) => {
      setDesignation(event.target.value);
    };
    const handleGenderChange = (event) => {
      setGender(event.target.value);
    };
    const handleDateOfBirthChange = (event) => {
      setDateOfBirth(event.target.value);
    };
    const handleDateOfJoiningChange = (event) => {
      setDateOfJoining(event.target.value);
    };
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestBody = {
      employeeId : employeeId,
      password : password,
      dateOfBirth: dateOfBirth,
      dateOfJoining: dateOfJoining,
      department: department,
      designation: designation,
      name: name,
      gender: gender
    };
    try {
      const response = await axios.post(baseURL, requestBody);
      console.log(requestBody);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
        

  return (
    <div>
      <h2>Employee Registration</h2>
      <form className="registration-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label" htmlFor="employeeId">
            Employee ID
          </label>
          <input
            type="text"
            id="employeeId"
            name="employeeId"
            value={employeeId}
            onChange={handleEmployeeIdChange}
            className="input-field"
            required
          />
        </div>

        <div className="form-group">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            className="input-field"
            required
          />
        </div>

        <div className="form-group">
          <label className="label" htmlFor="name">
            Employee Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            className="input-field"
            required
          />
        </div>

        <div className="form-group">
          <label className="label" htmlFor="dateOfBirth">
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={handleDateOfBirthChange}
            className="input-field"
            required
          />
        </div>

        <div className="form-group">
          <label className="label" htmlFor="dateOfJoining">
            Date of Joining
          </label>
          <input
            type="date"
            id="dateOfJoining"
            name="dateOfJoining"
            value={dateOfJoining}
            onChange={handleDateOfJoiningChange}
            className="input-field"
            required
          />
        </div>

        <div className="form-group">
          <label className="label" htmlFor="designation">
            Designation
          </label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={designation}
            onChange={handleDesignationChange}
            className="input-field"
            required
          />
        </div>

        <div className="form-group">
          <label className="label" htmlFor="department">
            Department
          </label>
          <input
            type="text"
            id="department"
            name="department"
            value={department}
            onChange={handleDepartmentChange}
            className="input-field"
            required
          />
        </div>

        <div className="form-group">
          <label className="label" htmlFor="gender">
            Gender
          </label>
          <select id="gender" onChange={handleGenderChange}>
          <option disabled selected>
						Please Select a Value
					</option>
            <option value={"M"} key={"M"}>M</option>
            <option value={"F"} key={"F"}>F</option>
          </select>
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;