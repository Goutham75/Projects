// src/components/InventoryList.js
import React, { useState } from 'react';
import '../styles/InventoryList.css';

const InventoryList = ({ setSelectedItemId, setCurrentPage }) => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
  ]);

  const handleEdit = (id) => {
    setSelectedItemId(id);
    setCurrentPage('editItem');
  };

  const handleDetails = (id) => {
    setSelectedItemId(id);
    setCurrentPage('itemDetails');
  };

  return (
    <div className="inventory-list">
      <h2>Inventory List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleEdit(item.id)}>Edit</button>
            <button onClick={() => handleDetails(item.id)}>Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
