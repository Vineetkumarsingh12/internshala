import React from 'react';
import './navbar.css'; // Import the CSS file here
import { FaMagnifyingGlass } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='nav '>
      {/* Search bar, links */}
      <div className="search-container"> {/* Change 'class' to 'className' */}
       
        < FaMagnifyingGlass className="search-icon" />
        <input type="text" placeholder="Search..." />
      </div>
        <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            </div>
    </div>
  );
}

export default Navbar;
