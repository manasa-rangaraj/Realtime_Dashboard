import React from 'react';
import './App.css';

function Sidebar() {
  return (
    <div className="sidebar" data-color="purple" data-background-color="white" data-image="assets/img/sidebar-1.jpg">
      <div className="logo"><a className="simple-text logo-normal">Stock Market</a></div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li className="nav-item active  ">
            <a className="nav-link" href="./dashboard.html">
              <i className="material-icons">dashboard</i>
              <p>Dashboard</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="./user.html">
              <i className="material-icons">person</i>
              <p>User Profile</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="./tables.html">
              <i className="material-icons">content_paste</i>
              <p>Trade</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="./notifications.html">
              <i className="material-icons">notifications</i>
              <p>Notifications</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
      
  );
}

export default Sidebar;
