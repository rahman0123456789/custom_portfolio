// components/Navbar.js
"use client";
import React, { useState } from "react";
import Link from "next/link";
import '../styles/navbar.css';
import '../page.module.css'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>My Website</h1>
        </div>

        {/* Desktop Navbar Links */}
        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <Link href="/" className="navbar-link">
            Home
          </Link>
          <Link href="/about" className="navbar-link">
            About
          </Link>
          <Link href="/services" className="navbar-link">
            Services
          </Link>
          <Link href="/contact" className="navbar-link">
            Contact
          </Link>
          <a href="/cv.pdf" target="_blank" className="navbar-btn">
            Download CV
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="navbar-mobile-icon" onClick={toggleMenu}>
          {menuOpen ? "X" : "☰"}
        </div>
      </div>

      {/* Mobile Menu Links */}
      {menuOpen && (
        <div className="navbar-mobile-menu">
          <Link href="/" className="navbar-mobile-link">
            Home
          </Link>
          <Link href="/about" className="navbar-mobile-link">
            About
          </Link>
          <Link href="/services" className="navbar-mobile-link">
            Services
          </Link>
          <Link href="/contact" className="navbar-mobile-link">
            Contact
          </Link>
          <a href="/cv.pdf" target="_blank" className="navbar-btn">
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
