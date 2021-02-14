const express = require('express');
const searchController = require('../controllers/searchController');

const router = express.Router();

router.get('/movie/:title/:genre', searchController.getMovie);
router.get('/tv/:title/:genre', searchController.getTvShow);
router.get('/autocomplete/:text/:genre', searchController.getAutocompleteSuggestions);
router.get('/video/:id/:type', searchController.getTrailer);

module.exports = router;
