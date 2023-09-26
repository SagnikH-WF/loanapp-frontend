import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditEmployee.css";
import axios from "axios";

const EditEmployee = () => {
	const params = useParams();
	const navigate = useNavigate();
	const baseUrl = `http://localhost:8090/employee/${params.id}`;
	const [editedEmployee, setEditedEmployee] = useState({});

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
				isAdmin: response.isAdmin,
			};
			setEditedEmployee(employeeDetails);
		} catch (e) {
			console.log(e);
			navigate("/error500");
		}
	};

	useEffect(() => {
		console.log(baseUrl);
		getEmployee(params.id);
	}, []);

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
			navigate("/error500");
		}
	};

	return (
		<div>
			<h2>Edit Employee</h2>
			<form className="registration-container" onSubmit={handleSubmit}>
				<div className="form-group">
					<label className="label" htmlFor="employeeId">
						Employee ID
					</label>
					<input
						type="text"
						id="employeeId"
						name="employeeId"
						value={editedEmployee.employeeId}
						onChange={handleInputChange}
						className="input-field"
						readOnly
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
						value={editedEmployee.name}
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
						value={editedEmployee.password}
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
						value={editedEmployee.dateOfBirth}
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
						value={editedEmployee.dateOfJoining}
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
						value={editedEmployee.department}
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
						value={editedEmployee.designation}
						onChange={handleInputChange}
						className="input-field"
						required
					/>
				</div>

				<div className="form-group">
					<label className="label" htmlFor="gender">
						Gender
					</label>
					<select
						id="gender"
						onChange={handleInputChange}
						name="gender"
						value={editedEmployee.gender}
						required
					>
						<option key={"disabled"} value="" disabled selected>
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
					<select id="isAdmin" onChange={handleInputChange} name="isAdmin" value={editedEmployee.isAdmin}>
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
};

export default EditEmployee;
