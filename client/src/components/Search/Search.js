import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import poster from '../../images/poster2.jpg';
import PropTypes from 'prop-types';
import MyButton from '../common/buttons/MyButton.js';
import MySelect from '../common/select/MySelect.js';
import AutocompleteSelect from '../common/select/AutocompleteSelect.js';
import { MOVIE, TV_SHOW, ALL } from '../../consts/genres.js';
import { getAutocompleteSuggestions } from '../../api/api.js';
import './Search.scss';

const options = [
  { value: MOVIE, label: 'Movie' },
  { value: TV_SHOW, label: 'TV Show' },
  { value: ALL, label: 'All' },
];

const defaultSearchOption = { value: '-1', label: '' };

const Search = ({ onSearch }) => {
  const [searchTitle, setSearchTitle] = useState('');
  const [searchGenre, setSearchGenre] = useState(options[2]);
  const [suggestions, setSuggestions] = useState([]);
  const [searchOptionSelected, setSearchOptionSelected] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const availableGenres = useSelector((state) => state.info.genres);

  const [movieData, setMovieData] = useState({ poster: null, overview: '', genres: '', release: '', rating: '' });
  // const [poster, setPoster] = useState(poster);
  // const [description, setDescription] = useState('');
  // const [genres, setGenres] = useState('');
  // const [relea];

  const handleTitleChange = (text) => {
    setSearchTitle(text);
  };

  const handleGenreChange = (selectedOption) => {
    setSearchGenre(selectedOption);
  };

  const handleSearchOptionSelect = (option) => {
    setSearchOptionSelected(option);
  };

  const handleSearch = () => {
    //onSearch({ title: searchTitle, genre: searchGenre.value });
    const selectedOption = suggestions.find((suggestion) => suggestion.id === searchOptionSelected.value);
    console.log('option', selectedOption);
    const genres = selectedOption.genre_ids
      .map((id) => {
        return availableGenres.find((genre) => id === genre.id);
      })
      .join(', ');

    console.log('genres:', genres);
    const rating = `${selectedOption.rating} (${selectedOption.votes})`;

    setMovieData({
      poster: selectedOption.poster,
      overview: selectedOption.overview,
      release: selectedOption.release,
      genre: genres,
      rating: rating,
    });
  };

  const loadSuggestions = async (inputText, callback) => {
    try {
      setIsLoading(true);
      if (!inputText || inputText === '') {
        handleTitleChange(inputText);
        setSuggestions([]);
        setIsLoading(false);
        callback([defaultSearchOption]);
      }
      handleTitleChange(inputText);
      const result = await getAutocompleteSuggestions(inputText, searchGenre.value);
      if (result.data && result.data.suggestions) {
        setSuggestions(result.data.suggestions);
        setIsLoading(false);
        callback(result.data.suggestions.map((suggestion) => ({ value: suggestion.id, label: suggestion.label })));
      } else {
        setIsLoading(false);
        callback([defaultSearchOption]);
      }
    } catch (err) {}
  };

  return (
    <section className='search-container'>
      <div className='search-panel'>
        <div className='search-panel-title'>
          <AutocompleteSelect
            inputValue={searchTitle}
            value={searchOptionSelected}
            name='title'
            getOptionLabel={(option) => option.label}
            getOptionVaue={(option) => option.value}
            isLoading={isLoading}
            loadOptions={loadSuggestions}
            onChange={handleSearchOptionSelect}
            onInputChange={handleTitleChange}
            placeholder='Search...'
            hideSelectedOptions={false}
            loadingMessage={() => 'Searching...'}
            noOptionsMessage={() => 'No results'}
          />
        </div>
        <div className='search-panel-genre'>
          <MySelect value={searchGenre} name='search-genre' options={options} onChange={handleGenreChange} />
        </div>
        <MyButton buttonStyle='primary' buttonSize='sm' onClick={handleSearch}>
          Search
        </MyButton>
      </div>
      <div className='info-container'>
        <div className='info-poster'>
          <img src={movieData.poster} alt='poster'></img>
        </div>
        <div className='info-details-container'>
          <p className='details-overview'>{movieData.overview}</p>
          <div className='details-other'>
            <p className='details-other-genre'>Genre: {movieData.genre}</p>
            <p className='details-other-release'>Release date: {movieData.release}</p>
            {/* <p className='details-other-time'>{movieData.time}</p> */}
            <p className='details-other-rating'>Rating: {movieData.rating}</p>
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
