import React from 'react';
import { Link } from 'react-router-dom';
import '../Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Lung Cancer Detection</h1>
      <nav className="header-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/upload" className="nav-link">Upload</Link>
        <Link to="/login" className="nav-link">Login</Link> {/* Add Login link */}
      </nav>
    </header>
  );
};

export default Header