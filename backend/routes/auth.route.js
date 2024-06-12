const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();

//define routes for authentication
router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;