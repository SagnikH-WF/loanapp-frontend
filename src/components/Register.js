import React, { useState } from 'react';
import './Register.css'; 
import axios from 'axios';
// import {useNavigate} from "react-router-dom";

function Register() {

    const baseURL = "http://localhost:8080/employee";
    // const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    employeeId: '',
    password: '',
    employeeName: '',
    dateOfBirth: '',
    dateOfJoining: '',
    designation: '',
    department: '',
    gender: 'male'// Default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
        .post(baseURL,{
            employee_id : employee.employeeId,
            password : employee.password,
            date_of_birth: employee.dateOfBirth,
            date_of_joining: employee.dateOfJoining,
            department: employee.department,
            designation: employee.designation,
            employee_name: employee.employeeName,
            gender: employee.gender
        })
        .then((response)=>{
            alert('Employee added successfully');
        })
        .catch((error)=>{
            alert("error=="+error);
        });
    
    
    // Reset the form
    setEmployee({
      employeeId: '',
      password: '',
      employeeName: '',
      dateOfBirth: '',
      dateOfJoining: '',
      designation: '',
      department: '',
      gender: 'male',
    });
  };

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
            value={employee.employeeId}
            onChange={handleChange}
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
            value={employee.password}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <div className="form-group">
          <label className="label" htmlFor="employeeName">
            Employee Name
          </label>
          <input
            type="text"
            id="employeeName"
            name="employeeName"
            value={employee.employeeName}
            onChange={handleChange}
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
            value={employee.dateOfBirth}
            onChange={handleChange}
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
            value={employee.dateOfJoining}
            onChange={handleChange}
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
            value={employee.designation}
            onChange={handleChange}
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
            value={employee.department}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <div className="form-group">
          <label className="label" htmlFor="gender">
            Gender
          </label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={employee.gender}
            onChange={handleChange}
            className="input-field"
            required
          />
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