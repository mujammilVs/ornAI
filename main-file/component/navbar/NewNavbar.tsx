'use client';
import React, { useState } from "react";
import Link from "next/link";
import AuthPopup from "../loginpopup/Loginpopup";

function NewNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleAuthPopup = () => {
    setIsAuthPopupOpen(!isAuthPopupOpen);
  };

  const closeAuthPopup = () => {
    setIsAuthPopupOpen(false);
  };

  return (
    <div className="main-nav">
      <div className="navbar-logo">
        <img src="./images/orn-logo.png" alt="logo" className="" />
      </div>
      <div className="navbar-container">
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
                e.preventDefault();
                toggleDropdown();
              }}
            >
              Courses <i className="fas fa-chevron-down"></i>
            </a>
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
        <button
          className="navbar-button register-button"
          onClick={toggleAuthPopup}
        >
          Register | Login
        </button>
      </div>
      {/* Auth Popup */}
      {isAuthPopupOpen && <AuthPopup closePopup={closeAuthPopup} />}
    </div>
  );
}

export default NewNavbar;

