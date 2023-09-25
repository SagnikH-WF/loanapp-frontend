import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./UserLoanApplyForm.css";

const LoanApplyForm = () => {
	const [employeeId, setEmployeeId] = useState("");
	const [itemDescription, setItemDescription] = useState("");
	const [itemValue, setItemValue] = useState("");
	const [itemCategories, setItemCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("");
	const [itemMakes, setItemMakes] = useState([]);
	const [selectedMake, setSelectedMake] = useState("");
	const [items, setItems] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		setEmployeeId(sessionStorage.getItem("employeeId"));
		fetchItemCategories();
		console.log(sessionStorage.getItem("employeeId"));
	}, []);

	const fetchItemCategories = async () => {
		let itemCategories = [];
		try {
			const response = await axios.get(
				"http://localhost:8090/loan/distinctLoanTypes"
			);
			itemCategories = response.data;
		} catch (e) {
			console.log(e);
			navigate("/error500");
		}

		console.log("categories", itemCategories);
		setItemCategories(itemCategories);
		//setting the initial selected category with the first category in the list
		// setSelectedCategory(itemCategories[0]); //#TODO:
		return itemCategories;
	};

	useEffect(() => {
		console.log("Selected category in useEffect", selectedCategory);
		setItemMakes([]);
		setItems([]);
		setItemValue("");
		getAllMakes();
	}, [selectedCategory]);

	const getAllMakes = async () => {
		let itemMakes = [];
		try {
			if (selectedCategory) {
				const response = await axios.get(
					`http://localhost:8090/item?category=${selectedCategory}`
				);
				itemMakes = response.data;
				console.log("all makes", response.data);
			}
		} catch (e) {
			console.log(e);
			navigate("/error500");
		}

		setItemMakes(itemMakes);
		//setting the inital selected make with the first make in the list
		// setSelectedMake(itemMakes[0]);
	};

	const handleSelectedCategoryChange = (e) => {
		console.log("currently selected category", e.target.value);
		setSelectedCategory(e.target.value);

		//changing drop down
		document.getElementById("make").selectedIndex = 0;
		document.getElementById("description").selectedIndex = 0;
	};

	useEffect(() => {
		console.log("selected make useEffect", selectedMake);
		if (selectedMake) {
			setItems([]);
			setItemValue("");
			getAllItems();
		} else {
			setItems([]); //janina ki hoche
		}
	}, [selectedMake]);

	const handleSelectedMakeChange = (e) => {
		console.log("currently selected make", e.target.value);
		setSelectedMake(e.target.value);

		//changing description drop down
		document.getElementById("description").selectedIndex = 0;
	};

	const getAllItems = async () => {
		let items = [];
		try {
			if (selectedMake) {
				const response = await axios.get(
					`http://localhost:8090/item/category&make?category=${selectedCategory}&make=${selectedMake}`
				);
				console.log("all items response", response.data);
				items = response.data;
			}
		} catch (e) {
			console.log(e);
			navigate("/error500");
		}

		setItems(items);
	};

	const handleItemDescriptionChange = (e) => {
		setItemValue(items[e.target.selectedIndex - 1].itemValuation);
		setItemDescription(e.target.value);
		// console.log(e.target);
	};

	const handleSubmitApplyLoan = async (e) => {
		e.preventDefault();
		let requestBody = {
			employeeId: employeeId, //get from session storage
			itemCategory: selectedCategory,
			itemDescription: itemDescription,
			itemValuation: itemValue,
			itemMake: selectedMake,
		};
		console.log(requestBody);

		try {
			const response = await axios.post(
				`http://localhost:8090/applyLoan`,
				requestBody
			);
			console.log(response);

			alert(response.data); //TODO: put a more meaningful message (update message from backend)
			navigate("/user/dashboard");
		} catch (e) {
			console.log("Error", e);
			navigate("/error500");
		}
	};

	//TODO: handle when there is no make for specific category

	return (
		<div className="main_container">
			<h1>Loan Management Application</h1>
			<br />
			<h1>Select product and Apply for loan</h1>
			<br />

			<form onSubmit={handleSubmitApplyLoan}>
				<label htmlFor="defaultInput">Employee Id:</label>
				<div class="defaultInput">{employeeId}</div>

				<label htmlFor="categ">Item Category:</label>
				<select id="categ" onChange={handleSelectedCategoryChange}>
					<option disabled selected>
						Please Select a Value
					</option>
					{itemCategories.map((itemCategory) => (
						<option value={itemCategory}>{itemCategory}</option>
					))}
				</select>

				<label htmlFor="make">Item Make:</label>
				<select id="make" onChange={handleSelectedMakeChange}>
					<option disabled selected>
						Please Select a Value
					</option>
					{itemMakes.map((itemMake) => (
						<option value={itemMake}>{itemMake}</option>
					))}
				</select>

				<label htmlFor="description">Item Description:</label>
				<select id="description" onChange={handleItemDescriptionChange}>
					<option disabled selected>
						Please Select a Value
					</option>
					{items.map((val, idx) => {
						return (
							<option value={val.itemDescription} key={idx}>
								{val.itemDescription}
							</option>
						);
					})}
				</select>

        <label htmlFor="defaultInput">Item value:</label>
				<div class="defaultInput">{itemValue}</div>

				<br></br>
				<button type="submit">Apply Loan</button>
			</form>
		</div>
	);
};

export default LoanApplyForm;
