//import mongoose to create a schema  and model
const mongoose = require('mongoose');


//define a schemafor the user
const userSchema = new mongoose.Schema(
    {//auth atttributes
        email:{
            type: String,
            required:true
        },
        password:{
type: String,
required: true
        } ,
        //user attributes
        name:{
            type: String,
            required: true
        },
        age:{
            type:Number,
            required: true
        },
        //move attributes
        moviePreferences:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Movie'
        }]
        
    }
);

//export the 'User' model based on the schem 
module.exports = mongoose.model('User', userSchema)