// import React from "react";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import "./ItemList.css";

// const AdminItemList = () => {
// 	const [itemList, setItemList] = useState([]);

// 	useEffect(() => {
// 		fetchAllItemsForEmployee();
// 	}, []);

// 	const fetchAllItemsForEmployee = async () => {
// 		try {
// 			const response = await axios.get('http://localhost:8080/admin/allItems')
// 			console.log(response);
// 			setItemList(response.data);
// 		} catch (err) {
// 			console.log(err);
// 		}
// 	};

// 	return (
// 		<div className="item-list-container">
// 			<h1 className="heading">Items Purchased</h1>
// 			<div className="employee-info">
// 				<p>
// 					<strong>Loan Management Application </strong>
// 				</p>
// 				<p>
// 					<strong>Customer Master Data Details</strong> 
// 				</p>
// 			</div>
// 			<table className="item-table">
// 				<thead>
// 					<tr>
// 						<th>Item Id</th>
// 						<th>Description</th>
//                         <th>Issue Status</th>
// 						<th>Item Make</th>
// 						<th>Item Category</th>
// 						<th>Item Valuation</th>
//                         <th>Action</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{itemList.map((x, i) => (
// 						<tr>
// 							<td>{x.itemId}</td>
// 							<td>{x.itemDescription}</td>
//                             <td>{x.itemStatus}</td>
// 							<td>{x.itemMake}</td>
// 							<td>{x.itemCategory}</td>
// 							<td>{x.itemValuation}</td>
//                             <td></td>
// 						</tr>
// 					))}
// 				</tbody>
// 			</table>
// 		</div>
// 	);
// };

// export default AdminItemList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ItemList.css";

const AdminItemList = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetchAllItemsForEmployee();
  }, []);

  const fetchAllItemsForEmployee = async () => {
    try {
      const response = await axios.get("http://localhost:8080/admin/allItems");
      setItemList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (itemId) => {
    // Implement edit functionality here, e.g., edirect to an edit page
    console.log("Item isd is", itemId);
    window.location.href ="/AdminEditItem/Edit/"+itemId;
  };

  const handleDelete = async (itemId) => {
    try {
        console.log("item id ",itemId);
      // Send a DELETE request to remove the item from the database
      await axios.delete(`http://localhost:8080/deleteItem?itemId=${itemId}`);
      console.log("item id ",{itemId})
      // Remove the deleted item from the state
      setItemList((prevItemList) =>
        prevItemList.filter((item) => item.itemId !== itemId)
      );
      console.log(`Item with ID ${itemId} deleted.`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="item-list-container">
      <h1 className="heading">Items Purchased</h1>
      <div className="employee-info">
        <p>
          <strong>Loan Management Application</strong>
        </p>
        <p>
          <strong>Customer Master Data Details</strong>
        </p>
      </div>
      <table className="item-table">
        <thead>
          <tr>
            <th>Item Id</th>
            <th>Description</th>
            <th>Issue Status</th>
            <th>Item Make</th>
            <th>Item Category</th>
            <th>Item Valuation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {itemList.map((item) => (
            <tr key={item.itemId}>
              <td>{item.itemId}</td>
              <td>{item.itemDescription}</td>
              <td>{item.itemStatus}</td>
              <td>{item.itemMake}</td>
              <td>{item.itemCategory}</td>
              <td>{item.itemValuation}</td>
              <td>
                <button onClick={() => handleEdit(item.itemId)}>Edit</button>
                <button onClick={() => handleDelete(item.itemId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminItemList;
