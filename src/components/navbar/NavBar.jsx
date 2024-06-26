// NavBar.jsx
import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo"><img src="Logo.png" alt="" /></div>
        <ul className={`nav-links ${navActive ? 'active' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
        <div className="burger" onClick={toggleNav}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
