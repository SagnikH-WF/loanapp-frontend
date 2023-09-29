import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./ItemList.css";
import { useNavigate } from "react-router-dom";
import EmptyItems from "./EmptyItems";

const ItemList = () => {
	const navigate = useNavigate();
	const [itemList, setItemList] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		fetchAllItemsForEmployee();
	}, []);

	const fetchAllItemsForEmployee = async () => {
		try {
			const response = await axios.get(
				`http://localhost:8090/itemsIssued?employeeId=${sessionStorage.getItem(
					"employeeId"
				)}`
			);
			console.log(response);
			setItemList(response.data);
		} catch (err) {
			console.log(err.response.data.message);
			// navigate("/user/emptyitemslist");
			setError(true);
		}
	};

	if (!error) {
		return (
			<div className="item-list-container">
				<h1 className="heading">Items Purchased</h1>
				<div className="employee-info">
					<p>
						<strong>Employee ID:</strong> {sessionStorage.getItem("employeeId")}
					</p>
					<p>
						<strong>Designation:</strong>{" "}
						{sessionStorage.getItem("designation")}
					</p>
					<p>
						<strong>Department:</strong> {sessionStorage.getItem("department")}
					</p>
				</div>
				<table className="item-table">
					<thead>
						<tr>
							<th>Issue Id</th>
							<th>Loan Description</th>
							<th>Item Make</th>
							<th>Item Category</th>
							<th>Item Valuation</th>
						</tr>
					</thead>
					<tbody>
						{itemList.map((x, i) => (
							<tr>
								<td>{x.issueId}</td>
								<td>{x.itemDescription}</td>
								<td>{x.itemMake}</td>
								<td>{x.itemCategory}</td>
								<td>{x.itemValuation}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	} else {
		return <EmptyItems />;
	}
};

export default ItemList;
