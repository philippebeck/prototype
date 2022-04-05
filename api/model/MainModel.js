"use strict";

const mongoose = require("mongoose");

const MainModel = mongoose.Schema({
  name: { 
    type: String, 
    required: true
  },
  link: { 
    type: String, 
    required: true 
  },
  image: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  }
});

module.exports = mongoose.model("Thing", MainModel);
