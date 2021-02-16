import React from 'react';
import './SlideButton.scss';
const SlideButton = ({ onClick, ...props }) => {
  return (
    <div id='container'>
      <button onClick={onClick} {...props} className='slide-btn'>
        <span className='circle' aria-hidden='true'>
          <span className='icon arrow'></span>
        </span>
        <span className='button-text'>Watch trailer</span>
      </button>
    </div>
  );
};

export default SlideButton;
