// Sidebar.js
import React from 'react';
import './Sidebar.js';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
      <h3>Acmy Solutions</h3>
      </div>
     
      <div className="sidebar-menu">
        <div className="sidebar-item">
          <span className="icon"></span>
          <span>Dashboard</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
