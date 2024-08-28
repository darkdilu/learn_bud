const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
  Category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "category",
  },
});

module.exports = mongoose.model("product", productSchema);
