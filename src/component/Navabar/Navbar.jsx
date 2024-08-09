import React, { useState } from "react";
import { Link } from "react-router-dom";
import carImage from "/images/car.png"; 
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ toggle }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (
      <nav className="nav">
        <Link to="/" className="logo">
          ROADRUNNER HOME
        </Link>
        <div
          className="car-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/">
            <img
              src={carImage}
              alt="Car"
              className={`car-image ${isHovered ? "hovered" : ""}`}
            />
          </Link>
          <div className={`navbar-items ${isHovered ? "hovered" : ""}`}>
            <Link to="/" className="nav-menu-links">
              Home
            </Link>
            <Link to="/shop" className="nav-menu-links">
              Shop
            </Link>
            <Link to="/about" className="nav-menu-links">
              About
            </Link>
            <Link to="/contact" className="nav-menu-links">
              Contact
            </Link>
          </div>
        </div>
        {/* <FaBars className="menu-icon" onClick={toggle} /> */}
      </nav>
    );
  };
  
  export default Navbar;
