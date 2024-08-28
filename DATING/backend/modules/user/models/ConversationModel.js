const mongoose = require("mongoose");

const conversationSchema = mongoose.Schema(
  {
    Participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user_detail",
      },
    ],
    Messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "message",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("conversation", conversationSchema);
