const {
  sendMessage,
  getUserId,
  getMessages,
  getConversations,
} = require("../controllers/messageControllers");
const { cookieValidation } = require("../controllers/userControllers");
const Router = require("express").Router();

Router.post("/send/:receiverId", cookieValidation, sendMessage);
Router.get("/conversation", cookieValidation, getConversations);
Router.get("/userid", cookieValidation, getUserId);
//Since the id has similar route structure had to put all the named routes top
Router.get("/:userToChat", cookieValidation, getMessages);

module.exports = Router;
