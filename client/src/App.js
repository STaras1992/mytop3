import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { fetchAvailableGenres, fetchMostPopularMovies } from './redux/actions/infoActions.js';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/pages/Home/Home.js';

const App = () => {
  const dispatch = useDispatch();

  //initialize store with required data
  useEffect(() => {
    dispatch(fetchAvailableGenres());
    dispatch(fetchMostPopularMovies());
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => <Home />} />
      </Switch>
    </div>
  );
};

export default App;
