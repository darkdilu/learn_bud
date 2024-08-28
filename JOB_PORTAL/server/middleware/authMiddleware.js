import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
  UnauthorizedError,
} from "../errors/customErrors.js";
import Employer from "../models/EmployerModel.js";
import JobSeeker from "../models/JobSeeker.js";
import User from "../models/UserModel.js";
import { verifyJWT } from "../utils/jwtUtils.js";

export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError("unable to access");
  try {
    const { userId, username } = verifyJWT(token);
    req.user = { userId, username };
    next();
  } catch (error) {
    console.log(error);
    throw new UnauthenticatedError("invalid authorization");
  }
};

export const authenticateEmployer = async (req, res, next) => {
  if (req.user) {
    const employer = await Employer.findOne({ owner: req.user.userId });
    if (!employer) throw new NotFoundError("No employer found");
    req.user.employerId = employer._id;
    next();
  } else {
    throw new UnauthorizedError("Not authorized. Employers only");
  }
};

export const authenticateJobSeeker = async (req, res, next) => {
  if (req.user) {
    const jobSeeker = await JobSeeker.findOne({ owner: req.user.userId });
    if (!jobSeeker) throw new NotFoundError("No Jobseeker found");
    req.user.jobseekerId = jobSeeker._id;
    next();
  } else {
    throw new UnauthorizedError("Not Authorized. Job Seekers only");
  }
};

export const checkCompany = async (req, res, next) => {
  const employer = await Employer.findById(req.user.employerId);
  if (employer.companyName) {
    next();
  } else {
    throw new BadRequestError("No company details found.");
  }
};
