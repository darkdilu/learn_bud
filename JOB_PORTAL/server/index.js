import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";

import authRouter from "./modules/auth/routers/authRouter.js";
import employerDashboardRouter from "./modules/employer/routers/employerDashboardRouter.js";
import userRouter from "./modules/user/routers/userRouter.js";
import jobseekerRouter from "./modules/jobseeker/routers/jobSeekerRouter.js";
import JPMessageRouter from "./modules/jobportalmessages/routers/JPMessageRouter.js";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import {
  authenticateEmployer,
  authenticateJobSeeker,
  authenticateUser,
} from "./middleware/authMiddleware.js";
import { app, server } from "./socket/socket.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use("/api/auth", authRouter);
app.use("/api/user", authenticateUser, userRouter);
app.use(
  "/api/jobseeker",
  authenticateUser,
  authenticateJobSeeker,
  jobseekerRouter
);
app.use(
  "/api/employer",
  authenticateUser,
  authenticateEmployer,
  employerDashboardRouter
);
app.use("/api/jobportal/messages", authenticateUser, JPMessageRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "Not Found" });
});
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
try {
  await mongoose.connect(process.env.MONGODB_URI);
  server.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
