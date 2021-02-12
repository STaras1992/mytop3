import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Hero from '../../Hero/Hero.js';
import Search from '../../Search/Search.js';
import Footer from '../../Footer/Footer.js';
import bestMoviesImage from '../../../images/best_movies.jpg';
import recomendationsImage from '../../../images/recomendations2.jpg';
import top3Image from '../../../images/top3.jpg';
import MyButton from '../../common/buttons/MyButton.js';
import { searchRequest } from '../../../redux/actions/searchActions.js';
import './Home.scss';

const Home = () => {
  const [searchResult, setSearchResult] = useState(null);
  const dispatch = useDispatch();

  const handleSearch = (data) => {
    dispatch(searchRequest(data));
  };

  return (
    <section className='home-container'>
      <Hero />
      <Search onSearch={handleSearch} />
      <section className='home-main-top-section'>
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
          <MyButton className='home-button' buttonStyle='secondary' buttonSize='lg'>
            Show me
          </MyButton>
        </div>
      </section>
      <section className='home-main-bottom-section'>
        {/* <div className='home-main-guru' style></div> */}
        <h1>Want to share your preferences? </h1>
        <div className='home-button'>
          <MyButton buttonStyle='secondary' buttonSize='lg'>
            Lets try
          </MyButton>
        </div>
      </section>
      <section className='home-main-quote'>
        <p>"I don't try to guess what a million people will like. It's hard enough to know what I like."</p>
        <cite>-John Huston</cite>
      </section>
      <Footer />
    </section>
  );
};

export default Home;
