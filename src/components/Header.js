import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Rhyno.png'; 
import '../styles/Header.css'

const Header = () => (
  <header>
    <div className="logo-container">
      <img src={logo} alt="RHYNO EV Logo" className="logo" />
    </div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li>
          <Link to="/products">Products</Link>
          <ul className="dropdown">
            <li><Link to="/product/se03-lite">SE03 Lite</Link></li>
            <li><Link to="/product/se03">SE03</Link></li>
            <li><Link to="/product/se03-max">SE03 Max</Link></li>
            <li><Link to="/compare-all">Compare All</Link></li>
          </ul>
        </li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li><Link to="/pre-book-now">Pre-Book Now</Link></li>
      </ul>
    </nav>
    <div className="social-icons">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  </header>
);

export default Header;
