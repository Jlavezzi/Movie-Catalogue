//
const express = require('express');;
const  movieController = require('../controllers/movie.controller')
 const router = express.Router();

//define routes for movie opearions


//add movie preference
router.put('/:movieid', movieController.addMoviePreference );

//delete movie prefrence
router.delete('/:movieid', movieController.removeMoviePreference);

module.exports = router;