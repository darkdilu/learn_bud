import { NotFoundError } from "../../../errors/customErrors.js";
import Conversation from "../../../models/ConversationModel.js";
import Message from "../../../models/MessageModel.js";
import User from "../../../models/UserModel.js";
import { getRecieverSocketId, io } from "../../../socket/socket.js";
import { newConnection } from "../../../utils/newConnection.js";

export const sendMessages = async (req, res) => {
  const { senderId, receiverId, senderType, receiverType, message } = req.body;
  let conversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  });
  if (!conversation) {
    conversation = await Conversation.create({
      participants: [senderId, receiverId],
    });
    await newConnection(
      senderId,
      receiverId,
      senderType,
      receiverType,
      req.user.userId
    );
  }
  const newMessage = new Message({
    senderId: senderId,
    receiverId: receiverId,
    message: message,
  });
  await newMessage.save();
  conversation.messages.push(newMessage._id);
  await conversation.save();

  const recieverSocketId = getRecieverSocketId(receiverId);
  console.log(recieverSocketId);
  if (recieverSocketId) {
    io.to(recieverSocketId).emit("newMessage", newMessage);
    io.to(recieverSocketId).emit("newNotification", {
      senderId: newMessage.senderId,
      isRead: false,
      date: new Date(),
    });
  }
  res.status(200).json({ msg: "success", newMessage });
};

export const getMessages = async (req, res) => {
  const { senderId, receiverId } = req.query;
  let conversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  }).populate("messages");
  if (!conversation) res.status(200).json([]);
  res.status(200).json(conversation.messages);
};
