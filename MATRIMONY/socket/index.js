const io = require("socket.io")(8900, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});

let users = [];

const addUser = (profileId, socketId) => {
    if (profileId && !users.some(user => user.profileId === profileId)) {
        users.push({ profileId, socketId });
    }
    console.log("User added:", profileId, socketId);
    console.log("Current user list after addUser:", users);
};

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
    console.log("User removed:", socketId);
    console.log("Current user list after removeUser:", users);
};

const getUser = (profileId) => {
    return users.find(user => user.profileId === profileId);
};

io.on("connection", (socket) => {
    console.log("Someone is connected");

    socket.on("addUser", profileId => {
        addUser(profileId, socket.id);
        io.emit("getUsers", users);
        console.log("userList", users);
    });

    socket.on("sendMessage", ({ senderId, receiverId, text }) => {
        console.log('Received sendMessage event:', { senderId, receiverId, text });
        console.log("Current user list in sendMessage:", users);
        const user = getUser(receiverId);
        console.log("Retrieved user for receiverId", receiverId, ":", user);
        if (user) {
            console.log(`Sending message from ${senderId} to ${receiverId}: ${text}`);
            io.to(user.socketId).emit("getMessages", {
                senderId,
                text,
                createdAt: Date.now(),
            });
        } else {
            console.log(`User with id ${receiverId} not found.`);
        }
    });

    socket.on("disconnect", () => {
        console.log("Someone is disconnected");
        removeUser(socket.id);
        io.emit("getUsers", users);
    });

    io.emit("welcome", "hello this is a message from the socket server");
});
