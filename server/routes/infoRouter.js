const express = require('express');
const infoController = require('../controllers/infoController');

const router = express.Router();

router.get('/genres', infoController.getGenres);
router.get('/popular', infoController.getPopularMovies);

module.exports = router;
