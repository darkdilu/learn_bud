const { Server } = require("socket.io");
const express = require("express");
const http = require("http");
const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
  },
});

const userSocketMap = {};

function getReceiverSocketId(receiverId) {
  return userSocketMap[receiverId];
}

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  if (userId != "undefined") userSocketMap[userId] = socket.id;

  socket.on("disconnect", () => {
    delete userSocketMap[userId];
    console.log("Disconnected:", userSocketMap);
  });
});
module.exports = { app, io, server, getReceiverSocketId };
