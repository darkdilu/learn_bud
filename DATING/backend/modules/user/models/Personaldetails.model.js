const mongoose = require("mongoose");

const userDetailsSchema = mongoose.Schema({
  DOB: {
    type: String,
    required: true,
  },
  Hobbies: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  Interests: {
    type: String,
    required: true,
  },
  SmokingHabits: {
    type: String,
    required: true,
  },
  DrinkingHabits: {
    type: String,
    required: true,
  },
  Qualifications: {
    type: String,
    required: true,
  },
  Files: {
    type: Array,
    required: true,
  },
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user_detail",
  },
});

module.exports = mongoose.model("personal_detail", userDetailsSchema);
