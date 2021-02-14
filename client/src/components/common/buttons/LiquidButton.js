import React from 'react';
import './LiquidButton.scss';

const STYLES = ['style-1', 'style-2', 'style-3', 'style-4', 'style-5', 'style-6'];

const LiquidButton = ({ text, buttonStyle, ...props }) => {
  const style = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  return (
    <div className={`liq-btn ${style}`}>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <span>{text}</span>
    </div>
  );
};

export default LiquidButton;
