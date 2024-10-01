import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';
import LogoNoBg from '../images/logoandname.png';

function Navbar() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('home'); // Default active item

  const handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem('id_token');
    navigate('/');
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="navbar">
      {/* <img src={LogoNoBg} alt="Logo" className="navbar-logo" /> */}
      <ul className="nav-list">
        <li className={`nav-item ${activeItem === 'home' ? 'active' : ''}`}>
          <Link to="/" onClick={() => handleItemClick('home')}>Home</Link>
        </li>
        <li className={`nav-item ${activeItem === 'accounts' ? 'active' : ''}`}>
          <Link to="/accounts" onClick={() => handleItemClick('accounts')}>Accounts</Link>
        </li>
        <li className={`nav-item ${activeItem === 'tracker' ? 'active' : ''}`}>
          <Link to="/tracker" onClick={() => handleItemClick('tracker')}>Tracker</Link>
        </li>
        <li className={`nav-item ${activeItem === 'team' ? 'active' : ''}`}>
          <Link to="/team" onClick={() => handleItemClick('team')}>Meet The Team</Link>
        </li>
      </ul>
      <div className="account-info"></div>
      <div className="nav-item logout-button">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
