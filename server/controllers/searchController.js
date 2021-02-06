const movieDb = require('../models/movieDb');

exports.getMovie = async (req, res, next) => {
  try {
    const { movieName } = req.body;

    const movie = await movieDb.searchMovieByName(movieName);

    if (!movie) return res.status(404).json({ status: 'fail', message: `{movieName} not found` });
    res.status(200).json({ status: 'success', result: movie });
  } catch (err) {
    res.status(500).json({ status: fail, message: err.message });
  }
};

exports.getTvShow = async (req, res, next) => {
  try {
    const { tvShowTitle } = req.body;

    const tvShow = await movieDb.searchTVShowByTitle(tvShowTitle);

    if (!tvShow) return res.status(404).json({ status: 'fail', message: `{tvShowTitle} not found` });
    res.status(200).json({ status: 'success', result: tvShow });
  } catch (err) {
    res.status(500).json({ status: fail, message: err.message });
  }
};
