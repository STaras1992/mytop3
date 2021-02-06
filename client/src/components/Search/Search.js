import React, { useState, useEffect } from 'react';
import poster from '../../images/poster2.jpg';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { MOVIE, TV_SHOW } from '../../consts/genres.js';
import './Search.scss';

const options = [
  { value: MOVIE, label: 'Movie' },
  { value: TV_SHOW, label: 'TV Show' },
];

const Search = ({ onSearch }) => {
  const [searchTitle, setSearchTitle] = useState({});
  const [searchGenre, setSearchGenre] = useState({});

  const handleTitleChange = (selectedOption) => {
    setSearchTitle(selectedOption.value);
  };

  const handleGenreChange = (selectedOption) => {
    setSearchTitle(selectedOption.value);
  };

  const handleSearch = () => {
    onSearch({ title: searchTitle, genre: searchGenre });
  };

  return (
    <section className='search-container'>
      <div className='search-panel'>
        <div>
          <input
            className='search-input'
            name='title'
            value={searchTitle}
            id='searchInput'
            type='text'
            placeholder='Search'
            onChange={handleTitleChange}
          ></input>
        </div>
        <div>
          <Select value={searchGenre} options={options} onChange={handleGenreChange}></Select>
          {/* <select className='genre-select' name='genre' id='searchGenreSelect' type='text' placeholder='Genre'>
            <option value='movies'>Movies</option>
            <option value='series'>Series</option>
          </select> */}
        </div>
        <button className='search-button' onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className='info-container'>
        <div className='info-poster'>
          <img src={poster} alt='poster'></img>
        </div>
        <div className='info-details-container'>
          <p className='details-description'>Film about ...</p>
          <div className='details-other'>
            <p className='details-other-genre'>Genre:</p>
            <p className='details-other-release'>Release date:</p>
            <p className='details-other-time'>Run time:</p>
            <p className='details-other-rating'>Rating:</p>
          </div>
        </div>
      </div>
    </section>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
