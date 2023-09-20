import React, { useState } from 'react';
import axios from 'axios';

function AdminAddItem() {
  // State to store item details
  const [item, setItem] = useState({
    itemId: '',
    itemCategory: '',
    itemDescription: '',
    itemValuation: '',
    itemStatus: '',
    itemMake: '',
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  // Function to handle the "Add Item" button click and redirect
  const handleAddItem = () => {
    // Check if any of the input fields are empty
    if (Object.values(item).some((field) => field === '')) {
      alert('Please fill in all the fields before adding the item.');
      return; // Do not proceed if any field is empty
    }

    // Send a POST request to the backend API to add the item
    axios.post('http://localhost:8080/addItem', item)
      .then((response) => {
        console.log('Item added successfully:', response.data);
        // Clear the input fields after successful addition
        setItem({
          itemId: '',
          itemCategory: '',
          itemDescription: '',
          itemValuation: '',
          itemStatus: '',
          itemMake: '',
        });

        // Redirect to another page
        window.location.href = '/Admin/ItemList'; // Replace with the actual URL
      })
      .catch((error) => {
        console.error('Error adding item:', error);
      });
  };

  return (
    <div>
      <h2>Admin Add Item</h2>
      <form>
        <div>
          <label>Item ID:</label>
          <input
            type="text"
            name="itemId"
            value={item.itemId}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Item Category:</label>
          <input
            type="text"
            name="itemCategory"
            value={item.itemCategory}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Item Description:</label>
          <input
            type="text"
            name="itemDescription"
            value={item.itemDescription}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Item Value:</label>
          <input
            type="text"
            name="itemValuation"
            value={item.itemValuation}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Issue Status:</label>
          <input
            type="text"
            name="itemStatus"
            value={item.itemStatus}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Item Make:</label>
          <input
            type="text"
            name="itemMake"
            value={item.itemMake}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleAddItem} disabled={Object.values(item).some((field) => field === '')}>
          Add Item
        </button>
      </form>
    </div>
  );
}

export default AdminAddItem;
