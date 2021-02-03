import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Navbar.scss';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => setMenuOpen(!menuOpen);
  const closeMobileMenu = () => setMenuOpen(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setShowSignIn(false);
    } else {
      setShowSignIn(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            {/* <i class='fab fa-typo3' /> */}
            <img src={logo} alt='LOGO' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                Movies
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                TV shows
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to='/' className='nav-link-mobile' onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {showSignIn && (
            <Link to='/' className='navbar-log-button'>
              {isLoggedIn ? 'LOGOUT' : 'LOGIN'}
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../images/logo.svg';
// import './Navbar.scss';

// const Navbar = () => {
//   const [collapsed, setCollapsed] = useState(true);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleMenuClick = () => {
//     console.log(menuOpen);
//     setMenuOpen(!menuOpen);
//   };

//   //   window.addEventListener('resize', isLoggedIn);

//   return (
//     <nav className='navbar'>
//       <div className='navbar-container'>
//         <Link to='/' className='navbar-logo'>
//           <img src={logo} alt='LOGO' />
//         </Link>
//         <div className='navbar-menu-icon' onClick={handleMenuClick}>
//           <i className='fas fa-bars'></i>
//         </div>
//         {/* <div className='nav'> */}
//         <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
//           <li className='nav-item'>
//             <Link className='nav-links' to='/'>
//               Home
//             </Link>
//           </li>
//           <li className='nav-item'>
//             <Link className='nav-links' to='/'>
//               Movies
//             </Link>
//           </li>
//           <li className='nav-item'>
//             <Link className='nav-links' to='/'>
//               TV show
//             </Link>
//           </li>
//           <li className='nav-item'>
//             <Link className='nav-links' to='/'>
//               About
//             </Link>
//           </li>
//           <li className='nav-item mobile'>
//             <Link className='nav-links' to='/'>
//               Sign in
//             </Link>
//           </li>
//         </ul>
//         <div className='nav-sign'>
//           {isLoggedIn ? (
//             <button>
//               <i className='fas user-circle'></i>
//             </button>
//           ) : (
//             <div>
//               <Link to='/'>Sign in</Link>
//               <Link to='/'>Sign up</Link>
//             </div>
//           )}
//         </div>
//       </div>
//       {/* </div> */}
//     </nav>
//   );
// };

// export default Navbar;
