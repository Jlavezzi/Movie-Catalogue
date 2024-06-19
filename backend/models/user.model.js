//import mongoose to create a schema  and model
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//define a schemafor the user
const userSchema = new mongoose.Schema({
  //auth atttributes
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  //user attributes
  name: {
    type: String
  },
  age: {
    type: Number
  },
  //move attributes
  moviePreferences: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
    },
  ],
});
//encode password wiyh bcrypt
userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
//export the 'User' model based on the schem
module.exports = mongoose.model("User", userSchema);
