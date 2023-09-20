// // AdminEditItem.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// function AdminEditItem({ match }) {
//   const [item, setItem] = useState({
//     itemId: '',
//     itemCategory: '',
//     itemDescription: '',
//     itemValue: '',
//     issueStatus: '',
//     itemMake: '',
//   });

//   // Inside your AdminEditItem component
//   const { itemId } = useParams();
  
//   useEffect(() => {
//     // Fetch the item details based on itemId
//     fetchItemDetails(itemId);
//   }, [itemId]);

//   const fetchItemDetails = async (itemId) => {
//     try {
//       const response = await axios.get(`http://localhost:8080/getItemById?itemId=${itemId}`);
//       const itemDetails = response.data;

//       // Populate the input fields with item details
//       setItem({
//         itemId: itemDetails.itemId,
//         itemCategory: itemDetails.itemCategory,
//         itemDescription: itemDetails.itemDescription,
//         itemValue: itemDetails.itemValue,
//         issueStatus: itemDetails.issueStatus,
//         itemMake: itemDetails.itemMake,
//       });
//     } catch (error) {
//       console.error('Error fetching item details:', error);
//     }
//   };

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setItem({ ...item, [name]: value });
//   };

//   // Handle the "Update Item" button click
//   const handleUpdateItem = () => {
//     // Send a PUT request to update the item details
//     axios('http://localhost:8080/updateItem', item)
//       .then((response) => {
//         console.log('Item updated successfully:', response.data);
//         // Redirect to the item list page or another appropriate page
//       })
//       .catch((error) => {
//         console.error('Error updating item:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Edit Item</h2>
//       <form>
//         <div>
//           <label>Item ID:</label>
//           <input
//             type="text"
//             name="itemId"
//             value={item.itemId}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Item Category:</label>
//           <input
//             type="text"
//             name="itemCategory"
//             value={item.itemCategory}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Item Description:</label>
//           <input
//             type="text"
//             name="itemDescription"
//             value={item.itemDescription}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Item Value:</label>
//           <input
//             type="text"
//             name="itemValue"
//             value={item.itemValue}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Issue Status:</label>
//           <input
//             type="text"
//             name="issueStatus"
//             value={item.issueStatus}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Item Make:</label>
//           <input
//             type="text"
//             name="itemMake"
//             value={item.itemMake}
//             onChange={handleInputChange}
//           />
//         </div>
//         <button type="button" onClick={handleUpdateItem}>
//           Update Item
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AdminEditItem;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';

export default function AdminEditItem({ match }) {
  const param = useParams();
  const [item, setItem] = useState({
    itemId: '',
    itemCategory: '',
    itemDescription: '',
    itemValuation: '',
    itemStatus: '',
    itemMake: '',
  });
  const [id,setId]=useState(param.id);
  const baseURL = "http://localhost:8080/item/";

  useEffect(() => {
    // Fetch item details based on itemId from the backend
    axios.get(baseURL+id)
      .then((response) => {
        console.log("response data is",response.data)
        setItem(response.data); // Set the item state with fetched data
      })
      .catch((error) => {
        console.error('Error fetching item details:', error);
      });
  }, []);


    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };
  const handleEditItem = (e) => {
    e.preventDefault();
    // Send a PUT request to update the item
    axios.put(baseURL+id,{
        itemId: item.itemId,
        itemCategory: item.itemCategory,
        itemDescription:  item.itemDescription,
        itemValuation:  item.itemValuation,
        itemStatus:  item.itemStatus,
        itemMake: item.itemMake,
    } )
      .then((response) => {
        window.location.href = '/Admin/ItemList';
        console.log('Item updated successfully:', response.data);
        // Redirect to the item list page or do other actions
      })
      .catch((error) => {
        console.error('Error updating item:', error);
      });
  };

  return (
    <div>
      <h2>Admin Edit Item</h2>
      <form>
        <div>
          <label>Item ID:</label>
          <input
            type="text"
            name="itemId"
            value={item.itemId}
            onChange={handleInputChange}
            readOnly // Prevent editing the item ID
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
          <label>Item Valuation:</label>
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
        <button type="button" onClick={handleEditItem}>
          Edit Item
        </button>
      </form>
    </div>
  );
}
