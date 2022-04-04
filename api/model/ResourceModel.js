"use strict";

const mongoose = require("mongoose");

const ResourceModel = mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  link: { 
    type: String, 
    required: true,
    unique: true
  },
  category: { 
    type: String, 
    required: true 
  }
});

module.exports = mongoose.model("Resource", ResourceModel);
