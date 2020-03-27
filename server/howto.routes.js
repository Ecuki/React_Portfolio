module.exports = app => {
  const howtos = require("./howto.controller.js");

  // Create a new HowTo
  app.post("/React_Portfolio/howtos", howtos.create);

  // Retrieve all Products
  app.get("/React_Portfolio/howtos", howtos.findAll);

  // Retrieve a single HowTo with howtoId
  app.get("/React_Portfolio/howtos/:howtoId", howtos.findOne);

  // Update a Note with howtoId
  app.put("/React_Portfolio/howtos/:howtoId", howtos.update);

  // Delete a Note with howtoId
  app.delete("/React_Portfolio/howtos/:howtoId", howtos.delete);
};
