"use strict";

const jwt = require("jsonwebtoken");

require("dotenv").config();

module.exports = (req, res, next) => {
  
  try {
    const token     = req.headers.authorization;
    const tokenData = jwt.verify(token, process.env.JWT);
    const userId    = tokenData.userId;

    req.auth = { userId };

    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID";
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error("Invalid request!")
    });
  }
};
