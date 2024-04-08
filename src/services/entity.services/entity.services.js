const { EntityModel } = require("../../models");

const getAllEntities = async () => {
  const entities = await EntityModel.find();
  return entities;
};

const createEntity = async ({ name, description }) =>
  EntityModel.create({
    name,
    description,
  });

const updateEntityById = async (id, { name, description }) => {
  const updatedEntity = await EntityModel.findByIdAndUpdate(
    id,
    { name, description },
    { new: true }
  );
  return updatedEntity;
};
const getEntityById = async (id) => {
  const entity = await EntityModel.findById(id);
  return entity;
};
const deleteEntityById = async (id) => EntityModel.findByIdAndDelete(id);
module.exports = {
  createEntity,
  updateEntityById,
  deleteEntityById,
  getAllEntities,
  getEntityById,
};
