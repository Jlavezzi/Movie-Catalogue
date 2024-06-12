const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user.model'); 
const jwtSecretKey = process.env.JWT_SECRET_KEY;

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user || !user.validatePassword(password)) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const payload = { id: user.id };
    const token = jwt.sign(payload, jwtSecretKey, { expiresIn: '1h' }); // Use an environment variable in a real application

    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'Registration successful' });
    res.redirect('/login')
    
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports ={
  login,
  register
}