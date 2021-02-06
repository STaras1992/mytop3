import React from 'react';
import './HomeButton.scss';
import { Link } from 'react-router-dom';

const STYLES = ['primary', 'secondary'];

const SIZES = ['sm', 'md', 'lg', 'xl'];

export const HomeButton = ({ children, type, href, onClick, buttonStyle, buttonSize }) => {
  const style = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const size = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={href} className='btn-link'>
      <button className={`btn ${style} ${size}`} onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  );
};

export default HomeButton;
