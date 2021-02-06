import React, { useState, useEffect } from 'react';
import poster from '../../images/poster2.jpg';
import PropTypes from 'prop-types';
import Select from 'react-select';
import MySelect from '../common/select/MySelect.js';
import { MOVIE, TV_SHOW, ALL } from '../../consts/genres.js';
import { getAutocompleteSuggestions } from '../../api/api.js';
import './Search.scss';

const options = [
  { value: MOVIE, label: 'Movie' },
  { value: TV_SHOW, label: 'TV Show' },
  { value: ALL, label: 'All' },
];

const Search = ({ onSearch }) => {
  const [searchTitle, setSearchTitle] = useState('');
  const [searchGenre, setSearchGenre] = useState(options[2]);
  const [lastLetterPressedTime, setLastLetterPressedTime] = useState(Date.now()); //settimeout
  const [suggestions, setSuggestions] = useState([]);

  const handleTitleChange = (e) => {
    setSearchTitle(e.target.value);
  };

  const handleGenreChange = (selectedOption) => {
    setSearchGenre(selectedOption);
  };

  const handleSearch = () => {
    onSearch({ title: searchTitle, genre: searchGenre.value });
  };

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const result = await getAutocompleteSuggestions(searchTitle, searchGenre.value);
        if (result && result.data.suggestions.length > 0) {
          console.log(result.data.suggestions);
          setSuggestions(result.data.suggestions);
        } else setSuggestions([]);
      } catch (err) {
        setSuggestions([]);
      }
    };
    fetchSuggestions();
  }, [searchTitle]);

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
        <div className='search-select'>
          <MySelect value={searchGenre} name='search-genre' options={options} onChange={handleGenreChange} />
          {/* <Select value={searchGenre} defaultValue={options[0]} options={options} onChange={handleGenreChange}></Select> */}
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
