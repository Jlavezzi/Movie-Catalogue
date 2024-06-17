require("dotenv").config(); // Load environment variables from .env file
const mongoose = require('mongoose');

const db_uri = process.env.MONGODB_URI;
const connectDB = ()=>{
  mongoose 
  .connect(db_uri)
  .then(() => {
    console.log('successfully connected to database');
  })
  .catch((error) => {
    console.log('Error connecting to database');
    console.log(error);
  });




}

module.exports = connectDB