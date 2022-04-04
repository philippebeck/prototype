"use strict";

const mongoose        = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const UserModel = mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    unique: true
  },
  email: { 
    type: String, 
    required: true,
    unique: true
  },
  pass: { 
    type: String, 
    required: true 
  }
});

UserModel.plugin(uniqueValidator);

module.exports = mongoose.model("User", UserModel);
