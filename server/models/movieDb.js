const axios = require('axios');
const helper = require('../utils/moviesDbHelper');
const url = 'https://api.themoviedb.org/3';
const nowPlayingUrl = `${url}/movie/now_playing`;
const searchMovieUrl = `${url}/search/movie`;
const searchTvShowUrl = `${url}/search/tv`;
const searchMultiUrl = `${url}/search/multi`;
const topratedUrl = `${url}/movie/top_rated`;
const popularUrl = `${url}/movie/popular`;
const movieUrl = `${url}/movie`;
const genreUrl = `${url}/genre/movie/list`;
const moviesUrl = `${url}/discover/movie`;
const personUrl = `${url}/trending/person/week`;
const posterUrl = 'https://image.tmdb.org/t/p/original/';

exports.searchMovieByTitle = async (title, numOfResults = 10) => {
  try {
    const response = await axios.get(searchMovieUrl, {
      params: {
        api_key: process.env.MOVIE_DB_API_KEY,
        language: 'en_US',
        page: 1,
        query: title,
      },
    });

    if (!response || !response.data) return null;
    const modifiedData = helper.parseMoviesData(response.data, numOfResults);
    return modifiedData[0];
  } catch (error) {
    console.log('searchMovieByTitle:', error.message);
    return null;
  }
};

exports.searchTvShowByTitle = async (title, numOfResults = 10) => {
  try {
    const response = await axios.get(searchTvShowUrl, {
      params: {
        api_key: process.env.MOVIE_DB_API_KEY,
        language: 'en_US',
        page: 1,
        query: title,
      },
    });

    if (!response || !response.data) return null;
    const modifiedData = helper.parseMoviesData(response.data, numOfResults);
    return modifiedData[0];
  } catch (error) {
    console.log('searchTvShowByTitle:', error.message);
    return null;
  }
};

exports.searchResultByTitle = async (title, type, numOfResults = 10) => {
  try {
    let url = searchMultiUrl;
    if (type === 'movie') url = searchMovieUrl;
    else if (type === 'tv show') url = searchTvShowUrl;

    const response = await axios.get(url, {
      params: {
        api_key: process.env.MOVIE_DB_API_KEY,
        language: 'en_US',
        page: 1,
        query: title,
      },
    });

    if (!response || !response.data) return null;
    const modifiedData = helper.parseMoviesData(response.data, numOfResults);
    return helper.checkMatch(modifiedData, title);
  } catch (error) {
    console.log('searchTvShowByTitle:', error.message);
    return null;
  }
};

exports.getSuggestions = async (text, type, numOfResults = 10) => {
  let url = searchMultiUrl;
  if (type === 'movie') url = searchMovieUrl;
  else if (type === 'tv show') url = searchTvShowUrl;

  const response = await axios.get(url, {
    params: {
      api_key: process.env.MOVIE_DB_API_KEY,
      language: 'en_US',
      page: 1,
      query: text,
    },
  });

  if (!response || !response.data) return [];
  // const results = helper.parseMoviesData(response.data, numOfResults);
  const suggestions = helper.parseSuggestions(response.data, numOfResults);
  return suggestions;
};

/*Get list of movies currently playing on cinema */
exports.getNowPlayingMovies = async () => {
  try {
    const result = await axios.get(nowPlayingUrl, {
      params: {
        api_key: process.env.MOVIE_DB_API_KEY,
        language: 'en_US',
        page: 1,
      },
    });

    if (!result || !result.data) return null;
    return helper.parseMoviesData(result.data);
  } catch (error) {
    console.log('nowPlayingMovies:', error.message);
    return null;
  }
};

/*Get list of available genres {id:number,name:string}*/
exports.getListOfGenres = async () => {
  try {
    const result = await axios.get(genreUrl, {
      params: {
        api_key: process.env.MOVIE_DB_API_KEY,
        language: 'en_US',
        page: 1,
      },
    });

    if (!result || !result.data) return null;
    return helper.parseGenresListData(result.data);
  } catch (error) {
    console.log('getListOfGenres:', error.message);
    return null;
  }
};

/*Get list of movies by specific genre id*/
exports.getMoviesByGenre = async (genre_id) => {
  try {
    const result = await axios.get(moviesUrl, {
      params: {
        api_key: process.env.MOVIE_DB_API_KEY,
        language: 'en_US',
        page: 1,
        with_genres: genre_id,
      },
    });

    if (!result || !result.data) return null;
    return helper.parseMoviesData(result.data);
  } catch (error) {
    console.log('getMoviesByGenre:', error.message);
    return null;
  }
};

/*Get top rated movies on TheMovieDB */
exports.getTopRatedMovies = async () => {
  try {
    const result = await axios.get(topratedUrl, {
      params: {
        api_key: process.env.MOVIE_DB_API_KEY,
        language: 'en_US',
        page: 1,
      },
    });

    if (!result || !result.data) return null;
    return helper.parseMoviesData(result.data);
  } catch (error) {
    console.log('getTopRatedMovies', error.message);
    return null;
  }
};

/*Get most popular movies of today*/
exports.getPopularMovies = async () => {
  try {
    const result = await axios.get(popularUrl, {
      params: {
        api_key: process.env.MOVIE_DB_API_KEY,
        language: 'en_US',
        page: 1,
      },
    });

    if (!result || !result.data) return null;
    return helper.parseMoviesData(result.data);
  } catch (error) {
    console.log('getPopularMovies:', error.message);
    return null;
  }
};

/*Get movie details by id*/
exports.getMovieDetails = async (id) => {
  try {
    const result = await axios.get(`${movieUrl}/${id}`, {
      params: {
        api_key: process.env.MOVIE_DB_API_KEY,
        language: 'en_US',
      },
    });

    if (!result || !result.data) return null;
    return data;
  } catch (error) {
    console.log('getMovieDetails:', error.message);
    return null;
  }
};

/*Get movie trailer by movie id*/
exports.getMovieVideos = async (id) => {
  try {
    const result = await axios.get(`${movieUrl}/${id}/videos`, {
      params: {
        api_key: apiKey,
      },
    });

    if (!result || !result.data) return null;
    return data['results'][0];
  } catch (error) {
    console.log('getMovieVideos:', error.message);
    return null;
  }
};
