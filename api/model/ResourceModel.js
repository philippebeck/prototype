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
  technology: { 
    type: String, 
    required: true 
  },
  category: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true,
    unique: true
  }
});

module.exports = mongoose.model("Resource", ResourceModel);
