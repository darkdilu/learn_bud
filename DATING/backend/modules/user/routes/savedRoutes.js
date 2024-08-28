const Router = require("express").Router();
const {
  saveProfile,
  findSavedProfile,
  findAllSavedProfiles,
} = require("../controllers/savedController");
const { cookieValidation } = require("../controllers/userControllers");

Router.get("/getallsavedprofiles", cookieValidation, findAllSavedProfiles);
Router.get("/getsavedprofile/:receiverId", cookieValidation, findSavedProfile);
Router.post("/saveprofile/:receiverId", cookieValidation, saveProfile);

module.exports = Router;
