const movieDb = require('../models/movieDb');

exports.getMovie = async (req, res, next) => {
  try {
    const { title, genre } = req.params;
    const movie = await movieDb.searchMovieByTitle(title);
    if (!movie) {
      res.status(404).json({ status: 'fail', message: `${title} not found` });
      return;
    }
    res.status(200).json({ status: 'success', result: movie });
  } catch (err) {
    res.status(500).json({ status: 'fail', message: err.message });
  }
};

exports.getTvShow = async (req, res, next) => {
  try {
    const { title, genre } = req.params;

    const tvShow = await movieDb.searchTVShowByTitle(title);

    if (!tvShow) return res.status(404).json({ status: 'fail', message: `${title} not found` });
    res.status(200).json({ status: 'success', result: tvShow });
  } catch (err) {
    res.status(500).json({ status: 'fail', message: err.message });
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const { title, genre } = req.params;

    const result = await movieDb.searchResultByTitle(title);

    if (!result) return res.status(404).json({ status: 'fail', message: `${title} not found` });
    res.status(200).json({ status: 'success', result: tvShow });
  } catch (err) {
    res.status(500).json({ status: 'fail', message: err.message });
  }
};

exports.getAutocompleteSuggestions = async (req, res, next) => {
  try {
    const { text, genre } = req.params;
    const suggestions = await movieDb.getSuggestions(text, genre, 10);
    res.status(200).json({ status: 'success', suggestions });
  } catch (err) {
    res.status(500).json({ status: 'fail', message: err.message });
  }
};
