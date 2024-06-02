//import mongoose to create a schema  and model
const mongoose = require('mongoose');

//define a schemafor the user
const movieSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        genre:{
            type: String,
            required:true
        },
        rating:{
            type:Number,
            required: true
        },
        description:{
                type: String
        },
        cast:{
            type: String
        }
    }
);

//export the 'Movie' model based on the schema 
module.exports = mongoose.model('Movie', movieSchema)