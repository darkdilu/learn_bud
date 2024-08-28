import mongoose, { model, Schema } from "mongoose";

const ConversationSchema = new Schema(
  {
    participants: [{ type: mongoose.Types.ObjectId }],
    messages: [{ type: mongoose.Types.ObjectId, ref: "Message", default: [] }],
  },
  {
    timestamps: true,
  }
);

const Conversation = model("Conversation", ConversationSchema);

export default Conversation;
