const { entityServices } = require("../../services");

const createEntity = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newEntity = await entityServices.createEntity({ name, description });
    return res.status(201).json(newEntity);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteEntityById = async (req, res) => {
  try {
    const { id } = req.params;
    await entityServices.deleteEntityById(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getAllEntities = async (req, res) => {
  try {
    const entities = await entityServices.getAllEntities();
    return res.status(200).json(entities);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getEntityById = async (req, res) => {
  try {
    const { id } = req.params;
    const entity = await entityServices.getEntityById(id);
    if (!entity) {
      return res.status(404).json({ error: "Entity not found" });
    }
    return res.status(200).json(entity);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const updateEntityById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const updatedEntity = await entityServices.updateEntityById(id, {
      name,
      description,
    });
    return res.status(200).json(updatedEntity);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createEntity,
  deleteEntityById,
  getAllEntities,
  getEntityById,
  updateEntityById,
};
