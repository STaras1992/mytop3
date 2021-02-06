import React, { useState, useEffect } from 'react';
import './Hero.scss';
const Hero = () => {
  return (
    <section className='hero-container'>
      <div className='hero-content'>
        <h1>Find what to watch</h1>
        <h1>and</h1>
        <h1>Share your expirience with others</h1>
        <h1 className='hero-content-brand-name'>MyTop3</h1>
      </div>
    </section>
  );
};

export default Hero;
