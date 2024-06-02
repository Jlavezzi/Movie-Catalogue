//app.js
//import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes')

//creeate an express app
const app = express();

//middlewares
app.use(express.json()); //parse JSON bodies
app.use(cors()); //enable CORS

//use user routes
app.use('api/users', userRoutes)

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


//export app
module.exports = app;