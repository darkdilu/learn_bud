const router = require("express").Router();
const passport = require("passport");
const { googleAuth, validator } = require("../controllers/gooleAuthController");
const { cookieValidation } = require("../controllers/userControllers");

//---------ROUTE HANDLING GOOGLE AUTH SELECTION PAGE------------

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

//---------ROUTE HANDLING CALLBACK AFTER AUTH--------------------
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/", session: false }),
  googleAuth
);

//---------AUTH VALIDATOR----------------------------------------

router.get("/auth/validator", cookieValidation, validator);

module.exports = router;
