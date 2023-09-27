import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./AdminAddItem.css";

function AdminAddItem() {
  // State to store item details
  const navigate = useNavigate();
  const baseURL = "http://localhost:8090/item";
  const [item, setItem] = useState({});
  const [itemCategories, setItemCategories] = useState([]);  

  useEffect(() => {
    fetchItemCategories();
  }, []);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(item);
    try {
      const response = await axios.post(baseURL, item);
      console.log(response);
      alert("item saved");
      navigate("/admin/itemList");
    } catch (e) {
      console.log(e);
      navigate("/error500");
    }
  };

  return (
    <div>
      <h2>Admin Add Item</h2>
      <div className='admin-add-item-container'>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Item ID:</label>
            <input
              type="text"
              name="itemId"
              value={item.itemId}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            {/* <label>Item Category:</label>
          <input
            type="text"
            name="itemCategory"
            value={item.itemCategory}
            onChange={handleInputChange}
            required
          /> */}
            <label htmlFor="categ">Item Category:</label>
            <select id="categ" onChange={handleInputChange} name='itemCategory' required>
              <option value="" disabled selected>
                Please Select a Value
              </option>
              {itemCategories.map((itemCategory) => (
                <option value={itemCategory}>{itemCategory}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Item Make:</label>
            <input
              type="text"
              name="itemMake"
              value={item.itemMake}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label>Item Description:</label>
            <input
              type="text"
              name="itemDescription"
              value={item.itemDescription}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Item Value:</label>
            <input
              type="text"
              name="itemValuation"
              value={item.itemValuation}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="itemStatus">Item Status:</label>
            <select id="itemStatus" onChange={handleInputChange} name='itemStatus' value={item.itemStatus} required>
              <option value="" disabled selected>
                Please Select a Value
              </option>
              <option value={"Y"} key={"Y"}>Y</option>
              <option value={"N"} key={"N"}>N</option>
            </select>
          </div>


          <button type="submit" disabled={Object.values(item).some((field) => field === '')}>
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminAddItem;
