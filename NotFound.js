// src/components/NotFound.js
import React from 'react';
//mport './Sidebar.css';
import '../styles/NotFound.css';
const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
