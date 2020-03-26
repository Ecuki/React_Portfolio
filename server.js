// get dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// parse requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "build")));
//Enable CORS for all HTTP methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Configuring the database
require("dotenv").config({ path: "./.env" });

const mongoose = require("mongoose");
require("./src/backend/howto.routes.js")(app);

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(String(process.env.REACT_APP_MONGODB), {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

// default route
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.REACT_APP_PORT, () => {
  console.log("Server is listening on port" + process.env.REACT_APP_PORT);
});
