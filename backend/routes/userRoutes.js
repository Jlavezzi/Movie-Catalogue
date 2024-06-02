//import express to create a router
const express = require('express');
const router = express.Router();

//import user controller methods
const  userController = require('../controllers/user.controller')

//define routes for user operations

//route to get all users
router.get('/', userController.getAllUsers);
//create a new user
router.post('/',userController.createUser);
//route to get specific user
router.get('/:id', userController.getUserById);
//update a user
router.put('/:id', userController.updateUser);
//delete user
router.delete('/:id', userController.deleteUser)

//export router
module.exports = router;