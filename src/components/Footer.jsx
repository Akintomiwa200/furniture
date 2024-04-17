import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Learn more about our company and our mission.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Stay connected with us on social media.</p>
          {/* Add social media icons/links here */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Furniture Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
