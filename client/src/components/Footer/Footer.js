import React from 'react';
import logo from '../../images/logo2.svg';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  return (
    <section className='footer'>
      <div className='footer-container'>
        <div className='footer-content'>
          <div className='footer-left'>
            <div className='footer-logo'>
              <img src={logo} alt='logo' />
            </div>
            {/* <p>About</p> */}
            <p>Contact us:</p>
            <div className='footer-social-container'>
              <Link to='#'>
                <i className='fab fa-linkedin'></i>
              </Link>
              <Link to='#'>
                <i className='fab fa-github-square'></i>
              </Link>
              <Link to='#'>
                <i className='fas fa-envelope-square'></i>
              </Link>
            </div>
          </div>
          {/* <div className='footer-right'>
            <p>"I don't try to guess what a million people will like. It's hard enough to know what I like."</p>
            <cite>-John Huston</cite>
          </div> */}
        </div>
        <div className='footer-copyright'>
          <p>Copyright@2021 MyTop3, Stas Tarasenko</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
