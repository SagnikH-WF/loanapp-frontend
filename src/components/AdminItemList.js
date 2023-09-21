import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ItemList.css";

const AdminItemList = () => {
  const navigate = useNavigate();
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetchAllItemsForEmployee();
  }, []);

  const fetchAllItemsForEmployee = async () => {
    try {
      const response = await axios.get("http://localhost:8090/item/allItems");
      setItemList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddItem = () => {
    navigate("/admin/item/register");
  }

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
      <h2 className="heading">Item Master Data Details</h2>
      <button className="add-button" onClick={handleAddItem}>
        Add Item Data
      </button>

      <table className="item-table">
        <thead>
          <tr>
            <th>Item Id</th>
            <th>Description</th>
            <th>Issue Status</th>
            <th>Item Make</th>
            <th>Item Category</th>
            <th>Item Valuation</th>
            <th></th>
            <th></th>
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
              <td><Link to={`/admin/item/edit/${item.itemId}`}>Edit</Link></td>
              <td><Link>Delete</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminItemList;
