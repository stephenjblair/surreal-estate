import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link className="item" to="/Properties">
          View Properties
        </Link>
        <Link className="item" to="/AddProperty">
          Add a Property
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
