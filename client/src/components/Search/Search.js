import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import poster from '../../images/poster2.jpg';
import PropTypes from 'prop-types';
import MyButton from '../common/buttons/MyButton.js';
import MySelect from '../common/select/MySelect.js';
import AutocompleteSelect from '../common/select/AutocompleteSelect.js';
import { MOVIE, TV_SHOW, ALL } from '../../consts/genres.js';
import { getAutocompleteSuggestions } from '../../api/api.js';
import WatchButton from '../common/buttons/WatchButton.js';
import './Search.scss';

const options = [
  { value: MOVIE, label: 'Movie' },
  { value: TV_SHOW, label: 'TV Show' },
  { value: ALL, label: 'All' },
];

const defaultSearchOption = { value: '-1', label: '' };

const Search = ({ onSearch }) => {
  const dispatch = useDispatch();
  const [searchTitle, setSearchTitle] = useState('');
  const [searchGenre, setSearchGenre] = useState(options[2]);
  const [suggestions, setSuggestions] = useState([]);
  const [searchOptionSelected, setSearchOptionSelected] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const availableGenres = useSelector((state) => state.info.genres);
  const popularMovies = useSelector((state) => state.info.popularMovies);
  const [movieData, setMovieData] = useState({ poster: null, overview: '', genres: '', release: '', rating: '' });

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
    if (!searchOptionSelected) return;
    const selectedOption = suggestions.find((suggestion) => suggestion.id === searchOptionSelected.value);
    if (!selectedOption) return;

    acceptOption(selectedOption);
  };

  const acceptOption = (selectedOption) => {
    const title = `${selectedOption.title} / ${selectedOption.originalTitle}`;
    const genres = selectedOption.genre_ids
      .map((id) => {
        console.log('available:', availableGenres);
        console.log('id:', id);
        const genre = availableGenres.find((genre) => id === genre.id);
        console.log(genre);
        return genre.name;
      })
      .join(', ');
    const rating = `${selectedOption.rating} (${selectedOption.votes})`;
    setMovieData({
      title: title,
      poster: selectedOption.poster,
      back: selectedOption.backPoster,
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

  /*Initialize default data with most popular movie*/
  useEffect(() => {
    if (popularMovies.length > 0 && availableGenres.length > 0) acceptOption(popularMovies[0]);
  }, [popularMovies, availableGenres]);

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
          <div className='info-details'>
            <h3 className='details-title'>{movieData.title}</h3>
            <p className='details-overview'>{movieData.overview}</p>
            <div className='details-other'>
              <p className='details-other-genre'>
                <span className='row-title'>Genre:</span> {movieData.genre}
              </p>
              <p className='details-other-release'>
                <span className='row-title'>Release date:</span> {movieData.release}
              </p>
              {/* <p className='details-other-time'>{movieData.time}</p> */}
              <p className='details-other-rating'>
                <span className='row-title'>Rating:</span> {movieData.rating}
              </p>
            </div>
          </div>
          <div className='info-trailer'>
            <WatchButton />
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
