import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
  UnauthorizedError,
} from "../../../errors/customErrors.js";
import User from "../../../models/UserModel.js";
import { comparePassword, hashPassword } from "../../../utils/bcryptutils.js";
import { createJWT } from "../../../utils/jwtUtils.js";
import { client, generateOtp } from "../../../utils/twilioutils.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) throw new NotFoundError("user not found");
  const isPasswordCorrect = await comparePassword(password, user.password);
  if (!isPasswordCorrect) throw new UnauthenticatedError("Invalid credentials");
  const token = createJWT({
    userId: user._id,
    username: user.username,
  });
  const tenDay = 1000 * 60 * 60 * 24 * 10;
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + tenDay),
    secure: process.env.NODE_ENV === "production",
  });
  res.status(201).json({ msg: "logged in successfully" });
};

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  const existing = await User.findOne({ email: email });
  if (existing) throw new BadRequestError("Email already exist");
  const hashedPassword = await hashPassword(password);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });
  await newUser.save();
  const token = createJWT({
    userId: newUser._id,
    username: newUser.username,
  });
  const tenDay = 1000 * 60 * 60 * 24 * 10;
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + tenDay),
    secure: process.env.NODE_ENV === "production",
  });
  res.status(201).json({ msg: "registered successfully" });
};

export const forgotPassword = async (req, res) => {
  const { phone } = req.body;
  const user = await User.findOne({ phone: phone });
  if (!user) throw new NotFoundError("no user found");
  await client.messages.create({
    body: `Your key is ${user._id}`,
    from: process.env.TWILIO_PH,
    to: phone,
  });
  res.status(200).json({ msg: "KEY has been sent" });
};

export const resetPassword = async (req, res) => {
  const { id, password } = req.body;
  const user = await User.findById(id);
  if (!user) throw new NotFoundError("No user found");
  const hashedPassword = await hashPassword(password);
  user.password = hashedPassword;
  await user.save();
  res.status(200).json({ msg: "password reset" });
};

export const logoutUser = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(200).json({ msg: "successfully logged out" });
};

export const googleLogin = async (req, res) => {
  const { email, username } = req.body;
  const user = await User.findOne({ email: email });
  if (user) {
    const token = createJWT({
      userId: user._id,
      username: user.username,
    });
    const tenDay = 1000 * 60 * 60 * 24 * 10;
    res.cookie("token", token, {
      httpOnly: true,

      expires: new Date(Date.now() + tenDay),
      secure: process.env.NODE_ENV === "production",
    });
    res.status(200).json({ msg: "successfully logged in" });
  } else {
    const newUser = new User({
      username,
      email,
    });
    await newUser.save();
    const token = createJWT({
      userId: newUser._id,
      username: newUser.username,
    });
    const tenDay = 1000 * 60 * 60 * 24 * 10;
    res.cookie("token", token, {
      httpOnly: true,

      expires: new Date(Date.now() + tenDay),
      secure: process.env.NODE_ENV === "production",
    });
    res.status(201).json({ msg: "registered successfully" });
  }
};

export const sendOTP = async (req, res) => {
  const { phone } = req.body;
  const existing = await User.findOne({ phone: phone });
  if (existing) throw new BadRequestError("Phone number already registered");
  const otp = generateOtp();
  const user = await User.findById(req.user.userId);
  if (!user) throw new NotFoundError("No user found");
  user.phone = phone;
  user.otp = otp;
  await user.save();
  await client.messages.create({
    body: `Your OTP is ${otp}`,
    from: process.env.TWILIO_PH,
    to: phone,
  });
  res.status(200).json({ msg: "success" });
};

export const verifyOTP = async (req, res) => {
  const { otp } = req.body;
  const user = await User.findById(req.user.userId);
  if (!user) throw new NotFoundError("No user found");
  if (user.otp === otp) {
    user.hasVerified = true;
    await user.save();
    res.status(200).json({ msg: "verified" });
  } else {
    throw new UnauthorizedError("Invalid OTP");
  }
};

export const userInfo = async (req, res) => {
  const { userId } = req.user;
  const user = await User.findById(userId)
    .select("-password")
    .populate([
      "emconnections.jsId",
      "emconnections.emId",
      "jsconnections.jsId",
      "jsconnections.emId",
    ]);
  if (!user) throw new NotFoundError("No user found");
  res.status(200).json(user);
};

export const changePassword = async (req, res) => {
  const user = await User.findById(req.user.userId);
  if (!user) throw new NotFoundError("No user found");
  const isPasswordCorrect = await comparePassword(
    req.body.password,
    user.password
  );
  if (!isPasswordCorrect) throw new UnauthenticatedError("Invalid credentials");
  const hashedPassword = await hashPassword(req.body.newPassword);
  user.password = hashedPassword;
  await user.save();
  res.status(200).json({ msg: "password changed successfully" });
};
