// src/components/ItemDetails.js
import React from 'react';
import '../styles/ItemDetails.css';
const ItemDetails = ({ itemId }) => {
  return (
    <div className="item-details">
      <h2>Item Details</h2>
      <p>Details for item ID: {itemId}</p>
      {/* More item details can be displayed here */}
    </div>
  );
};

export default ItemDetails;
