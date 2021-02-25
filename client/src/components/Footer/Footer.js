import React from 'react';
import logo from '../../images/logo2.svg';
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
            <p>Contact us:</p>
            <div className='footer-social-container'>
              <a href='https://www.linkedin.com/in/staras1992/' rel='noopener noreferrer' target='_blank'>
                <i className='fab fa-linkedin'></i>
              </a>
              <a href='https://github.com/STaras1992' rel='noopener noreferrer' target='_blank'>
                <i className='fab fa-github-square'></i>
              </a>
              <a href='mailto:starasp1992@gmail.com'>
                <i className='fas fa-envelope-square'></i>
              </a>
            </div>
          </div>
        </div>
        <div className='footer-copyright'>
          <p>Copyright@2021 MyTop3, Stas Tarasenko</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
