const express = require("express");

const entityRoutes = require("./entity.routes");

const apiRoutes = express.Router();

apiRoutes.use("/entity", entityRoutes);

module.exports = apiRoutes;
