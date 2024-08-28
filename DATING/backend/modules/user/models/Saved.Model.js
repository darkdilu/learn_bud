const mongoose = require("mongoose");

const savedSchema = mongoose.Schema({
  savedBy: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "user_detail",
  },
  savedProfile: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "user_detail",
  },
});

module.exports = mongoose.model("saved_profile", savedSchema);
