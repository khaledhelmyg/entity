const express = require("express");
const entityRoutes = require("./entity.routes");

const entitiesRoutes = express.Router();

entitiesRoutes.use(entityRoutes);

// Handling 404 Not Found error for routes not defined
entitiesRoutes.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

module.exports = entitiesRoutes;
