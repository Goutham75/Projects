// src/components/AddItem.js
import React, { useState } from 'react';
import '../styles/AddItem.css';

function AddItem() {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    // Handle the add item logic here
    console.log(`Item: ${itemName}, Quantity: ${quantity}`);
    setItemName('');
    setQuantity('');
  };

  return (
    <div className="add-item">
      <h2>Add New Item</h2>
      <form onSubmit={handleAddItem}>
        <label>
          Item Name:
          <input 
            type="text" 
            value={itemName} 
            onChange={(e) => setItemName(e.target.value)} 
            required 
          />
        </label>
        <label>
          Quantity:
          <input 
            type="number" 
            value={quantity} 
            onChange={(e) => setQuantity(e.target.value)} 
            required 
          />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddItem;
