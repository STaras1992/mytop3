const posterUrl = 'https://image.tmdb.org/t/p/original/';

exports.parseMoviesData = (data, numOfElements = 10) => {
  const topData = data['results'].slice(0, numOfElements);
  // const modifiedData = data['results'].map((movie) => ({
  const modifiedData = topData.map((movie) => ({
    id: movie['id'],
    title: movie['title'] || movie['name'],
    originalTitle: movie['original_title'] || movie['original_name'],
    overview: movie['overview'],
    release: movie['release_date'],
    popularity: movie['popularity'],
    poster: posterUrl + movie['poster_path'],
    backPoster: posterUrl + movie['backdrop_path'],
    rating: movie['vote_average'],
  }));

  return modifiedData;
};

exports.checkMatch = (data, searchTitle) => {
  return (movieResult = data.find((movie) => movie.originalTitle === searchTitle || movie.title === searchTitle));
};

/*list of top 10 titles match search request*/
exports.parseSuggestions = (data, numOfSuggestions) => {
  console.log(data['results']);
  const topData = data['results'].slice(0, numOfSuggestions);
  let listOfSuggestions = topData.map((movie) => {
    if (movie['media_type'] === 'movie') {
      if (movie['title'] && movie['original_title']) {
        if (movie['title'] === movie['original_title']) return movie['title'];
        return `${movie['title']} - ${movie['original_title']}`;
      } else if (movie['title']) return movie['title'];
      else return movie['original_title'];
    }
    if (movie['media_type'] === 'tv') {
      if (movie['name'] && movie['original_name']) {
        if (movie['name'] === movie['original_name']) return movie['name'];
        return `${movie['name']} - ${movie['original_name']}`;
      } else if (movie['name']) return movie['name'];
      else return movie['original_name'];
    }
    //else Person
  });

  listOfSuggestions = listOfSuggestions.filter((suggestion) => suggestion !== undefined);
  return new Set(listOfSuggestions);
};

exports.parseGenresListData = (data) => {
  const modifiedData = data['genres'].map((g) => ({
    id: g['id'],
    name: g['name'],
  }));
  return modifiedData;
};
