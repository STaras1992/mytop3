import React from 'react';
import './About.scss';
const About = () => {
  return (
    <section className='about'>
      <div className='about-container'>
        <div className='about-container__content'>
          <h1 className='about__title'>About MyTop3...</h1>
          <p className='about__text'>
            We try to make peaple share they movie and tv shows experience with others. Build ratings and top lists
            according to peaple recommendations and votings. Follow us and you you will never be bored again...
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
