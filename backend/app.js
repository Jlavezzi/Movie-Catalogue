//app.js
//import necessary modules
require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
//creeate an express app
const app = express();
const passport = require("./middleware/passport.middleware"); // Passport configuration
const userRoutes = require("./routes/userRoutes");
const authRoute = require("./routes/auth.route");
const movieRoute = require("./routes/movies.routes");
const authenticateJWT = require("./middleware/auth.middleware"); // Custom JWT authentication middleware
const mongoose = require("mongoose");
const cors = require("cors");

//middlewares
app.use(express.json()); //parse JSON bodies
app.use(cors()); //enable CORS




app.use(express.json());
app.use(passport.initialize());

//use user routes
app.use("api/users", userRoutes);
//control auth

app.use("/", authRoute);
//guared route
app.use("/secured", authenticateJWT, movieRoute);

//export app
module.exports = app;
