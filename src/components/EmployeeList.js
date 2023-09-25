import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './EmployeeList.css'; // Import a CSS file for styling

const EmployeeList = () => {
  const navigate = useNavigate();
  const [employeeList, setEmployeeList] = useState([]);

  const baseUrl = "http://localhost:8090/employee"

  const getAllEmployees = async () => {
    try {
      const response = await axios.get(baseUrl);
      console.log(response.data);
      setEmployeeList(response.data);
    } catch (e) {
      console.log(e);
      navigate("/error500");
    }
  }

  const handleCustomerRegistration = () => {
    navigate("/admin/register");
  }

  const handleDeleteEmployee = async (employeeId) => {
    try {
      const response = await axios.delete(baseUrl + "/" + employeeId);
      console.log(response);
      alert(response.data);

      const updatedEmployees = employeeList.filter((employee) => employee.employeeId !== employeeId);
      setEmployeeList(updatedEmployees);
    } catch(e) {
      console.log(e);
      navigate("/error500");
    }
  };

	useEffect(() => {
    getAllEmployees();
	}, []);

  return (
    <div className="employee-list-container">
      <h2 className="heading">Customer Master Data Details</h2>
      <button className="add-button" onClick={handleCustomerRegistration}>
        Add Customer Data
      </button>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee Name</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Date of Joining</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {employeeList.map((x, i) => (
						<tr>
							<td>{x.employeeId}</td>
							<td>{x.name}</td>
							<td>{x.designation}</td>
							<td>{x.department}</td>
              <td>{x.gender}</td>
              <td>{x.dateOfBirth}</td>
              <td>{x.dateOfJoining}</td>
              <td><Link to={`/admin/edit/${x.employeeId}`}>Edit</Link></td>
              <td><Link onClick={() => handleDeleteEmployee(x.employeeId)}>Delete</Link></td>
						</tr>
					))}			
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
