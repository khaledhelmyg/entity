const express = require("express");
const { entityControllers } = require("../../controllers");

const entityRoutes = express.Router();

entityRoutes.post("/", entityControllers.createEntity);
entityRoutes.get("/", entityControllers.getAllEntities);
entityRoutes.get("/:id", entityControllers.getEntityById);
entityRoutes.put("/:id", entityControllers.updateEntityById);
entityRoutes.delete("/:id", entityControllers.deleteEntityById);

module.exports = entityRoutes;
