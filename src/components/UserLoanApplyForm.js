import React, { useEffect, useState } from "react";
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

	useEffect(() => {
		fetchItemCategories();
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
		}

		console.log("categories", itemCategories);
		setItemCategories(itemCategories);
		//setting the initial selected category with the first category in the list
		// setSelectedCategory(itemCategories[0]); //#TODO:
		return itemCategories;
	};

	useEffect(() => {
		console.log("Selected category in useEffect", selectedCategory);
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
		}

		setItemMakes(itemMakes);
		//setting the inital selected make with the first make in the list
		// setSelectedMake(itemMakes[0]);
	};

	const updateSelectedCategory = (e) => {
		console.log("currently selected category", e.target.value);
		setSelectedCategory(e.target.value);
	};

	useEffect(() => {
		console.log("selected make useEffect", selectedMake);
		if (selectedMake) {
			getAllItems();
		}
	}, [selectedMake]);

	const updateSelectedMake = (e) => {
		console.log("currently selected make", e.target.value);
		setSelectedMake(e.target.value);
	};

	const getAllItems = async () => {
		let items = [];
		try {
			if (selectedMake) {
				const response = await axios.get(
					`http://localhost:8090/item/allItems?category=${selectedCategory}&make=${selectedMake}`
				);
				console.log("all items response", response.data);
				items = response.data;
			}
		} catch (e) {
			console.log(e);
		}

		setItems(items);
	};

	const handleItemDescriptionChange = (e) => {
		setItemValue(items[e.target.selectedIndex - 1].itemValuation);
		setItemDescription(e.target.value);
	};

	//TODO: handle when there is no make for specific category

	return (
		<div className="main_container">
			<h1>Loan Management Application</h1>
			<br />
			<h1>Select product and Apply for loan</h1>
			<br />

			<form>
				<label htmlFor="id">Employee Id:</label>
				<input id="id" type="text" />
				<select id="description" onChange={handleItemDescriptionChange}>
					<option disabled selected>
						Please Select a Value
					</option>
					{items.map((val, idx) => {
						return (
							<option value={val} key={idx}>
								{val.itemDescription}
							</option>
						);
					})}
				</select>
				<label htmlFor="val">Item value:</label>
				{itemValue}
				<label htmlFor="categ">Item category:</label>
				<select id="categ" onChange={updateSelectedCategory}>
					<option disabled selected>
						Please Select a Value
					</option>
					{itemCategories.map((itemCategory) => (
						<option value={itemCategory}>{itemCategory}</option>
					))}
				</select>
				<label htmlFor="make">Item make:</label>
				<select id="make" onChange={updateSelectedMake}>
					<option disabled selected>
						Please Select a Value
					</option>
					{itemMakes.map((itemMake) => (
						<option value={itemMake}>{itemMake}</option>
					))}
				</select>
				<br></br>
				<button type="submit">Apply Loan</button>
			</form>
		</div>
	);
};

export default LoanApplyForm;
