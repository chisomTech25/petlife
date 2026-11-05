import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <span className="logo-icon">🐾</span>
              <span className="logo-text">PetLife</span>
            </div>
            <p className="footer-desc">
              Your one-stop platform for everything about pets. Discover, learn, care, and adopt.
            </p>
            <p className="footer-tagline">Because every animal matters 🐾</p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/animals">Animals</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/care-guides">Care Guides</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>More</h4>
            <ul>
              <li><Link to="/adoption">Adoption</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
  <h4>Contact Info</h4>
  <ul>
    <li>📞 +234 913 422 2588</li>
    <li>💬 Available on WhatsApp & Telegram</li>
    <li>✉️ chisomtech25@gmail.com</li>
    <li>📍 Area 3 Garki, Abuja, Nigeria</li>
    <li>🕐 Mon - Sat: 8am - 6pm</li>
  </ul>
</div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 PetLife. All rights reserved.</p>
          <div className="footer-socials">
            <span>📘</span>
            <span>🐦</span>
            <span>📷</span>
            <span>▶️</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;