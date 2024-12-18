'use client'
import React, { useState } from "react";
import Link from "next/link";

function NewNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="main-nav">
      <div className="navbar-logo ">
        <img src="./images/orn-logo.png" alt="logo" className="" />
      </div>
      <div className="navbar-container">
        {/* Logo Section */}

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li className="navbar-item">
            <a href="/" className="navbar-link">
              Home
            </a>
          </li>

          <li
            className="navbar-item navbar-dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <a
              href="#"
              className="navbar-link"
              onClick={(e) => {
                e.preventDefault(); // Prevent default navigation
                toggleDropdown();
              }}
            >
              Courses <i className="fas fa-chevron-down"></i>
            </a>
            {/* Dropdown Menu */}
            <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
              <li>
                <Link href="/courses">All Courses</Link>
              </li>
              <li>
                <Link href="/my-courses">My Course Details</Link>
              </li>
            </ul>
          </li>
          <li className="navbar-item">
            <a href="/groomingplans" className="navbar-link">
              Grooming Plans
            </a>
          </li>
          <li className="navbar-item">
            <a href="/Franchise" className="navbar-link">
              Franchise
            </a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">
              About Us
            </a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* Buttons Section */}
      <div className="navbar-buttons">
        {/* <button className="navbar-button login-button">Login</button> */}
        <button className="navbar-button register-button">
          Register | Login
        </button>
      </div>
    </div>
  );
}

export default NewNavbar;
