const User = require("../models/UserModel");
const AsyncHandler = require("../../../middlewares/AsyncHandler");
const { CustomError } = require("../../../middlewares/CustomError");
const Request = require("../models/RequestModel");

const sendRequest = AsyncHandler(async (req, res, next) => {
  const { receiverId } = req.params;
  console.log("receiver :", receiverId);
  const request = new Request({
    senderId: req.id,
    receiverId,
    status: "Pending",
  });
  await request.save();
  console.log("request :", request);
  return res.json({ message: "Request being send!", request });
});

const getRequest = AsyncHandler(async (req, res, next) => {
  const { receiverId } = req.params;
  const request = await Request.findOne({
    $or: [
      {
        $and: [{ senderId: req.id }, { receiverId }],
      },
      {
        $and: [{ senderId: receiverId }, { receiverId: req.id }],
      },
    ],
  });
  if (!request) {
    throw new CustomError("No requests!", 401);
  }

  const requestObj = request.toObject();
  if (request.senderId.toString() === req.id) {
    requestObj["sender"] = true;
  } else {
    requestObj["sender"] = false;
  }

  return res.json({ message: "Request fetched!", requestObj });
});

const updateRequest = AsyncHandler(async (req, res, next) => {
  const { Pending, Accepted, Rejected } = req.query;
  const { requestId } = req.params;
  const state =
    (Pending && "Pending") ||
    (Accepted && "Accepted") ||
    (Rejected && "Rejected");
  const request = await Request.findByIdAndUpdate(
    requestId,
    { status: state },
    { new: true }
  );
  if (!request) {
    throw new CustomError("Unable to update!", 401);
  }
  const requestObj = request.toObject();
  if (request.senderId.toString() === req.id) {
    requestObj["sender"] = true;
  } else {
    requestObj["sender"] = false;
  }
  return res.json({ message: "Status updated", request });
});

const cancelRequest = AsyncHandler(async (req, res, next) => {
  const userId = req.id;
  const { reqId } = req.params;
  const request = await Request.findOneAndDelete({
    $and: [{ _id: reqId, senderId: userId }],
  });
  if (!request) {
    throw new CustomError("Can not find the request!", 400);
  }
  return res.json({ message: "Request cancelled!" });
});

const getAllRequests = AsyncHandler(async (req, res, next) => {
  const requests = await Request.find({
    $or: [
      {
        senderId: req.id,
      },
      { receiverId: req.id },
    ],
  })
    .populate("senderId")
    .populate("receiverId");
  const requestObjs = requests.map((request) => request.toObject());
  requestObjs.forEach((each, index) => {
    return (requestObjs[index] = {
      ...each,
      sender: each.senderId._id.toString() === req.id,
    });
  });
  return res.json({ message: "Requests fetched!", status: true, requestObjs });
});

module.exports = {
  sendRequest,
  updateRequest,
  cancelRequest,
  getRequest,
  getAllRequests,
};
