import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
	const baseURL = "http://localhost:8090/employee";
	const navigate = useNavigate();

	const [employee, setEmployee] = useState({});
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setEmployee({ ...employee, [name]: value });
	};	
  
	const handleSubmit = async (e) => {
		e.preventDefault();		
		console.log(employee);
		try {      
		  const response = await axios.post(baseURL, employee);		  
		  console.log(response);
		  alert("employee saved");
		  navigate("/admin/employeeList");
		} catch (e) {
		  console.log(e);
		  navigate("/error500");
		}
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
						onChange={handleInputChange}
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
						value={employee.name}
						onChange={handleInputChange}
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
						onChange={handleInputChange}
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
						onChange={handleInputChange}
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
						onChange={handleInputChange}
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
						onChange={handleInputChange}
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
						onChange={handleInputChange}
						className="input-field"
						required
					/>
				</div>				

				<div className="form-group">
					<label className="label" htmlFor="gender">
						Gender
					</label>
					<select id="gender" onChange={handleInputChange} name="gender" required>
						<option value="" disabled selected>
							Please Select a Value
						</option>
						<option value={"M"} key={"M"}>
							M
						</option>
						<option value={"F"} key={"F"}>
							F
						</option>
					</select>
				</div>

				<div className="form-group">
					<label htmlFor="isAdmin">Is Admin:</label>
					<select
						id="isAdmin"
						onChange={handleInputChange}
						name="isAdmin"
					>
            			<option disabled selected>
							Please Select a Value
						</option>
						<option value={"no"} key={"N"}>
							N
						</option>
						<option value={"yes"} key={"Y"}>
							Y
						</option>
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
