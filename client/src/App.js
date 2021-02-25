import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { fetchAvailableGenres, fetchMostPopularMovies } from './redux/actions/infoActions.js';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/pages/Home/Home.js';
import About from './components/pages/About/About.js';
import Footer from './components/Footer/Footer.js';
import ComingSoon from './components/pages/ComingSoon/ComingSoon.js';

const App = () => {
  const dispatch = useDispatch();

  //initialize store with required data
  useEffect(() => {
    dispatch(fetchAvailableGenres());
    dispatch(fetchMostPopularMovies());
  }, []);

  return (
    <div className='app'>
      <div className='app-container'>
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/about' render={() => <About />} />
          <Route exact path='/movies' render={() => <ComingSoon />} />
          <Route exact path='/tv' render={() => <ComingSoon />} />
          <Route exact path='/signup' render={() => <ComingSoon />} />
          <Route exact path='/login' render={() => <ComingSoon />} />
          <Route exact path='/share' render={() => <ComingSoon />} />
          <Route exact path='/recommendations' render={() => <ComingSoon />} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
};

export default App;
