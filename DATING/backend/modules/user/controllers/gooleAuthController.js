const AsyncHandler = require("../../../middlewares/AsyncHandler");
const { CustomError } = require("../../../middlewares/CustomError");
const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const googleAuth = AsyncHandler(async (req, res, next) => {
  const data = req.user;
  const Email = data.emails[0].value;
  const user = await User.findOne({ Email });
  if (!user) {
    next(new CustomError("No account found!", 401));
    return;
  }
  const token = await jwt.sign({ id: user._id }, process.env.JWT_TOKEN_KEY, {
    expiresIn: "1d",
  });
  await res.cookie("authtoken", token, {
    path: "/",
    expires: new Date(Date.now() + 1000 * 60 * 60), //60 mins
    sameSite: "lax",
    httpOnly: true,
    secure: true,
  });
  return res.redirect("http://localhost:5173/lander");
});

const validator = async (req, res) => {
  return res.json({ message: "Authentication successfull!", status: true });
};

module.exports = {
  googleAuth,
  validator,
};
