const movieDb = require('../models/movieDb');

exports.getGenres = async (req, res, next) => {
  try {
    const genres = await movieDb.getListOfGenres();
    if (!genres) return res.status(400).json({ status: 'fail', message: 'Failed to get list of genres' });
    res.status(200).json({ status: 'success', genres });
  } catch (err) {
    res.status(500).json({ status: 'fail', message: err.message });
  }
};

exports.getPopularMovies = async (req, res, next) => {
  try {
    const movies = await movieDb.getMostPopularMovies(5);
    if (!movies) return res.status(400).json({ status: 'fail', message: 'Failed to get popular movies' });
    res.status(200).json({ status: 'success', movies });
  } catch (err) {
    res.status(500).json({ status: 'fail', message: err.message });
  }
};
