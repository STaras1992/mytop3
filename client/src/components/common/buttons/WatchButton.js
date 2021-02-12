import React from 'react';
import './WatchButton.scss';
const WatchButton = () => {
  return (
    <div id='container'>
      <button className='watch-trailer'>
        <span className='circle' aria-hidden='true'>
          <span className='icon arrow'></span>
        </span>
        <span className='button-text'>Watch trailer</span>
      </button>
    </div>
  );
};

export default WatchButton;
