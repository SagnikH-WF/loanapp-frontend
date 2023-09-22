import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ItemList.css";

const AdminItemList = () => {
  const navigate = useNavigate();
  const baseURL = "http://localhost:8090/item";
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetchAllItemsForEmployee();
  }, []);

  const fetchAllItemsForEmployee = async () => {
    try {
      const response = await axios.get(baseURL + "/allItems");
      setItemList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddItem = () => {
    navigate("/admin/item/register");
  }

  const handleDeleteItem = async (itemId) => {
    try {
      const response = await axios.delete(baseURL + "/" + itemId);
      console.log(response);
      alert(response.data);

      const updatedItems = itemList.filter((item) => item.itemId !== itemId);
      setItemList(updatedItems);
    } catch(e) {
      console.log(e);
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
              <td><Link onClick={() => handleDeleteItem(item.itemId)}>Delete</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminItemList;
