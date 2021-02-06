const express = require('express');
const searchController = require('../controllers/searchController');

const router = express.Router();

router.get('/movie', searchController.getMovie);
router.get('/tv', searchController.getTvShow);

module.exports = router;
