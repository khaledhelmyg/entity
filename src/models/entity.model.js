const mongoose = require("mongoose");

// Define a schema
const { Schema } = mongoose;

const entitySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);
const EntityModel = mongoose.model("entity", entitySchema);
module.exports = EntityModel;
