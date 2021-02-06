import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Hero from '../../Hero/Hero.js';
import Search from '../../Search/Search.js';
import Footer from '../../Footer/Footer.js';
import bestMoviesImage from '../../../images/best_movies.jpg';
import recomendationsImage from '../../../images/recomendations2.jpg';
import top3Image from '../../../images/top3.jpg';
import HomeButton from '../../common/buttons/HomeButton.js';
// import {}
import './Home.scss';

const Home = () => {
  const [searchResult, setSearchResult] = useState(null);
  const dispatch = useDispatch();

  const handleSearch = (data) => {
    dispatch(data);
  };

  return (
    <section className='home-container'>
      <Hero />
      <Search onSearch={handleSearch} />
      <section className='home-main-section1'>
        <h1>Don't know what to watch?</h1>
        <h1>Check what people like the most</h1>
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
        <div className='home-button'>
          <HomeButton className='home-button' buttonStyle='secondary' buttonSize='lg'>
            Show me
          </HomeButton>
        </div>
      </section>
      <section className='home-main-section2'>
        <h1>Want to share your preferences? </h1>
        <div className='home-button'>
          <HomeButton buttonStyle='secondary' buttonSize='lg'>
            Lets try
          </HomeButton>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Home;
