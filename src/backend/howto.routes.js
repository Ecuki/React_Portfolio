module.exports = app => {
  const howtos = require("./howto.controller.js");

  // Create a new HowTo
  app.post("/howtos", howtos.create);

  // Retrieve all Products
  app.get("/howtos", howtos.findAll);

  // Retrieve a single HowTo with howtoId
  app.get("/howtos/:howtoId", howtos.findOne);

  // Update a Note with howtoId
  app.put("/howtos/:howtoId", howtos.update);

  // Delete a Note with howtoId
  app.delete("/howtos/:howtoId", howtos.delete);
};
