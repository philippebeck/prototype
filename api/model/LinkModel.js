"use strict";

const mongoose = require("mongoose");

const LinkModel = mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  url: { 
    type: String, 
    required: true,
    unique: true
  },
  cat: { 
    type: String, 
    required: true 
  }
});

module.exports = mongoose.model("Link", LinkModel);
