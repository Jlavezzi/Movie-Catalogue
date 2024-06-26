const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user.model'); 
const jwtSecretKey = process.env.JWT_SECRET_KEY;

//login controller
const login = async (req, res) => {
  // extract from request from client
  const { username, password } = req.body;

  try {
    //check if user exists
    const user = await User.findOne({ username });
    //validate if password is correct or id user exists
    if (!user || !user.validatePassword(password)) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
//create a  session id
    const payload = { id: user.id };
    const token = jwt.sign(payload, jwtSecretKey, { expiresIn: '1h' }); 
    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const register = async (req, res) => {
  const { username, password } = req.body;
  

    // Retrieve the salt rounds value from environment variables
    const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS, 10);

  try {
   
    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists. Please log in.' });
    }
   // Hash the password with the configured salt rounds
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'Registration successful' });
   
    
  } catch (error) {
    console.error('Registration error:', error);  // Log the error
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports ={
  login,
  register
}