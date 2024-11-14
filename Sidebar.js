// src/components/Sidebar.js
import React from 'react';
import '../styles/Sidebar.css';
const Sidebar = ({ setCurrentPage }) => {
  return (
    <aside className="sidebar">
      <h2>Navigation</h2>
      <ul>
        <li onClick={() => setCurrentPage('home')}>Home</li>
        <li onClick={() => setCurrentPage('inventory')}>Inventory</li>
        <li onClick={() => setCurrentPage('addItem')}>Add Item</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
