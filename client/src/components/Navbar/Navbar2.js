import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Navbar2.scss';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); //TODO selector

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='navbar-left'>
            <Link to='/' className='navbar-logo' onClick={closeMenu}>
              <i class='fab fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleMenuClick}>
              <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-link' onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-link' onClick={closeMenu}>
                  Movies
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-link' onClick={closeMenu}>
                  TV shows
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-link' onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-link mobile' onClick={closeMenu}>
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          <div className='navbar-right'>
            {showSignIn && <button className='navbar-button'>{isLoggedIn ? 'LOGOUT' : 'SIGN IN'}</button>}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
