const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const mongoose = require("mongoose");
require("./server/howto.routes.js")(app);

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(process.env.REACT_APP_MONGODB, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
app.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
app.listen(PORT, () => {
  console.log("Server is listening on port" + PORT);
});
