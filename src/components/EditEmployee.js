import React, { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import "./EditEmployee.css";
import axios from 'axios';

const EditEmployee = () => {
  const params = useParams();
  const navigate = useNavigate();
  const baseUrl = `http://localhost:8090/employee/${params.id}`;
  const [editedEmployee, setEditedEmployee] = useState('');

  const getEmployee = async () => {
    try {
      let response = await axios.get(baseUrl);
      response = response.data;
      console.log(response);
      // setEditedEmployee(response.data);
      const employeeDetails = {
        employeeId: response.employeeId,
        name: response.name,
        password: response.password,
        designation: response.designation,
        department: response.department,
        gender: response.gender,
        dateOfBirth: response.dateOfBirth,
        dateOfJoining: response.dateOfJoining,
        isAdmin: response.isAdmin
      }
      setEditedEmployee(employeeDetails);
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(()=> {
    console.log(baseUrl);
    getEmployee(params.id);
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee({ ...editedEmployee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(editedEmployee);
    // onSave(editedEmployee); //send from parent, what to do
    try {
      const response = await axios.put(baseUrl, editedEmployee);
      console.log(response);
      alert("Employee data edited successfully");
      navigate("/admin/employeeList");      
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit} className='edit-employee-container'>
        <div>
          <label>Employee Id:</label>
          <input
            type="text"
            name="employeeId"
            value={editedEmployee.employeeId}
            onChange={handleInputChange}
            readOnly
          />
        </div>
        <div>
          <label>Employee Name:</label>
          <input
            type="text"
            name="name"
            value={editedEmployee.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Designation:</label>
          <input
            type="text"
            name="designation"
            value={editedEmployee.designation}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={editedEmployee.department}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="text"
            name="gender"
            value={editedEmployee.gender}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={editedEmployee.dateOfBirth}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Date of Joining:</label>
          <input
            type="date"
            name="dateOfJoining"
            value={editedEmployee.dateOfJoining}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="isAdmin">Is Admin:</label>
          <select id="isAdmin" onChange={handleInputChange} name='isAdmin' value={editedEmployee.isAdmin}>
            <option value={"yes"} key={"Y"}>Y</option>
            <option value={"no"} key={"N"}>N</option>
          </select>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditEmployee;
