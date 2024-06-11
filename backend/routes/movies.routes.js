//
const express = require('express'),
      router = express.Route(),
      movieController = require('../controllers/movie.controller');

//define routes for movie opearions


//add movie preference
router.put('/:movieid', movieController.addMoviePreference );

//delete movie prefrence
router.delete('/:movieid', movieController.removeMoviePreference);