//app.js
//import necessary modules
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const passport = require('./passport'); // Passport configuration
const userRoutes = require('./routes/userRoutes');
const authRoute = require('./routes/auth.route');
const movieRoute = require('./routes/movies.routes')
const authenticateJWT = require('./middleware/auth'); // Custom JWT authentication middleware
const mongoose = require('mongoose');
const cors = require('cors');


//creeate an express app
const app = express();

//middlewares
app.use(express.json()); //parse JSON bodies
app.use(cors()); //enable CORS

//connect to mongoDB
mongoose.connect('mongodb://localhost:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console,'coonection error:'));
db.once('open', ()=>{
    console.log('connected to MongoDB');
});
app.use(express.json());
app.use(passport.initialize());

//use user routes
app.use('api/users', userRoutes)
//control auth
app.use('/', authRoute)
//guared route
app.use('/secured', authenticateJWT , movieRoute)

//export app
module.exports = app;