import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import soonImage from '../../../images/lg/man_popcorn_lg.jpg';
import './ComingSoon.scss';

const ComingSoon = () => {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <section className='comingSoon'>
      <div className='comingSoon-container'>
        <div className='comingSoon-container__content'>
          <h1 className='comingSoon__title'>Coming soon...</h1>
          <p className='comingSoon__text'>
            Thank you for visiting us.We working on it and content will available soon.
            <br />
            Do not waste your time!
            <br />
            <span className='comingSoon__text comingSoon__text_red'>Watch some movie</span>
          </p>
          <div className='comingSoon__image'>
            <img src={soonImage} alt='coming soon'></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
