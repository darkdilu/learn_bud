import {
  BadRequestError,
  NotFoundError,
} from "../../../errors/customErrors.js";
import { formatImage } from "../../../middleware/multerMiddleware.js";
import Employer from "../../../models/EmployerModel.js";
import JobSeeker from "../../../models/JobSeeker.js";
import User from "../../../models/UserModel.js";
import { v2 as cloudinary } from "cloudinary";

export const addUserDetails = async (req, res) => {
  const user = await User.findById(req.user.userId).select("-password");
  if (!user) throw new NotFoundError("No user found");
  const hobbiesArray = req.body.hobbies.split(",").map((item) => item.trim());
  const interestArray = req.body.interest.split(",").map((item) => item.trim());
  user.age = req.body.age;
  user.address = req.body.address;
  user.dateOfBirth = req.body.dateOfBirth;
  user.hobbies = hobbiesArray;
  user.interest = interestArray;
  user.gender = req.body.gender;
  user.smoking = req.body.smoking;
  user.drinking = req.body.drinking;
  user.highestQualification = req.body.highestQualification;
  await user.save();
  res.status(200).json({ msg: "details added successfully", user });
};

export const saveEmployer = async (req, res) => {
  const employer = await Employer.findOne({ owner: req.user.userId });
  if (employer) {
    res.status(200).json({ msg: "success", employer });
  } else {
    const newEmployer = new Employer({
      owner: req.user.userId,
    });
    await newEmployer.save();
    res.status(201).json({ msg: "success", newEmployer });
  }
};

export const saveJobSeeker = async (req, res) => {
  const jobseeker = await JobSeeker.findOne({ owner: req.user.userId });
  const user = await User.findById(req.user.userId);
  if (jobseeker) {
    res.status(200).json({ msg: "success", jobseeker });
  } else {
    const newSeeker = new JobSeeker({
      owner: req.user.userId,
      gender: user.gender,
    });
    await newSeeker.save();
    res.status(201).json({ msg: "success", newSeeker });
  }
};

export const uploadImage = async (req, res) => {
  const user = await User.findById(req.user.userId);
  if (!user) throw new NotFoundError("No user found");
  if (req.file) {
    const file = formatImage(req.file);
    if (user.imagePublicId) {
      await cloudinary.uploader.destroy(user.imagePublicId);
    }
    const response = await cloudinary.uploader.upload(file);
    user.image = response.secure_url;
    user.imagePublicId = response.public_id;
    await user.save();
    res.status(200).json({ msg: "success", url: response.secure_url });
  } else {
    throw new BadRequestError("No files found");
  }
};

export const checkEmployerProfile = async (req, res) => {
  const employer = await Employer.findOne({ owner: req.user.userId });
  if (!employer) {
    const newEmployer = new Employer({
      owner: req.user.userId,
    });
    await newEmployer.save();
    res.status(201).json({ msg: "success" });
  } else {
    res.status(200).json({ msg: "already created" });
  }
};

export const checkJobSeekerProfile = async (req, res) => {
  const seeker = await JobSeeker.findOne({ owner: req.user.userId });
  if (!seeker) {
    const newSeeker = new JobSeeker({
      owner: req.user.userId,
    });
    await newSeeker.save();
    res.status(201).json({ msg: "success" });
  } else {
    res.status(200).json({ msg: "already created" });
  }
};
