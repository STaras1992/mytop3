import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Hero from '../../Hero/Hero.js';
import Search from '../../Search/Search.js';
import Footer from '../../Footer/Footer.js';
import { Link } from 'react-router-dom';
import bestMoviesImage from '../../../images/best_movies.jpg';
import recomendationsImage from '../../../images/recomendations2.jpg';
import top3Image from '../../../images/top3.jpg';
import MyButton from '../../common/buttons/MyButton.js';
import LiqButton from '../../common/buttons/LiquidButton.js';
import { searchRequest } from '../../../redux/actions/searchActions.js';
import guruImageFull from '../../../images/guru.jpg';
import guruImage from '../../../images/guru2.jpg';
import guruImageTr from '../../../images/guru-transparent.png';
import './Home.scss';

const Home = () => {
  return (
    <section className='home'>
      <div className='home-container'>
        <Hero />
        <Search />
        <div className='section-wrapper'>
          <section className='home-main-top-section'>
            <h1>
              Don't know what to watch?
              <br />
              Check what people like the most
            </h1>
            {/* <h1>Check what people like the most</h1> */}
            <div className='main-elements'>
              <div className='main-element'>
                <img className='element-icon-image' src={bestMoviesImage} alt='best movies' />
                <p>Top rated movies/series by genre</p>
              </div>
              <div className='main-element'>
                <img className='element-icon-image' src={recomendationsImage} alt='recomendations' />
                <p>Top recommendations by different categories and topics</p>
              </div>
              <div className='main-element'>
                <img className='element-icon-image' src={top3Image} alt='top 3' />
                <p>Review people top 3 lists and rate them if you like</p>
              </div>
            </div>
            <div className='show-button'>
              <Link to='/recommendations'>
                <LiqButton text='Show me' buttonStyle='style-4' />
              </Link>
            </div>
          </section>
        </div>
        <div className='section-wrapper'>
          <section className='home-main-bottom-section'>
            <div className='guru-description guru-description_mobile'>
              <p>Think you are movie guru?</p>
            </div>
            <div className='home-main-guru'>
              <div className='guru-description'>
                <p>Think you are movie guru?</p>
                <p>Share your experience with others...</p>
              </div>
              <div className='guru-button'>
                <Link to='/share'>
                  <LiqButton text='Lets try' buttonStyle='style-5' />
                </Link>
              </div>
            </div>
            <div className='guru-description guru-description_mobile'>
              {/* <p>Think you are movie guru?</p> */}
              <p>Share your experience with others...</p>
            </div>
            <div className='guru-button guru-button_mobile'>
              <Link to='/share'>
                <LiqButton text='Lets try' buttonStyle='style-5' />
              </Link>
            </div>
          </section>
        </div>
        <div className='section-wrapper'>
          <section className='home-main-quote'>
            <p>"I don't try to guess what a million people will like. It's hard enough to know what I like."</p>
            <cite>-John Huston</cite>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Home;
