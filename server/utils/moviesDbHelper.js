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
  let topData = data['results'].slice(0, numOfSuggestions);
  topData = topData.filter((data) => data['media_type'] !== 'person');
  let listOfSuggestions = topData.map((movie) => {
    let label = undefined;
    if (movie['media_type'] === 'movie') {
      if (movie['title'] && movie['original_title']) {
        if (movie['title'] === movie['original_title'])
          label = `${movie['title']} (${movie['release_date'] && movie['release_date'].split('-')[0]})`;
        label = `${movie['title']} - ${movie['original_title']} (${
          movie['release_date'] && movie['release_date'].split('-')[0]
        })`;
      } else if (movie['title'])
        label = `${movie['title']} (${movie['release_date'] && movie['release_date'].split('-')[0]})`;
      else label = `${movie['original_title']} (${movie['release_date'] && movie['release_date'].split('-')[0]})`;
    } else if (movie['media_type'] === 'tv') {
      if (movie['name'] && movie['original_name']) {
        if (movie['name'] === movie['original_name'])
          label = `${movie['name']} (${
            movie['origin_country'] && movie['origin_country'].length > 0 && movie['origin_country'][0]
          })`;
        label = `${movie['name']} - ${movie['original_name']} (${
          movie['origin_country'] && movie['origin_country'].length > 0 && movie['origin_country'][0]
        })`;
      } else if (movie['name'])
        label = `${movie['name']} (${
          movie['origin_country'] && movie['origin_country'].length > 0 && movie['origin_country'][0]
        })`;
      else
        label = `${movie['origin_name']} (${
          movie['origin_country'] && movie['origin_country'].length > 0 && movie['origin_country'][0]
        })`;
    }

    return {
      id: movie['id'],
      type: movie['media_type'],
      label: label,
      title: movie['title'] || movie['name'],
      originalTitle: movie['original_title'] || movie['original_name'],
      overview: movie['overview'],
      release: movie['release_date'] || movie['first_air_date'],
      popularity: movie['popularity'],
      poster: posterUrl + movie['poster_path'],
      genre_ids: movie['genre_ids'],
      backPoster: posterUrl + movie['backdrop_path'],
      rating: movie['vote_average'],
      votes: movie['vote_count'],
    };
  });

  //listOfSuggestions = listOfSuggestions.filter((suggestion) => suggestion.label !== undefined);
  return listOfSuggestions;
};

exports.parseGenresListData = (data) => {
  const modifiedData = data['genres'].map((g) => ({
    id: g['id'],
    name: g['name'],
  }));
  return modifiedData;
};
