import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import "./AdminEditItem.css";

export default function AdminEditItem({ match }) {
  const params = useParams();
  const navigate = useNavigate();
  const [editedItem, setEditedItem] = useState({});
  
  const baseURL = `http://localhost:8090/item/${params.id}`;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedItem({ ...editedItem, [name]: value });
  };

  const getItem = async () => {
    try {
      let response = await axios.get(baseURL);
      response = response.data;
      console.log(response);

      const itemDetails = {
        itemId: response.itemId,
        itemDescription: response.itemDescription,
        itemStatus: response.itemStatus,
        itemMake: response.itemMake,
        itemCategory: response.itemCategory,
        itemValuation: response.itemValuation
      }
      setEditedItem(itemDetails);
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(()=> {
    console.log(baseURL);
    getItem(params.id);
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(editedItem);
    
    try {
      const response = await axios.put(baseURL, editedItem);
      console.log(response);
      alert("Item data edited successfully");
      navigate("/admin/itemList"); 
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h2>Admin Edit Item</h2>
      <form onSubmit={handleSubmit} className='admin-add-item-container'>
        <div>
          <label>Item ID:</label>
          <input
            type="text"
            name="itemId"
            value={editedItem.itemId}
            onChange={handleInputChange}
            readOnly // Prevent editing the item ID
          />
        </div>
        <div>
          <label>Item Category:</label>
          <input
            type="text"
            name="itemCategory"
            value={editedItem.itemCategory}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Item Make:</label>
          <input
            type="text"
            name="itemMake"
            value={editedItem.itemMake}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Item Description:</label>
          <input
            type="text"
            name="itemDescription"
            value={editedItem.itemDescription}
            onChange={handleInputChange}
          />
        </div>
        
        <div>
          <label>Item Valuation:</label>
          <input
            type="text"
            name="itemValuation"
            value={editedItem.itemValuation}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Issue Status:</label>
          <input
            type="text"
            name="itemStatus"
            value={editedItem.itemStatus}
            onChange={handleInputChange}
          />
        </div>
        
        <button type="submit">
          Edit Item
        </button>
      </form>
    </div>
  );
}
