// src/components/EditItem.js
import React, { useState } from 'react';
import '../styles/EditItem.css';
const EditItem = ({ itemId }) => {
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Edit item logic here
    alert(`Item edited: ${itemName}`);
    setItemName('');
  };

  return (
    <div className="edit-item">
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={itemName} 
          onChange={(e) => setItemName(e.target.value)} 
          placeholder={`Edit item name (ID: ${itemId})`} 
          required 
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditItem;
