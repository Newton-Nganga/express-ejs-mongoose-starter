
const mongoose = require("mongoose");

//define how data will be stored

//--------------------------------------------
//define user schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: String,
  password:String
});

const User = mongoose.model("User", UserSchema);//we will export User
//--------------------------------------------
//define book schema

const BookSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    ISO: {
      type: Number,
      default: 0,
    },
  });
  
  const Book = mongoose.model("Book", BookSchema); //we will export Book

//--------------------------------------------
//your other schemas come here



//--------------------------------------------
//export the schemas you have defined
module.exports = {User,Book};
