import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>&copy; {currentYear} Poonam Kashide. All Rights Reserved.</p>
      </div>
    </footer>
  );
}