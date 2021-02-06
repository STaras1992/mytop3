const posterUrl = 'https://image.tmdb.org/t/p/original/';

exports.parseMoviesData = (data) => {
  const modifiedData = data['results'].map((movie) => ({
    id: movie['id'],
    title: movie['title'],
    overview: movie['overview'],
    release: movie['release_date'],
    popularity: movie['popularity'],
    poster: posterUrl + movie['poster_path'],
    backPoster: posterUrl + movie['backdrop_path'],
    rating: movie['vote_average'],
  }));

  return modifiedData;
};

exports.parseGenresListData = (data) => {
  const modifiedData = data['genres'].map((g) => ({
    id: g['id'],
    name: g['name'],
  }));
  return modifiedData;
};
