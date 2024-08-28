const {
  sendRequest,
  updateRequest,
  cancelRequest,
  getRequest,
  getAllRequests,
} = require("../controllers/requestController");
const { cookieValidation } = require("../controllers/userControllers");

const Router = require("express").Router();

Router.get("/getrequest/:receiverId", cookieValidation, getRequest);
Router.get("/getallrequests", cookieValidation, getAllRequests);
Router.post("/send/:receiverId", cookieValidation, sendRequest);
Router.put("/:requestId/params", cookieValidation, updateRequest);
Router.delete("/delete/:reqId", cookieValidation, cancelRequest);

module.exports = Router;
