const passport = require('passport');

// Custom middleware to authenticate requests using JWT
const authenticateJWT = passport.authenticate('jwt', { session: false });

module.exports = authenticateJWT;

