const Conversations = require("../models/ConversationModel");
const mongoose = require("mongoose");
const Messages = require("../models/Message.model");
const AsyncHandler = require("../../../middlewares/AsyncHandler");
const { CustomError } = require("../../../middlewares/CustomError");
const { getReceiverSocketId } = require("../../../socket/socket");
const { io } = require("../../../socket/socket");
const ObjectId = mongoose.Types.ObjectId;

const sendMessage = AsyncHandler(async (req, res, next) => {
  const { receiverId } = req.params;
  const { message } = req.body;
  // console.log(message);
  const senderId = req.id;

  // Find existing conversation or create a new one if not found
  let conversation = await Conversations.findOne({
    Participants: { $all: [senderId, receiverId] },
  });

  if (!conversation) {
    // Create a new conversation if not found
    conversation = await Conversations.create({
      Participants: [senderId, receiverId],
    });
  }

  // Create a new message
  const newMessage = new Messages({
    senderId,
    receiverId,
    message,
  });

  // Save the new message
  await newMessage.save();

  // Push the new message ID to the conversation's Messages array
  conversation.Messages.push(newMessage._id);

  // Save the updated conversation
  await conversation.save();

  // Emit the new message to the receiver
  const receiverSocketId = getReceiverSocketId(receiverId);
  console.log("receiver socket : ", receiverSocketId);
  if (receiverSocketId) {
    io.to(receiverSocketId).emit("newMessage", newMessage);
  }

  return res.status(201).json({ newMessage });
});

const getMessages = AsyncHandler(async (req, res, next) => {
  const { userToChat } = req.params;
  // console.log(userToChat, req.id);
  const userId = req.id;
  const conversation = await Conversations.findOne({
    Participants: {
      $all: [userId, userToChat],
    },
  }).populate({
    path: "Messages", // Use the correct model name
  }); //Expecting messages from "messages" collection using the reference, by populating the field name which having the ref objects.
  // console.log("con", conversation);
  if (!conversation) return res.status(200).json([]);

  const messages = conversation.Messages;

  return res.status(200).json({ messages });
});

const getConversations = AsyncHandler(async (req, res, next) => {
  const userId = req.id;
  let conversations = await Conversations.find({
    Participants: {
      $in: [userId],
    },
  }).populate("Participants");
  conversations = conversations.map((each) => {
    each["Participants"] = each.Participants.filter((item) => {
      if (item._id != userId) {
        return item;
      }
    });
    return each;
  });
  if (!conversations) {
    return res.json({ conversations: [] });
  }
  return res.json({ conversations });
});

const getUserId = AsyncHandler(async (req, res, next) => {
  const userId = req.id;
  return res.json({ userId });
});

module.exports = {
  sendMessage,
  getUserId,
  getMessages,
  getConversations,
};
