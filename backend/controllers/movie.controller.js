const User = require("../models/user.model"),
  Movies = require("../models/movie.model");

//add movie to preference
exports.addMoviePreference = async (req, res) => {
  try {
    //get user and movie id
    const userId = req.user.id,
      movieId = req.body.movieId;
    //update movie using the user schema to access movie preference
    await User.updateOne(
      { _id: userId },
      { $push: { moviePreferences: movieId } },
      (err, result) => {
        if (err)
          return res
            .status(500)
            .json({ message: "error adding movie preference", error: err });
        if (result.nmodified === 0)
          return res
            .status(404)
            .json({
              message: "user not found or Movie preference added succesfully",
            });
      }
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//remove  mpvie from preference
exports.removeMoviePreference = async (req, res) => {
  try {
    const userId = req.user.id,
      selectedMovie = req.body.movieId;
    //update movie using the user schema to access movie preference
    await User.updateOne(
      { _id: userId },
      { $pull: { moviePreferences: movieId } },
      (err, result) => {
        if (err)
          return res
            .status(500)
            .json({ message: "error removing movie preference", error: err });
        if (result.nmodified === 0)
          return res
            .status(404)
            .json({ message: "user not found or Movie preference not found" });
      }
    );
    if (user) return;
    if (selectedMovie == null) {
      res.status(404).json({ message: "movie not found" });
    }
    res.status(200).json({ message: "movie preference removed succesfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
