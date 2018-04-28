const express = require("express");
var bodyParser = require("body-parser");

const path = require("path");
const mongoose = require("mongoose");
const mongodbConnect = require("./config/database");

const db = mongoose.connection;
const app = new express();

// Connect to mongodb

mongodbConnect();

// import models
const User = require("./models/User");

// Server Middleware
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("A " + req.method + " request received at " + new Date());
  next();
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});



app.listen(5000, () => {
  console.log("Listening to port 5000.");
});