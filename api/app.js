"use strict";

const express   = require("express");
const mongoose  = require("mongoose");
const helmet    = require("helmet");
const sanitize  = require("express-mongo-sanitize");
const path      = require("path");

const thingRoute    = require("./route/ThingRoute");
const resourceRoute = require("./route/ResourceRoute");
const userRoute     = require("./route/UserRoute")

require("dotenv").config();

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();
app.use(express.json());

app.use(helmet({ crossOriginResourcePolicy: process.env.HELMET }));
app.use(sanitize());

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin", 
    "*"
    );
  res.setHeader(
    "Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
  res.setHeader(
    "Access-Control-Allow-Methods", 
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
  next();
});

app.use(`/${process.env.IMG}`, express.static(path.join(__dirname, process.env.IMG)));

app.use(process.env.ROUTE_STUFF, thingRoute);
app.use(process.env.ROUTE_RESOURCE, resourceRoute);
app.use(process.env.ROUTE_AUTH, userRoute);

module.exports = app;
