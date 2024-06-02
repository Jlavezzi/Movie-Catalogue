// import user model
const User = require("../models/user.model");

//get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (e) {
    res.status(500).json({ message: error.message });
  }
};

//create a user
const createUser = async (req, res) => {
  //create a new user innstace with data from request body
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  });
  //save user
  try {
    const newUser = await user.save();
    //returm the created user
    res.status(201).json(newUser);
  } catch (e) {
    //bad request
    res.status(400).json({ message: error.message });
  }
};

//get a user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.param.id);
    if (user == null)
      return res.status(404).json({ message: "user not found" });

    res.json(user);
  } catch (e) {
    res.status(500).json({ message: error.message });
  }
};

//update a user by Id
const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.param.id);
    if (user == null) {
      return res.status(404).json({ message: "user not found" });
    }
    //update  the user wth neew data from request body
    if (req.body.name != null) user.name = req.body.name;
    if (req.body.email != null) user.email = req.body.email;

    //save user
    const updatedUser = await user.save();
    //return updated user
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//delete a suderby id

const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.param.id);
    if (user == null) {
      return res.status(404).json({ message: "user not found" });
    }
    await user.remove();
    res.json({ message: "user deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
