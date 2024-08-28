const express = require("express");
const upload = require("multer")();
const router = express.Router();
const {
  UserSignup,
  UserLogin,
  cookieValidation,
  matchedProfiles,
  getUserProfile,
  userDetailsRegister,
  getUserIndividualProfile,
} = require("../controllers/userControllers");

router.post("/signup", UserSignup);
router.post("/login", UserLogin);
router.post("/detailsregister", cookieValidation, userDetailsRegister);
router.get("/profile", cookieValidation, getUserProfile);
router.get("/matched", cookieValidation, matchedProfiles);
router.get(
  "/individualprofile/:userId",
  cookieValidation,
  getUserIndividualProfile
);

module.exports = router;
