// src/components/Navbar.js
import React from 'react';
import '../styles/Navbar.css';
const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="navbar">
      <button onClick={() => setCurrentPage('home')}>Home</button>
      <button onClick={() => setCurrentPage('inventory')}>Inventory</button>
      <button onClick={() => setCurrentPage('addItem')}>Add Item</button>
      <button onClick={() => setCurrentPage('login')}>Login</button>
      <button onClick={() => setCurrentPage('signup')}>Signup</button>
    </nav>
  );
};

export default Navbar;
