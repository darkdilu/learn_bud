const AsyncHandler = require("../../../middlewares/AsyncHandler");
const { CustomError } = require("../../../middlewares/CustomError");
const User = require("../models/UserModel");
const Requests = require("../models/RequestModel");
const path = require("path");
const fs = require("fs");

const requests = AsyncHandler(async (req, res, next) => {
  const { gender, age, page, count } = req.query;
  const start = (page - 1) * count;
  const users = await User.find({
    _id: { $ne: req.id },
  });
  if (!users) return next(new CustomError("No matchin profile!", 401));

  const request = await Requests.find({
    $or: [{ senderId: req.id }, { receiverId: req.id }],
  })
    .populate("senderId")
    .populate("receiverId");
  // console.log("users : ", users);

  const usersWithFiles = await Promise.all(
    users.map(async (user) => {
      // console.log("USER : ", user);
      let state = null;
      try {
        for (const item of request) {
          // console.log(
          //   user._id,
          //   ": ",
          //   item?.receiverId._id.toString() === user._id.toString()
          // );
          if (item?.senderId._id.toString() === user._id.toString()) {
            // console.log("tru for id:", user._id);
            state = {
              //to check the particular user has send the request or not
              ...item,
              sender: true,
            };
            break;
          } else if (item?.receiverId._id.toString() === user._id.toString()) {
            // console.log("tru for id:", user._id);
            state = {
              ...item,
              sender: false,
            };
            break;
          }
        }
        const filePath = path.resolve(__dirname, "../profile", user.Profile);
        // console.log("path", filePath);
        const file = await fs.promises.readFile(filePath);
        console.log("File : ", file);
        return {
          ...user.toObject(),
          request_status: state,
          file: file.toString("base64"),
        };
      } catch (err) {
        // console.log("Err", err);
        return {
          ...user.toObject(), //a spread would work but toobject used to convert it again to mongoose object to have save,remove etc mongoose specific methods.
          request_status: state,
          file: null,
        };
      }
    })
  );
  // console.log("USERS : ", usersWithFiles);
  return res.json({ message: "profiles fetched!", users: usersWithFiles });
});

module.exports = { requests };
