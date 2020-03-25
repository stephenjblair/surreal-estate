import React from 'react';
import '../Navbar.css';
import house from '../house.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav">
        <li className="logo">
          <img src={house} alt="house logo" height="50px" width="50px" />
        </li>
        <span className="logo-title">SURREAL ESTATE</span>
        <li className="item">View Properties</li>
        <li className="item">Add a Property</li>
      </ul>
    </div>
  );
};

export default Navbar;
