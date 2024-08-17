import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => (
  <footer>
    <ul>
      <li><Link to="/privacy-policy">Privacy Policy</Link></li>
      <li><Link to="/refund-policy">Refund Policy</Link></li>
      <li><Link to="/website-policy">Website Policy</Link></li>
      <li><Link to="/contact-us">Contact Us</Link></li>
      <li><Link to="/products">Products</Link></li>
      <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">Careers</a></li>
      <li><Link to="/rentals">Rentals</Link></li>
    </ul>
    <div className="social-icons">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  </footer>
);

export default Footer;
