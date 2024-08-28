const mongoose = require("mongoose");

const requestSchema = mongoose.Schema({
  senderId: {
    require: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "user_detail",
  },
  receiverId: {
    require: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "user_detail",
  },
  status: {
    require: true,
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
  },
});

module.exports = mongoose.model("request", requestSchema);
