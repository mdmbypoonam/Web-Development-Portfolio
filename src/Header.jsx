import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo/Brand */}
        <a href="index.html" className="navbar-brand">
          Poonam Kashide
        </a>

        {/* Navigation Links */}
        <nav className="main-navigation" aria-label="Main Navigation">
          {/* Call to Action Button */}
          <a href="mailto:poonamkashide7@gmail.com" className="navbar-cta">
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}