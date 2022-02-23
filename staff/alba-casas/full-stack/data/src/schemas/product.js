const { Schema } = require("mongoose");
const {
  Types: { ObjectId },
} = Schema;

const product = new Schema({
  brand: {
    type: ObjectId,
    required: true,
    ref: "Brand",
  },
  model: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  serial: {
    type: String,
    required: true,
  },
});

module.exports = product;
